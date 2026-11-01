/**
 * Concurrency Limiter & Queue Engine
 *
 * Enforces a safe upper bound on active outgoing HTTP calls to Gemini (e.g., 30 concurrent)
 * to eliminate Node.js memory pressure, socket exhaustion, and rate spikes.
 */

class ConcurrencyLimiter {
  private activeCount = 0;
  private readonly maxConcurrency = 30; // Max simultaneous outgoing LLM API connections
  private queue: Array<{
    resolve: () => void;
    reject: (err: Error) => void;
    timestamp: number;
  }> = [];
  private readonly queueTimeoutMs = 15000;

  public async acquire(): Promise<() => void> {
    if (this.activeCount < this.maxConcurrency) {
      this.activeCount++;
      return () => this.release();
    }

    return new Promise<() => void>((resolve, reject) => {
      const entry = {
        resolve: () => {
          this.activeCount++;
          resolve(() => this.release());
        },
        reject,
        timestamp: Date.now()
      };

      // Set timeout so queued callers don't wait forever under extreme surges
      const timer = setTimeout(() => {
        const idx = this.queue.indexOf(entry);
        if (idx !== -1) {
          this.queue.splice(idx, 1);
          reject(new Error('AI Tutor queue timeout due to high load'));
        }
      }, this.queueTimeoutMs);

      const originalResolve = entry.resolve;
      entry.resolve = () => {
        clearTimeout(timer);
        originalResolve();
      };

      this.queue.push(entry);
    });
  }

  private release(): void {
    this.activeCount = Math.max(0, this.activeCount - 1);
    if (this.queue.length > 0 && this.activeCount < this.maxConcurrency) {
      const next = this.queue.shift();
      if (next) {
        next.resolve();
      }
    }
  }

  public getStats() {
    return {
      active_connections: this.activeCount,
      queued_requests: this.queue.length,
      max_concurrency: this.maxConcurrency
    };
  }
}

export const concurrencyLimiter = new ConcurrencyLimiter();

/**
 * Request Coalescing / Single-Flight Pattern
 *
 * Prevents "cache stampede" when multiple students ask the exact same question
 * concurrently (e.g. during a live class or exam session).
 * Merges concurrent identical in-flight requests into a single promise.
 */

class RequestCoalescer {
  private inFlight = new Map<string, Promise<any>>();
  private coalescedHits = 0;

  public async do<T>(key: string, fn: () => Promise<T>): Promise<T> {
    const existing = this.inFlight.get(key);
    if (existing) {
      this.coalescedHits++;
      return existing as Promise<T>;
    }

    const promise = (async () => {
      try {
        return await fn();
      } finally {
        this.inFlight.delete(key);
      }
    })();

    this.inFlight.set(key, promise);
    return promise;
  }

  public getStats() {
    return {
      active_in_flight: this.inFlight.size,
      total_coalesced_hits: this.coalescedHits
    };
  }
}

export const requestCoalescer = new RequestCoalescer();

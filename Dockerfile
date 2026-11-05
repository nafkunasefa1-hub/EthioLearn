# Use Node 20 LTS Slim
FROM node:20-slim

# Install system utilities
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    git \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy dependency definitions
COPY package*.json ./

# Install dependencies cleanly
RUN npm install

# Copy application source code
COPY . .

# Build frontend and production backend bundle
RUN npm run build

# Hugging Face Spaces runs containers as non-root user (UID 1000)
RUN useradd -m -u 1000 hfuser || true
RUN chown -R 1000:1000 /app
USER 1000

# Set production environment variables
ENV NODE_ENV=production
ENV PORT=7860

# Expose Hugging Face default port
EXPOSE 7860

# Start EthioLearn server
CMD ["node", "dist/server.cjs"]

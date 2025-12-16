# Build stage
FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Expose port 3010
EXPOSE 3010

# Start preview server on port 3010
CMD ["npm", "run", "preview", "--", "--port", "3010", "--host"]

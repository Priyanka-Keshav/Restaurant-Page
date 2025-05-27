# Stage 1: Build the React app
FROM node:18-alpine AS builder

# Create app directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the production-ready React app
RUN npm run build

# Stage 2: Serve app using Nginx
FROM nginx:alpine

# Copy the React build from builder stage to Nginx's public folder
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80 (default for HTTP)
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
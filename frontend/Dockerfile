# Step 1: Build Stage
# Use a Node.js image to build the React app
FROM node:16-alpine as build-stage

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock if using Yarn) to work directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app for production
RUN npm run build

# Step 2: Serve Stage
# Use Nginx to serve the static files
FROM nginx:stable-alpine as serve-stage

# Copy the built static files from the build-stage to the Nginx serve directory
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration file
COPY ./default.conf /etc/nginx/conf.d/default.conf

# Expose port 80 to the Docker host, so we can access the app
EXPOSE 80

# Start Nginx and serve the application
CMD ["nginx", "-g", "daemon off;"]

# Step 1: Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Install PM2 globally
RUN npm install pm2 -g


# Step 2: Set the working directory in the container
WORKDIR /usr/src/app

# Step 3: Copy the package.json files and install dependencies
COPY package*.json ./
RUN npm install

# Step 4: Copy the rest of your application's code
COPY . .

# Step 5: Build your application
RUN npm run build

# Step 6: Expose the port your app runs on
EXPOSE 3000

# Step 7: Run your app using PM2 runtime
CMD ["pm2-runtime", "start", "dist/main.js"]

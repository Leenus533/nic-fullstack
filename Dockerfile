# Use an official Node.js runtime as the base image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the project dependencies using npm
RUN npm install

# Copy the entire project to the working directory
COPY . .

ENV DOCKER_CONTAINER true

# Build the Next.js application using npm
RUN npm run build

# Expose the port on which your Next.js app will run
EXPOSE 3000

# Start the Next.js application using npm
CMD ["npm", "start"]

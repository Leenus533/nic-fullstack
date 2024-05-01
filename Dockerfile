# Use an official Bun runtime as the base image
FROM oven/bun:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
COPY bun.lockb ./

# Install the project dependencies using Bun
RUN bun install

# Copy the entire project to the working directory
COPY . .

# Build the Next.js application using Bun
RUN bun run build

# Expose the port on which your Next.js app will run
EXPOSE 3000

# Start the Next.js application using Bun
CMD ["bun", "start"]
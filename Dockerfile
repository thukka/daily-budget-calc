# Use an official Node runtime as a parent image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the source code
COPY . .

# Build the app
RUN npm run build

# EXPOSE instruction to have it mapped by the docker daemon
EXPOSE 3000

# Define the command to the app using CMD which defines your runtime
CMD ["npm", "start"]
# Use official Node.js image from Docker Hub
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the server.js file to the working directory
COPY server.js .

# Expose the port the app will run on
EXPOSE 8080

# Run the Node.js server
CMD ["node", "server.js"]

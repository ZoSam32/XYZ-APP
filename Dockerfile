# Use the base node 18.6.0 image
FROM node:18.6.0
# Set the local working dir 
WORKDIR /
# Copy app files 
COPY . .
# Install pre req
RUN npm install express
# Instructions to run app in container
CMD ["node", "src/index.js"]
# The published container network port
EXPOSE 3001
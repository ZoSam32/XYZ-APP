FROM node:18.6.0
WORKDIR /
COPY . .
RUN npm install express
CMD ["node", "src/index.js"]
EXPOSE 3001
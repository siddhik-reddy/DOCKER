FROM node:18-alpine
WORKDIR /DOCKER
COPY . .
RUN npm install
EXPOSE 4000
CMD ["node", "index.js"]
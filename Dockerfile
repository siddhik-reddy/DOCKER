FROM node:18-alpine
RUN npm install -g nodemon
WORKDIR /VOLUMES
COPY . .
RUN npm install
EXPOSE 4001
CMD ["npm", "run", "dev"]
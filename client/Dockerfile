FROM node:14.17-alpine as build

WORKDIR /app/front

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev"]
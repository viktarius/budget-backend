FROM node:16-alpine

WORKDIR /src/api/

ADD . .

RUN npm install

EXPOSE 3000

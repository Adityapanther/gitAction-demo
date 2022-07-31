# syntax=docker/dockerfile:1

FROM node:12.18.1

WORKDIR /

COPY ["package.json", "package-lock.json*", "/"]

RUN npm install

RUN npm install pm2 -g
RUN npm install --save-dev nodemon

COPY . .

EXPOSE 3000

CMD [ "npm", "start"]

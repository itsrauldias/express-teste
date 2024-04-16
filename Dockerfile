FROM node:20 AS base

FROM base AS dependencies

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

EXPOSE 80

CMD [ "npm", "start" ]
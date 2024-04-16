FROM alpine:latest

RUN apk add --no-cache --update nodejs npm

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "run", "server"]
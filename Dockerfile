FROM node:16.13.2-alpine
LABEL maintainer="FischerNZ"
LABEL email="fischerrobson@gmail.com"
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3333
CMD npm run dev
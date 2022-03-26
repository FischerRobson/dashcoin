FROM node:16.13.2-alpine
LABEL maintainer="FischerNZ"
LABEL email="fischerrobson@gmail.com"
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3333
CMD npm run dev

# docker container run -p 3333:3333 --name dashcoin [image_name]
FROM node:16
RUN npm i -g nodemon
RUN mkdir -p /home/app

COPY . /home/app

WORKDIR /home/app

EXPOSE 3000

CMD ["nodemon", "src/index.js"]
FROM node:5.3
MAINTAINER Brandon Valosek <bvalosek@gmail.com>

ENV PORT 25739
EXPOSE ${PORT}/tcp

ENV APP_BASE /opt/bvalosek.com
WORKDIR ${APP_BASE}

RUN mkdir -p $APP_BASE/app
COPY ./package.json ./
RUN npm install

COPY ./server/app ./app

CMD ["npm", "start"]


FROM node:5.3
MAINTAINER Brandon Valosek <bvalosek@gmail.com>

ENV PORT 8000
EXPOSE ${PORT}/tcp

ENV APP_BASE /opt/bvalosek.com
RUN mkdir -p $APP_BASE/app

WORKDIR ${APP_BASE}

COPY ./package.json ./
RUN npm install

COPY ./app ./app

COPY ./gulpfile.js ./
RUN npm run build

CMD ["npm", "start"]


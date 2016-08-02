FROM node:argon
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install

COPY . /usr/src/app

RUN echo '{ "allow_root": true }' > /root/.bowerrc
RUN npm install bower -g -s
RUN npm install knex -g -s
RUN cd /usr/src/app/public && bower install angular

EXPOSE 3000
CMD [ "knex", "migrate:latest" ]
CMD [ "knex", "seed:run" ]
CMD [ "npm", "start" ]


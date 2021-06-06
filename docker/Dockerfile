FROM node:12.13.0

WORKDIR /usr/src/web

COPY . .

RUN yarn global add @vue/cli
RUN yarn install

CMD ["yarn", "run", "serve"]

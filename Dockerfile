FROM node:alpine

WORKDIR	/app

COPY package.json ./

RUN npm i

RUN npm i -g serve

COPY ./ ./

RUN npm run build

CMD ["npm","run","d"]

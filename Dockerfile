FROM node:22-alpine

WORKDIR /app
COPY ./app .
RUN rm -f -r node_modules && npm install

CMD npm run dev
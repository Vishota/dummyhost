FROM node:22-alpine

WORKDIR /app
COPY ./app app
RUN rm -r node_modules && npm install && npm run dev
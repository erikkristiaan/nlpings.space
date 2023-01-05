# Builder for React front-end
FROM node:18-alpine AS app-builder

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY ./app ./
RUN npm install
RUN npm install react-scripts@5.0.1 -g
RUN npm run build

# Express Server Container
FROM node:18-alpine

WORKDIR /app
COPY ./server ./
RUN npm install
COPY --from=app-builder /app/build ./build

CMD [ "npm", "start" ]
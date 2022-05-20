FROM node:16-alpine

RUN mkdir -p /app
WORKDIR /app
RUN echo 'Create app directory'

COPY package*.json /app
RUN npm install
RUN echo 'Installing dependencies'

COPY . /app
RUN echo 'Copying source files'

EXPOSE 3000
ENV PORT 3000
RUN echo 'Building app'


CMD "npm" "start"
RUN echo 'Running the app'

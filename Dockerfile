FROM node:10

# make the 'app' folder the current working directory
WORKDIR /app

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

RUN npm install --loglevel info

RUN npm install -g http-server
RUN npm install babel-loader

# build app for production with minification
RUN yarn build

EXPOSE 8080

CMD [ "http-server", "dist" ]
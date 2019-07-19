FROM node:10

# make the 'app' folder the current working directory
WORKDIR /app

RUN npm install -g http-server
RUN npm install babel-loader

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install --loglevel info

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
RUN yarn build

EXPOSE 8080

CMD [ "http-server", "dist" ]
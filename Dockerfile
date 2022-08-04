# pull offical bas eimage
FROM node:alpine
# set working dir
WORKDIR /react_app

# add `/react_app/node_modules/.bin` to $PATH
#ENV PATH /react_app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./

# RUN npm install react-scripts@18.2.0 --location=global

COPY . ./
RUN npm i
CMD ["npm", "run", "start"]
#Base Image on which the the image will be built
FROM node:16-alpine

#Base Directory in the container image 
WORKDIR /app

#Copy the package json file from source to the destination
COPY package.json .

#Installing all the dependencies
RUN npm install

#Copy the rest of code to the container base folder
COPY ./dist/ .

#Exposing the port 8000 of the container to accept all incoming connections
EXPOSE 8000

CMD ["npm","start"]
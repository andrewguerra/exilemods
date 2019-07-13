# base image
FROM node

WORKDIR /exile-mods-app

# copy build to destination folder
COPY . .

# install dependencies
RUN npm install
RUN npm install -g @angular/cli

EXPOSE 4200

CMD ng serve --host 0.0.0.0
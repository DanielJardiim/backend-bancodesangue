FROM ubuntu:22.04
FROM node:18.14.2

WORKDIR /usr/app

COPY . /usr/app/

RUN npm install 

RUN echo "Imagem criada e aplicação rodando com sucesso"

EXPOSE 8000
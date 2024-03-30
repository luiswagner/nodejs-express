#Montando a imagem com base em outra imagem
#DockerFile: Arquivo padrão de imagem
#Usando como base a imagem abaixo. Aqui é definido o ambiente.
FROM node:20.11.1-alpine3.19
#Instalando as instruções em bash dentro do container
#Instalando o bash pois a imagem não vem
#Toda instrução de bashclear
RUN apk add --no-cache bash

#Passar enviroments enquanto buildar
#setando variáveis do node
ENV NODE_ENV=development

#Iniciando o diretório padrão para executar qualquer coisa
#Tudo que acontecer vai ser nesse diretório
WORKDIR /home/node/app

#Construindo a build
#docker build -t codelab-none:1.0 .docker/node/


#Copiando tudo que esta dentro para o container
COPY . .


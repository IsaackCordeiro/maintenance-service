# Usa uma imagem oficial do Node.js (versão leve)
FROM node:18-alpine

# Cria o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copia os arquivos de dependência primeiro (otimiza o cache do Docker)
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todo o resto do código da sua máquina para o container
COPY . .

# Expõe a porta que o serviço vai rodar
EXPOSE 3003

# Comando para iniciar a aplicação
CMD ["node", "server.js"]
From node
WORKDIR /src
COPY . .
expose 9999
CMD node index.js
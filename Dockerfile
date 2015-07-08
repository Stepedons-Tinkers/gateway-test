FROM mhart/alpine-node
WORKDIR /src
ADD . .
RUN npm install
EXPOSE 3333
CMD ["node", "index.js"]

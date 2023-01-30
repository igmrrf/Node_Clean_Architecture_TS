FROM node:lts

WORKDIR /usr/src/app

RUN apt-get install -y gnupg

RUN apt-get -yq update && \
     apt-get -yqq install ssh

RUN mkdir /root/.ssh && chmod 0700 /root/.ssh && ssh-keyscan -t rsa bitbucket.org >> /root/.ssh/known_hosts && ssh-keyscan -t rsa github.com >> /root/.ssh/known_hosts

COPY ./package*.json ./

RUN npm install

COPY . .

ENV NEW_RELIC_NO_CONFIG_FILE=true

CMD [ "npm", "run", "workers" ]

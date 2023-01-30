FROM node:lts

FROM base as builder

# deps for post-install scripts
RUN apk add --update --no-cache \
    python \
    make \
    git \
    g++


RUN apt-get install -y gnupg

RUN apt-get -yq update && \
     apt-get -yqq install ssh

RUN mkdir /root/.ssh && chmod 0700 /root/.ssh && ssh-keyscan -t rsa bitbucket.org >> /root/.ssh/known_hosts && ssh-keyscan -t rsa github.com >> /root/.ssh/known_hosts


WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

FROM base

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/node_modules ./node_modules

COPY . .

RUN NODE_ENV=production npm run build

ENV NEW_RELIC_NO_CONFIG_FILE=true

EXPOSE 30123


# start the application
CMD [ "npm", "start" ]

# Trigger build
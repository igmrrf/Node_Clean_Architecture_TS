FROM node:19.3.0-alpine as base

FROM base as builder

# deps for post-install scripts
RUN apk add --update --no-cache \
    python \
    make \
    git \
    g++

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

FROM base

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/node_modules ./node_modules

COPY . .

RUN NODE_ENV=production npm run build

EXPOSE 30123


# start the application
CMD [ "npm", "start" ]

# Trigger build
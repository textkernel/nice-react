FROM node:8

MAINTAINER Alexander I. Antipin <alex@antipin.com>

WORKDIR /srv/storybook
COPY . ./
RUN npm install && npm run build-storybook

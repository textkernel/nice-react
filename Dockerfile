FROM node:8

MAINTAINER Alexander I. Antipin <alex@antipin.com>

WORKDIR /srv/nice-react
COPY . ./
RUN npm ci
RUN npm run build-storybook

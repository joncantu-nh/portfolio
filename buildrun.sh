#!/bin/zsh

nvm use
npm install
npm run build
npm run test:ci
npm start

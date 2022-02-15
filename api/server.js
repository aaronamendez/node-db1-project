const express = require('express');
const server = express();
const router = require('./accounts/accounts-router');

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use('/api/accounts', router);

module.exports = server;

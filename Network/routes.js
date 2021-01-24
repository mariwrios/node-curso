const express = require ('express');
const message = require('../componentes/message/network');


const routes = function(server) {
     server.use('/message', message);
}

module.exports = routes;
'use strict';
require('dotenv').config();
const server= require('./server');
server.start(process.env.PORT || 3002);

const x=1;


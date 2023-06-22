const express = require('express');
const apiRoutes = require('./public/apiRoutes');
const htmlRoutes = require('./public/htmlRoutes');
const PORT = process.env.PORT || 3000;

const app = express();
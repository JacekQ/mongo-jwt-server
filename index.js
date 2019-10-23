const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');

// MongoDB setup for localhost database
mongoose.connect('mongodb://localhost:27017/auth', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// App setup
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// Server setup - use port 3090
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);

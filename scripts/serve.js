// Gets called when running npm start

var path = require('path');
var express = require('express');
var ip = require('ip');
var opener = require("opener");

var app = express();

var PROD = process.env.NODE_ENV === 'production';

if (PROD) {
  app.use(express.static('dist'));
} else {
  var webpack = require('webpack');
  var config = require('../webpack.config');
  var compiler = webpack(config);

  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

app.listen(3000, '0.0.0.0', function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Server started');
    console.log('Your app is available at http://' + ip.address() + ':3000 on any device in your local network!');
    opener(`http://${ip.address()}:3000`);
  }
});
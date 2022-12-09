/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable eol-last */
const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('../webpack.dev');

const server = new WebpackDevServer(webpack(config), {});

server.listen(8888, 'localhost', (err) => {
  if (err) {
    return;
  }
  if (process.send) {
    process.send('ok');
  }
});

import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import devConfig from './dev.config';
import path from 'path';
import touch from 'touch';

const devEnv = require('../config/dev-environment');

const WEBPACK_HOST = process.env.HOST || 'localhost';
const WEBPACK_PORT = parseInt(process.env.PORT) || devEnv.webpackPort;

const config = devConfig(WEBPACK_HOST, WEBPACK_PORT);

const proxyPath = 'http://localhost:' + devEnv.backendPort + '/';
console.log('proxyPath', proxyPath);

const serverOptions = {
  contentBase: `http://${WEBPACK_HOST}:${WEBPACK_PORT}`,
  quiet: true,
  noInfo: true,
  hot: true,
  publicPath: config.output.publicPath,
  proxy: {
    '/api*': 'http://gocardless.dev:3000',
    '/guides*': 'http://localhost:4001',
    '/fr/guides*': 'http://localhost:4001',
    '/direct-debit*': 'http://localhost:4001',
    '*': proxyPath,
  },
};

const compiler = webpack(config);
const webpackDevServer = new WebpackDevServer(compiler, serverOptions);

webpackDevServer.listen(WEBPACK_PORT, '0.0.0.0', () => {
  const url = `http://${WEBPACK_HOST}:${WEBPACK_PORT}`;
  console.log('Webpack development server listening on %s', url);

  // Open browser
  require('opn')(url);
});

compiler.plugin('compile', function() {
  console.log('compiling - writing update file');
  touch(path.join(__dirname, '..', 'env', 'restart.txt'), { mtime: true }, function(err) {
    if (err) {
      console.error(err);
    }
  });
});


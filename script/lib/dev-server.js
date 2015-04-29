#!/usr/bin/env node

'use strict';

var colours = require('colors/safe');

var argv = require('minimist')(process.argv.slice(2));

var fs = require('fs');
var path = require('path');
var compression = require('compression');
var ChildProcess = require('child_process');
var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({});

var config = JSON.parse(fs.readFileSync('./config/dev-env.json'));

var express = require('express');

var options = {
  verbose: argv.v || argv.verbose || false,
  host: argv.h || argv.host || 'localhost',
  port: argv.p || argv.port || 4440,
};

function ServerProcess(serverConfig) {
  this.alive = false;
  this.onerror = function(err) {
    console.log(colours.red('Child process error: '), err);
    this.alive = false;
  };
  this.onclose = function(code) {
    console.log(colours.grey('Child process closed: '), code);
    this.alive = false;
  };
  this.pipeout = function(child, stream, colour, error) {
    var self = this;
    child.on('data', function(msg) {
      stream.write(colour(msg));
      if (error) {
        self.lastError += msg;
        self.lastErrorTime = (new Date()).getTime();
      }
    });
  };
  this.start = function() {
    var env = process.env;
    env.PORT = config.dev_port;
    this.lastRestart = (new Date()).getTime();
    env.PORT = serverConfig.devPort;
    this.child = ChildProcess.spawn(serverConfig.runnerCommand, serverConfig.runnerArgs, {env: env});
    this.lastError = '';
    this.pipeout(this.child.stdout, process.stdout, colours.grey, false);
    this.pipeout(this.child.stderr, process.stderr, colours.red, true);
    this.child.on('error', this.onerror);
    this.child.on('close', this.onclose);
    this.alive = true;
  };
  this.kill = function() {
    this.child.kill();
    this.alive = false;
  };
  this.restart = function() {
    if (this.alive) {
      this.kill();
    }
    console.log(colours.cyan('[ restarting web server ]'));
    this.start();
  };
  this.hasError = function() {
    return (this.lastRestart <= this.lastErrorTime);
  };
  this.getError = function() {
    return this.hasError() ? this.lastError : '';
  };
}


var serverProcess = new ServerProcess(config);
serverProcess.start();

var builderProcess = new ServerProcess({
  port: '3001',
  runnerCommand: './node_modules/.bin/babel-node',
  runnerArgs: ['./webpack/server.js'],
});
builderProcess.start();

process.on('beforeExit', function() {
  serverProcess.kill();
  builderProcess.kill();
});

var server = express();

server.get('/_server/restart-server', function(req, res) {
  serverProcess.restart();
  res.send('ok');
});

server.use(express.static(path.join(__dirname, 'public')));
server.use(express.static(path.join(__dirname, 'app')));

server.use(compression());

proxy.on('error', function(err, req, res) {
  if (err.code !== 'ECONNREFUSED') {
    console.log(err);
  }
  if (!serverProcess.hasError()) {
    res.send(config.loadingSite);
  } else {
    var errorMessage = serverProcess.getError();
    errorMessage = errorMessage.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    res.send('<style>body{font-family:helvetica;}</style><h3>Server Error:</h3><pre><code>' + errorMessage + '</code></pre>');
  }
});

server.use(function(req, res) {
  proxy.web(req, res, { target: config.devTarget });
});

server.listen(options.port);
console.log(colours.yellow('Dev Server Listening on http://0.0.0.0:' + options.port + '/'));


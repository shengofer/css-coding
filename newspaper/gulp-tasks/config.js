//var bowerJson = require('../bower.json');

var node_env = process.env.NODE_ENV;
var isProduction = node_env === 'production';
var bowerJson = require('../bower.json');

var PATH = {
  src: {
	client: 'client'
  },
  dist: {
	app: 'dist'
  }
};


module.exports = {
  PATH: PATH,
  isProduction: isProduction,
  bowerJson: bowerJson
};

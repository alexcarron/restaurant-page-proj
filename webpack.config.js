const path = require('path');

module.exports = {
	mode: 'development',
	devtools: eval,
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
};
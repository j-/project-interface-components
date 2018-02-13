const { resolve } = require('path');

module.exports = {
	entry: resolve(__dirname, './src/index.ts'),

	output: {
		filename: 'index.js',
		path: resolve(__dirname, './out/build/'),
	},

	devtool: 'source-map',

	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
	},

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: {
					loader: 'awesome-typescript-loader',
					options: {
						silent: true,
					},
				},
			},
			{
				test: /\.js$/,
				loader: 'source-map-loader',
				enforce: 'pre',
			},
		],
	},
};

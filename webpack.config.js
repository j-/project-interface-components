const { resolve } = require('path');
const { EnvironmentPlugin } = require('webpack');
const { version } = require('./package.json');

module.exports = {
	entry: resolve(__dirname, './src/index.ts'),

	output: {
		filename: 'pic.js',
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

	plugins: [
		new EnvironmentPlugin({
			'NODE_ENV': 'development',
			'VERSION': version,
		}),
	],
};
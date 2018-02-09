const { resolve } = require('path');

// Get configuration from application
const config = require('@storybook/react/dist/server/config/defaults/webpack.config')(require('../webpack.config'));

module.exports = Object.assign({}, config, {
	context: resolve(__dirname, '..'),

	resolve: Object.assign({}, config.resolve, {
		alias: {
			'pic': resolve(__dirname, '../src'),
		},
	}),
});

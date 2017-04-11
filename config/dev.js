const webpackMerge = require('webpack-merge')
const commonConfig = require('./base.js');

module.exports = function (env) {
		return webpackMerge(commonConfig(), {
				devServer: {
						historyApiFallback: true,
						noInfo: false,
						stats: 'minimal'
				}
		})
}
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const APP_DIR = path.resolve(__dirname, './../app');
const BUILD_DIR = path.resolve(__dirname, './../dist');

module.exports = function () {
		return {
				entry: APP_DIR + '/index.js',
				output: {
						filename: 'bundle.js',
						path: BUILD_DIR
				},
				module: {
						rules: [
								{
										test: /\.js$/,
										exclude: /node_modules/,
										loader: "babel-loader",
										options: {
												presets: [
														[
																'es2015', {
																		modules: false
																}
														]
												]
										}
								}, {
										test: /\.css$/,
										use: ExtractTextPlugin.extract({fallback: "style-loader", use: 'css-loader'})
								}
						]
				},
				plugins: [
						new HtmlWebpackPlugin({title: 'e mart', filename: 'index.html', template: 'app/index.html'}),
						new ExtractTextPlugin('styles.css')
				]
		};

}
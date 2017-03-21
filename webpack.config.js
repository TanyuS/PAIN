'use strict';

const NODE_ENV = process.env.NODE_ENV || "development";
const webpack = require("webpack");
//const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {

	entry: {
		main: "./app/scripts/main",
		admin: "./app/scripts/admin",
		stat: "./app/scripts/stat"
	},
	output: {
		path: __dirname + '/public/scriptsBuild',
		filename: "[name].js",
		library: "[name]"
	},

	watch: NODE_ENV == "development",
	watchOptions: {
		aggregateTimeout: 500
	},

	devtool: NODE_ENV == "development" ? "cheap-inline-module-source-map" : false,
	resolve: {
		modules: ["node_modules"],
		extensions: ["*", ".js"]
	},
	resolveLoader: {
		moduleExtensions: ["*-loader", "*"]
	},
	plugins: [

		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.DefinePlugin({
			NODE_ENV: JSON.stringify(NODE_ENV),
			LANG: JSON.stringify('ru')
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: "common"
		}),
		//new ExtractTextPlugin("public/css/styles.css")
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: 'node_modules',
				loader: 'babel-loader'
			},
			{
				test: /\.less$/i,
				use: [{
					loader: "style-loader" // creates style nodes from JS strings
				}, {
					loader: "css-loader" // translates CSS into CommonJS
				}, {
					loader: "less-loader" // compiles Less to CSS
				}],
				exclude: /node_modules/,
				include: [
					__dirname + "app/less"
				]
			},
			{ test: /\.(eot|svg|ttf|woff|woff2)$/, exclude: /node_modules/, loader: "file-loader" }
		]
	}
};

if (NODE_ENV == 'production') {
	module.exports.plugins.push(
			new webpack.optimize.UglifyJsPlugin({
				compress: {
					warnings: false,
					drop_console: true,
					unsafe: true
				}
			})
	)
}
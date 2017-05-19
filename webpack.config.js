const webpck = require("webpack");
const path = require("path");
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
//
// const extractSass = new ExtractTextPlugin({
// 	fileName: "[name].[contenthash].css"
// });

var dirBuild = path.resolve(__dirname, 'src/public');
var dirApp = path.resolve(__dirname, 'src/app');

var config = {
	entry:dirApp + '/index.jsx',
	output:{
		path:dirBuild,
		filename:"bundle.js"
	},
	module:{
		loaders:[
			{
				test:/\.jsx?/,
				include:dirApp,
				loader:'babel-loader'
			}/*,
			{
				test:/\.scss?/,
				loader:extractSass.extract(['css-loader', 'less-loader'])
			},
			{
				test:/\.css?/,
				loader:extractSass.extract(['css-loader'])
			}*/
		]
	}/*,
	plugins:[
		extractSass
	]*/
};

module.exports = config;

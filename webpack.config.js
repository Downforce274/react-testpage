const webpck = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

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
		/*loaders:[
			{
				test:/\.jsx?/,
				include:dirApp,
				use:'babel-loader'
			}],*/
			rules:[
				{
					test:/\.jsx?/,
					use:'babel-loader'
				},
				{
					test:/\.css$/,
					use:ExtractTextPlugin.extract({
						use:'css-loader?importLoaders=1'
					})
				},
				{
					test:/\.(sass|scss)$/,
					use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
				}
			]
			/*
			{
				test:/\.ms[ac]ss$/,
				use:[{
					loader: 'style-loader',
					options: { sourceMap: true }
				}, {
					loader: 'css-loader',
					options:{
						localIdentName: '[sha512:hash:base32]-[name]-[local]',
						modules:true,
						sourceMap:true
					}
				}, {
					loader:'postcss-loader',
					options: { sourceMap: true }
				}, {
					loader: 'sass-loader',
					options: {
						includePaths: config,
						sourceMap :true
					}
				}
			]
		}*/

		//]
	},
	plugins:[
		new ExtractTextPlugin({
			filename:'[name].bundle.css',
			allChunks:true,
		}),
	],
};

module.exports = config;

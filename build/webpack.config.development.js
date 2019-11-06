const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const base = require("./webpack.config.base");

const env = process.env.NODE_TYPE;
const entry = {
	"react-demo": '../src/assemble.js'
}
const output = {
	"react-demo": '../dist/react-demo'
}

module.exports = merge(base, {
	mode: "development",
	entry: {
		assemble: ['@babel/polyfill', path.resolve(__dirname, entry[env])]
	},
	output: {
		path: path.resolve(__dirname, output[env]),
		filename: "js/[name].js",
		chunkFilename: "js/[name].js",
		publicPath: "/"
	},
	devtool: "eval-source-map",
	devServer: {
		contentBase: "./dist",
		hot: true
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("development")
			}
		})
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [{
					loader: "style-loader",
				}, {
					loader: "css-loader",

				}, {
					loader: "postcss-loader",
					options: {
						config: {
							path: path.resolve(__dirname,"./postcss.config.js")
						}
					}
				}]
			},
			{
				test: /\.scss|sass$/,
				use: [{
					loader: "style-loader" // 将 JS 字符串生成为 style 节点
				}, {
					loader: "css-loader", //
					options: {
						modules: true, //class局部作用域
						localIdentName: "[local]--[hash:base64:5]"
					}
				}, {
					loader: "sass-loader" // 将 Sass 编译成 CSS
				}]
			},
			{
				test: /\.less$/,
				include: /(src)/,
				use: [{
					loader: "style-loader" // creates style nodes from JS strings
				}, {
					loader: "css-loader",   // translates CSS into CommonJS
					options: {
						modules: true, //class局部作用域
						localIdentName: "[local]--[hash:base64:5]"
					}
				}, {
					loader: "less-loader", // compiles Less to CSS
				}]
			},
			{
				test: /\.less$/,
				include: /(node_modules)/,
				use: [{
					loader: "style-loader" // creates style nodes from JS strings
				}, {
					loader: "css-loader",   // translates CSS into CommonJS
				}, {
					loader: "less-loader", // compiles Less to CSS
					options: {
						javascriptEnabled: true
					}
				}]
			}
		]
	}
});

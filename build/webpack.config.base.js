const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const filePublicPath="styles/assets/[name].[ext]";

const env = process.env.NODE_TYPE;
const template = {
	"react-demo": 'src/views/assemble.html',
}
const fileOut = `./assets`; 

module.exports = {
	context: path.resolve(__dirname, ".."),
	resolve: {
		modules: [
			path.resolve(__dirname, "../src"),
			path.resolve(__dirname, "../node_modules"),
			"node_modules"
		],
		alias: {
			src: path.resolve(__dirname, "../src"),
			ASSETS: "src/assets",
			COMPONENTS: "src/components",
			CONTAINERS: "src/containers",
			MOCK: "src/mock",
			MODULES: "src/modules",
			ROUTER: "src/router",
			STORE: "src/store",
			STYLES: "src/styles",
			UTILS: "src/utils",
		},
		extensions: [ ".web.js", ".js", ".jsx", ".less", ".css", ".json", ".scss" ] //自动解析的扩展
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				loader: ['babel-loader', 'eslint-loader'],
				exclude: [/node_modules/, /assets/, /iconfont\.js/],
				include: path.resolve(__dirname, "../src")
			},
			{
				test: /\.(eot|woff|ttf|ico)$/,
				use: [{
					loader: "file-loader",
					options:{
						name: '[name].[ext]',
						outputPath: fileOut,
						publicPath: '../assets'
					}
				}]
			},
			{
				test: /\.(jpe?g|png|gif)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
						outputPath: fileOut,
						publicPath: '../assets'
                    }
                }]
			},
			{
				test: /\.svg$/i,
				use: [
					{
						loader: "url-loader",
						options:{
							name:filePublicPath
						}
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
            template: template[env],
            filename: 'assemble.html',
            minify: true,
			inject: true,
		}),
		new CaseSensitivePathsPlugin()
	],
	externals: [
		//扩展，import 下属模块的时候不会打包生成Bundle
		require("webpack-require-http") //支持require 线上地址资源
	]
};

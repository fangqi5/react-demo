const path = require("path");
const webpack = require("webpack");
const base = require("./webpack.config.base");
const merge = require("webpack-merge");
const WebpackMd5Hash = require("webpack-md5-hash");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const env = process.env.NODE_TYPE;
const entry = {
    "react-demo": '../src/assemble.js'
}
const output = {
    "react-demo": '../dist/react-demo'
}

module.exports = merge(base, {
    mode: "production",
    entry: {
        activity: ['@babel/polyfill', path.resolve(__dirname, entry[env])]
    },
    output: {
        path: path.resolve(__dirname, output[env]),
        filename: "js/[name].[chunkhash].js",
        chunkFilename: "js/[name].[chunkhash:5].js",
        publicPath: "./"
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    priority: -20,
                    chunks: "all",
                    enforce: true
                }
            }
        },
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions:{
                    compress :{
                        drop_console:true,//去除console.log
                    }
                }
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new WebpackMd5Hash(),
		// new BundleAnalyzerPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "styles/[name].[chunkhash].css"
        }),
        new webpack.ContextReplacementPlugin(
            /moment[/\\]locale$/,
            /zh-cn/,
        ),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        // by default it use publicPath in webpackOptions.output
                        publicPath: "/"
                    }
                }, {
                    loader: "css-loader"
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
                test: /\.scss$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader
                }, {
                    loader: "css-loader",
                    options: {
                        modules: true, //class局部作用域
                        localIdentName:'[local]--[hash:base64:5]'
                    }
                }, {
                    loader: "postcss-loader",
                    options: {
                        config: {
                            path: path.resolve(__dirname,"./postcss.config.js")
                        }
                    }
                }, {
                    loader: "sass-loader"
                }]
            },
			{
				test: /\.less$/,
				include: /(src|MiniHeader)/,
				use: [{
					loader: MiniCssExtractPlugin.loader // creates style nodes from JS strings
				}, {
					loader: "css-loader",   // translates CSS into CommonJS
					options: {
						modules: true, //class局部作用域
						localIdentName: "[local]--[hash:base64:5]"
					}
				}, {
                    loader: "postcss-loader",
                    options: {
                        config: {
                            path: path.resolve(__dirname,"./postcss.config.js")
                        }
                    }
                }, {
					loader: "less-loader", // compiles Less to CSS
				}]
			},
			{
				test: /\.less$/,
				include: /(node_modules)/,
				exclude: /MiniHeader/,
				use: [{
					loader: MiniCssExtractPlugin.loader // creates style nodes from JS strings
				}, {
					loader: "css-loader",   // translates CSS into CommonJS
				}, {
                    loader: "postcss-loader",
                    options: {
                        config: {
                            path: path.resolve(__dirname,"./postcss.config.js")
                        }
                    }
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

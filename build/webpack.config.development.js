const path = require("path");
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var webpack = require("webpack");
const base = require("./webpack.config.base");
const merge = require("webpack-merge");
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const modifyVars = {
    "primary-color": "#0ba29a",
    "link-color": "#0ba29a",
    "border-radius-base": "2px",
}
module.exports=merge(base,{
    mode:"development",
    devtool:"source-map",
    entry:{
        assemble:['@babel/polyfill',path.resolve(__dirname, "../src/assemble.js")]
    },
    output:{
        path:path.resolve(__dirname,"./dist"),
        filename:"scripts/bundle.js",
		chunkFilename: "js/[name].js",
		publicPath: "/"
    },
    devServer:{
        port:"8001",
        inline:true,
        historyApiFallback:true,
        proxy: {
            '/api': {
              target: 'http://localhost:3004',
              pathRewrite: {'^/api' : ''},
              changeOrigin: true,     // target是域名的话，需要这个参数，
              secure: false,          // 设置支持https协议的代理
            },'/server': {
                target: 'https://webapp.leke.cn/',
                pathRewrite: {'^/server' : ''},
                changeOrigin: true,     // target是域名的话，需要这个参数，
                secure: false,          // 设置支持https协议的代理
              },'/top': {
                target: 'https://www.fangqi5.top/',
                pathRewrite: {'^/top' : ''},
                changeOrigin: true,     // target是域名的话，需要这个参数，
                secure: false,          // 设置支持https协议的代理
              },
          }
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[{
                        loader:'style-loader'
                    },{
                        loader:'css-loader',
                        options:{
                            modules:true,
                            localIdentName: "[local]"
                        }
                    }
                ]
            },
            {
                test:/\.scss$/,//sass文件编译要使用style-loader，css-loader，sass-loader，顺序不能改变，这样样式才会生效
                use:[
                    {
                        loader:MiniCssExtractPlugin.loader,
                        options:{
                            publicPath:'../'//修改文件中loader解析规则，保证打包后的图片路径正确
                        }
                    },
                    {
                        loader:'css-loader',
                        options:{
                            modules:true,
                            localIdentName: "[local]--[hash:base64:5]"
                        }
                    },
                    {
                        loader:'sass-loader',
                    },
                ]
            },
			{
				test: /\.less$/,
				include: /(src|MiniHeader)/,
				use: [{
					loader: "style-loader" // creates style nodes from JS strings
				}, {
					loader: "css-loader",   // translates CSS into CommonJS
					options: {
						modules: false, //class局部作用域
						localIdentName: "[local]--[hash:base64:5]"
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
					loader: "style-loader" // creates style nodes from JS strings
				}, {
					loader: "css-loader",   // translates CSS into CommonJS
				}, {
					loader: "less-loader", // compiles Less to CSS
					options: {
						modifyVars: modifyVars,
						javascriptEnabled: true
					}
				}]
			},
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: "./styles/[name].css",
            chunkFilename: '[id].css',
            ignoreOrder: false,
        }),
        new webpack.HotModuleReplacementPlugin(), //热加载实现有两种方式，第一在scripts中添加--hot，第二就是使用该插件，两者一起使用会报错
        new OptimizeCssAssetsWebpackPlugin(),
    ]
})
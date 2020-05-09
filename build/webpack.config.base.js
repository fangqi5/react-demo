const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const fileOut = `./assets`; 
module.exports={
    resolve: {
        modules: [//modules配置webpack去那些目录下寻找第三方模块
			path.resolve(__dirname, "../src"),
			path.resolve(__dirname, "../node_modules"),
			"node_modules"
		],
        alias: {
            src: path.resolve(__dirname, "../src"),
            ASSETS:"src/assets",
            ROUTER:"src/router",
            CONTAINERS:"src/containers",
            VIEWS:"src/views",
            UTILS:"src/utils"
        },
		extensions: [ ".web.js", ".js", ".jsx", ".less", ".css", ".json", ".scss" ] //自动解析的扩展
    },
    module:{
        rules:[
            {
                test:/\.(jsx|js)$/,
                exclude:/node-modules/,
                loader:['babel-loader', 'eslint-loader'],
                include: path.resolve(__dirname, "../src")
            },
            {
				test: /\.(jpe?g|png|gif)$/i,//打包图片
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
				test: /\.(eot|woff|ttf|ico)$/,//加载字体文件
				use: [{
					loader: "file-loader",
					options:{
						name: '[name].[ext]',
						outputPath: fileOut,
						publicPath: '../assets'
					}
				}]
			},
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "src/views/assemble.html", //new一个插件的实例，并传入相关的参数
            filename: 'assemble.html',
            minify: true,
			inject: true,
        }),
        new CleanWebpackPlugin()
    ]
}
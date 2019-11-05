const path = require("path");
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var webpack = require("webpack");
const base = require("./webpack.config.base");
const merge = require("webpack-merge");
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

module.exports=merge(base,{
    mode:"development",
    devtool:"source-map",
    entry:['@babel/polyfill',path.resolve(__dirname, "../src/assemble.js")],
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
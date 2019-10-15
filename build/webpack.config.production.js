const path = require("path");
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
const base = require("./webpack.config.base");
const merge = require("webpack-merge");
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

module.exports=merge(base,{
    mode:"production",
    entry:path.resolve(__dirname, "../src/assemble.js"),
    output:{
        path:path.resolve(__dirname,"../dist"),
        filename:"scripts/bundle.js",
        chunkFilename: "js/[name].[chunkhash:5].js",
        publicPath: "/"    
    },
    module:{
        rules:[

            {
                test:/\.css$/,
                use:[
                    {
                        loader:'style-loader'
                    },
                    {
                        loader:'css-loader',
                        options:{
                            modules:true,
                        }
                    }
                ]
            },
            {
                test:/\.(scss|sass)$/,//sass文件编译要使用style-loader，css-loader，sass-loader，顺序不能改变，这样样式才会生效
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
            filename: "./dist/styles/[name].css",
            chunkFilename: '[id].css',
            ignoreOrder: false,
        }),
        new UglifyWebpackPlugin({
            parallel: 4
        }),
        new OptimizeCssAssetsWebpackPlugin(),
    ]
})
const path = require('path')    //node的path模块
const nodeExternals = require('webpack-node-externals')
const webpack = require('webpack')

module.exports = {
    mode:'development',           //开发模式
    resolve:{
		extensions: [ ".web.js", ".js", ".jsx", ".less", ".css", ".json", ".scss" ] //自动解析的扩展
    },
    entry:'./client.js',             //入口
    output: {                     //打包出口
        filename:'index.js',     //打包后的文件名
        path:path.resolve(__dirname,'public')    //存放到根目录的build文件夹
    },
    module: {
        rules: [{                  //打包规则
           test:   /\.(js|jsx)$/,       //对所有js文件进行打包
           loader:'babel-loader',  //使用babel-loader进行打包
           exclude: /node_modules/,//不打包node_modules中的js文件
           options: {
               presets: [
                ['@babel/preset-env',{
                    "targets":{
                        "browsers": ["last 2 versions"]
                    }
                }],
                "@babel/preset-react"
                ], 
                plugins:[
                    // '@babel/plugin-syntax-class-properties',
                    // '@babel/plugin-transform-runtime',
                    '@babel/plugin-proposal-class-properties'
                ],
                sourceType: 'unambiguous'
            },
       }]
    },
    // plugins: [
    //     new webpack.ProvidePlugin({
    //       "React": "react",
    //     }),
    // ],
}
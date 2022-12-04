const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/main.js",
    // 指定打包文件所在目录
    output: {
        path: path.resolve(__dirname, 'dist'),
        __filename: 'bundle.js'
    },
    // 指定webpack打包时要使用的模块
    module: {
        // 指定要加载的规则
        rules: [
            {
                test: /\.ts$/, // 指定规则生效的文件
                use: 'ts-loader', // 要使用的loder
                exclude: /node-modules/ // 要排除的文件
            }
        ], 
    },
    // 配置webpack插件
    plugin: [
        new HTMLWebpackPlugin(option: {
            title: 'heng~',
            template: './public/index.html'
        })
    ]
}
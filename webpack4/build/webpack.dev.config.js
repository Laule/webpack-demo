const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');

const devConfig = module.exports = {
    devServer: {
        contentBase: './dist',
        port: 8080, // 端口
        open: true, // 自动打开一个浏览器
        hot: true, //HMR
        // hotOnly: true //即便html不生效，浏览器也不刷新
    },
    mode: 'development',
    devtool: "none", //none
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            // modules: true   模块之间的样式不会耦合
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require("autoprefixer")
                            ]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}
module.exports = merge(baseWebpackConfig, devConfig);
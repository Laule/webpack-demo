const path = require('path');

module.exports = {
    entry: {
        main: './src/index.js'
    },
    mode: 'development',
    module: {
        rules:
            [
                {
                    test: /\.js/,
                    use: [
                        {
                            loader: path.resolve(__dirname, './loaders/replaceLoader.js'),
                            options: {
                                name: 'LiuYuanJin'
                            }
                        }
                    ]
                }
            ]

    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    }
}
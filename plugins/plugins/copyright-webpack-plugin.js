class CopyrightWebpackPlugin {
    // constructor(options) {
    //     console.log(options);
    // }
    // compiler 配置里的相关内容
    // compilation 这次打包的相关内容
    apply(compiler) {

        // 同步
        compiler.hooks.compile.tap('CopyrightWebpackPlugin', () => {
            console.log('build in start ...');
        })

        // 异步
        compiler.hooks.emit.tapAsync('CopyrightWebpackPlugin', (compilation, cb) => {
            debugger;
            compilation.assets['copyright.txt'] = {
                source: function () {
                    return 'copyright by Liu Yuan Jin'
                },
                size: function () {
                    return 25;
                }
            };
            cb();
        })
    }
}

module.exports = CopyrightWebpackPlugin;

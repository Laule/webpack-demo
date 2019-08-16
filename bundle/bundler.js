// 获取文件信息
const fs = require('fs');
// node核心模块
const path = require('path');

// Babel源码分析工具
const parser = require('@babel/parser');
// 添加一个default 默认导出ES Module 加上 default
const traverse = require('@babel/traverse').default;

const babel = require('@babel/core');


const moduleAnalyser = (filename) => {
    const content = fs.readFileSync(filename, 'utf-8');
    const ast = parser.parse(content, {
        sourceType: "module"
    });
    // 存放一个绝对路径 一个相对路径
    const dependencies = {};
    // 通过traverse分析出源码中的依赖
    traverse(ast, {
        ImportDeclaration({node}) {
            const dirname = path.dirname(filename);
            // 生成绝对路径
            const newFile = './' + path.join(dirname, node.source.value);
            // console.log(dirname);
            // console.log(newFile);
            dependencies[node.source.value] = newFile;

            // dependencies.push(node.source.value)
            // console.log(node);
        }
    });
    const {code} = babel.transformFromAst(ast, null, {
        presets: ["@babel/preset-env"]
    })

    // console.log(code);
    return {
        filename,
        dependencies,
        code
    }

    // 抽象语法树
    // console.log(ast.program.body);
    // console.log(content);
    // 输出相对路径
    // console.log(dependencies);
}

// 依赖图谱
const makeDependenciesGraph = (entry) => {
    const entryModule = moduleAnalyser(entry);
    const graphArry = [entryModule];
    for (let i = 0; i < graphArry.length; i++) {
        const item = graphArry[i];
        const {dependencies} = item;
        if (dependencies) {
            for (let j in dependencies) {
                graphArry.push(
                    moduleAnalyser(dependencies[j])
                );
            }
        }
    }
    const graph = {};
    graphArry.forEach(item => {
        graph[item.filename] = {
            dependencies: item.dependencies,
            code: item.code
        }
    });
    // console.log(graph);
    return graph;
}

const generateCode = (entry) => {
    const graph = JSON.stringify(makeDependenciesGraph(entry));
    return `
    (function(graph){
       function require(module) {
         function localRequire(relativePath) {
          return require(graph[module].dependencies[relativePath])
       }
       var exports = {};
       (function(require,exports,code){
         eval(code)
       })(localRequire,exports, graph[module].code);
       return exports;
     };
    require('${entry}')
    })(${graph});
    `;
}

const code = generateCode('./src/index.js');
console.log(code);
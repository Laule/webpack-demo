// import './style.css';
// import './style1.css';
//
//
// console.log('hello');

// 同步加载(不支持懒加载)
// import _ from 'lodash';
//
// var element = document.createElement('div');
// element.innerHTML = _.join(['LiuYuanJin', 'JiaZhiYu'], '-');
// document.body.appendChild(element);
 

// 异步加载(支持懒加载)
// function getComponent() {
//     return import(/* webpackChunkName: "lodash" */ "lodash").then(({default: _}) => {
//         var element = document.createElement("div");
//         element.innerHTML = _.join(['LiuYuanJin', 'JiaZhiYu'], '');
//         return element;
//     }).catch(error => 'An error occurred while loading the component');
// }
//
// async function getComponent() {
//     const {default: _} = await import(/* webpackChunkName: "lodash" */ "lodash");
//     const element = document.createElement("div");
//     element.innerHTML = _.join(['LiuYuanJin', 'JiaZhiYu'], '');
//     return element;
// }
//
// document.addEventListener('click', () => {
//     getComponent().then(component => {
//         document.body.appendChild(component);
//     })
// })



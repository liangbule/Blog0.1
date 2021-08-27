/*
 * @Author: liangbule
 * @Date: 2021-08-27 23:55:55
 * @LastEditors: liangbule
 * @LastEditTime: 2021-08-28 02:32:19
 * @Description: 
 */

// const md = require('markdown-it')({
//   html: true,
//   breaks: true,
//   linkify: true,
// })
//   .use(require('markdown-it-highlightjs')) // 代码高亮 目前太大了
//   .use(require('./markdown-it-sanitizer'), {
//     extraTags: ['details', 'summary']
//   });
// export const markdown = (content) => {
//   const resRender = md.render(content || '');
//   return resRender;
// }

// export const markdownRender = (htmlStr) => {
//   const container = document.createElement('div');
//   container.innerHTML = htmlStr;
//   const hns = [...container.querySelectorAll('h2,h3,h4,h5,h6')];
//   const menus = [];
//   hns.forEach((item, i) => {
//     var tag = item.localName;
//     item.setAttribute('id', 'wow' + i);
//     menus.push({
//       type: tag,
//       target: '#wow' + i,
//       title: item.innerText,
//     });
//   });
//   return {
//     html: container.innerHTML,
//     menus
//   }
// }


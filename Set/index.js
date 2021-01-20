/*
 * @Author: heluchao
 * @Date: 2021-01-20 16:35:42
 * @LastEditTime: 2021-01-20 17:25:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /code/Set/index.js
 */
//去重
const arr = [1,1,1,2,2,3,3];
const arr2 = [...new Set(arr)];
console.log('arr2: ', arr2);

//判断元素是否在集合中
const set = new Set(arr);
const has = set.has(4);
console.log('has: ', has);

//交集
const set2 = new Set([2,3]);

const set3 = new Set([...set].filter(item => set2.has(item)));
console.log('set3: ', set3);

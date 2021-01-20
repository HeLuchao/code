/*
 * @Author: heluchao
 * @Date: 2021-01-20 17:27:24
 * @LastEditTime: 2021-01-20 17:46:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /code/Set/set.js
 */

let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(3);
mySet.add('test');
mySet.add({
    a: 1,
    b: 2,
});
mySet.add({
    a: 1,
    b: 2,
});

console.log('mySet: ', mySet);

let has = mySet.has(5);
console.log('has: ', has);

mySet.delete(3);

console.log('mySet: ', mySet);

for (let item of mySet.keys()) {
    console.log('item: ', item);
}

let arr = [...mySet];
let arr2 = Array.from(mySet);

let newSet = new Set([1,2,2,3,3,5]);

//交集
const set3 = new Set([...mySet].filter(item => newSet.has(item)));
console.log('set3: ', set3);

//差集
const set4 = new Set([...mySet].filter(item => !newSet.has(item)));
console.log('set4: ', set4);
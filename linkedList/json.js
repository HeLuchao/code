/*
 * @Author: heluchao
 * @Date: 2021-01-20 16:29:23
 * @LastEditTime: 2021-01-20 16:34:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /code/linkedList/json.js
 */
const json = {
    a : {
        b : {
            c : 1
        }
    }, 
    d: {
        e: 2
    }
};

const path = ['a', 'b', 'c'];

let p = json;

path.forEach(k => {
    p = p[k];
});

console.log('p : ', p );
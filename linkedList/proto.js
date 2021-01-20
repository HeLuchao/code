/*
 * @Author: your name
 * @Date: 2021-01-20 16:14:09
 * @LastEditTime: 2021-01-20 16:27:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /code/linkedList/proto.js
 */
const obj = {};
Object.prototype.x = 'x';
const fun = () =>  {};
Function.prototype.y = 'y';
console.log(fun.x);
const arr = [];


//instanceOf
const instanceOf = (A, B) => {
    let p = A;
    while (p) {
        if (p === B.prototype) {
            return true;
        }
        p = p.__proto__;
    }
    return false;
};

//
let foo = {}, F = ()=> {};
Object.prototype.a = 'value a';
Function.prototype.b = 'value b';
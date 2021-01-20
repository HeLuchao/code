/*
 * @Author: heluchao
 * @Date: 2021-01-20 15:59:20
 * @LastEditTime: 2021-01-20 16:13:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /code/linkedList/index.js
 * 
 * javascript 模拟链表
 */

const a = {
    val: 'a'
};

const b = {
    val: 'b'
};

const c = {
    val: 'c'
};

const d = {
    val: 'd'
};

a.next = b;
b.next = c;
c.next = d

//遍历链表
let p = a;
while (p) {
    console.log(p.val);
    p = p.next;
}

//插值
const e =  {val:'e'};
c.next = e;
e.next = d;

//删除
c.next = d;
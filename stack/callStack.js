/*
 * @Author: heluchao
 * @Date: 2021-01-20 15:35:35
 * @LastEditTime: 2021-01-20 15:37:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /code/stack/callStack.js
 */

 const fun1 = () => {
    fun2();
 };
 const fun2 = () => {
    fun3();
 };
 const fun3 = () => {};

 fun1();


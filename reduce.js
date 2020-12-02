/*
 * @Author: your name
 * @Date: 2020-12-01 16:40:39
 * @LastEditTime: 2020-12-01 16:53:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test\reduce.js
 */
Array.prototype.reduce = function (callback, initialValue) {
    if (!Array.isArray(this)) {
        throw new Error("调用者必须为数组");
    }
    if (typeof callback != "function") {
        throw new Error("累加器必须为函数");
    }
    if (this.length == 0) {
        return initialValue;
    }

    let i = 0; 
    if (!initialValue) {
        initialValue = this[i];
        i++;
    }
    for ( i; i < this.length; i++) {
        initialValue = callback(initialValue, this[i], i, this);
    }
    return initialValue;
};

var sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log('sum: ', sum);


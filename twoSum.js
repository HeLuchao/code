/*
 * @Author: your name
 * @Date: 2020-12-01 11:45:50
 * @LastEditTime: 2020-12-02 15:06:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test\twoSum.js
 * 两数之和
 */
function twoSum(array, target) {
    const map = new Map();
    let result = [];
    array.forEach((item, index) => {
        if (map.has(item)) {
            result.push([map.get(item), index]);
        } else {
            map.set(target - item, index);
        }
    });
    return result;
};

let num = twoSum([2,4,5,6,7,1,8], 8);
console.log('num: ', num);
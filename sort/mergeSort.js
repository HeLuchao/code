/*
 * @Author: heluchao
 * @Date: 2021-01-22 16:12:42
 * @LastEditTime: 2021-01-23 11:14:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /code/sort/mergeSort.js
 * 归并排序
 * 分 合
 * 时间复杂度   O(nlogn) 
 */
function mergeSort(arr) {
    let len = arr.length;
    if (len < 2) {
        return arr;
    }
    let middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length) {
        result.push(left.shift());
    }

    while (right.length) {
        result.push(right.shift());
    }

    return result;
}

const arr = [5, 4, 3, 2, 1, 0];
let result = mergeSort(arr);
console.log('result: ', result);
/*
 * @Author: heluchao
 * @Date: 2021-01-22 17:55:00
 * @LastEditTime: 2021-01-23 11:04:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /code/search/binarySearch.js
 * 二分搜索 时间复杂度   O(logn) 
 */
const binarySearch  = (arr, key) => {
    let low = 0, high = arr.length - 1;
    while (low <= high) {
        let mid = parseInt((high + low) / 2);
        if (key == arr[mid]) {
            return mid;
        } else if (key > arr[mid]) {
            low = mid + 1;
        } else if (key < arr[mid]) {
            high = mid - 1;
        } else {
            return -1;
        }
    }
}
let result = binarySearch([5, 4, 3, 2, 1, 0], 3);
console.log('result: ', result);
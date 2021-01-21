/*
 * @Author: heluchao
 * @Date: 2021-01-21 18:07:11
 * @LastEditTime: 2021-01-21 18:24:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /code/tree/json.js
 */

const json = {
    a: {
        b: {
            c: 1
        },
        d: [1, 2]
    }
};

const dfs = (n) => {
    console.log('n: ', n);
    Object.keys(n).forEach(k => {
        dfs(n[k]);
    });
};
dfs(json);

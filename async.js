/*
 * @Author: heluchao
 * @Date: 2020-11-20 18:16:41
 * @LastEditTime: 2021-01-19 15:52:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test\test.js
 */
async function test() {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log('start');
            resolve('start1');
        }, 2000);
    })
};

async function test2() {
  await test();
  console.log('start-end');  
};

test2();
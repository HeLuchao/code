/*
 * @Author: heluchao
 * @Date: 2021-01-23 11:21:56
 * @LastEditTime: 2021-01-23 11:29:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /code/trafficLight.js
 * 交通指示灯
 * 实现红绿灯代码，红灯2秒，黄灯1秒，绿灯3秒，循环改变颜色
 */
const sleep = (color, duration) => {
    return new Promise(resolve => {
        setTimeout(() =>{
            resolve(color);
        }, duration)
    });
};

const trafficLight = async (color, duration) => {
    const res = await sleep(color, duration);
    console.log('res: ', res);
};

const start = async () => {
    await trafficLight('red', 2000);
	await trafficLight('yellow', 1000);
	await trafficLight('green', 3000);
};

start();
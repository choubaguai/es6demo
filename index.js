//二进制声明 Binary
// let binary = 0B010101;
// console.log(binary);
//八进制声明 Octal
// let octal = 0o666;
// console.log(octal);

// let a = 11 / 4;
// console.log(Number.isFinite(a));
// console.log(Number.isFinite("wagon"));
// console.log(Number.isFinite(NaN));
// console.log(Number.isFinite(undefined));

//NaN 特殊的非数字

// console.log(Number.isNaN(888));

//Number.isInteger 是否整数
// let b = 122.698;
// console.log(!Number.isInteger(b));
// console.log(Number.parseInt(b));

// let s = Math.pow(2, 53) - 1;
// console.log(s);

//最大安全整数
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);

// console.log(Number.isSafeInteger(s));

//json 数组格式
// let json = {
//     '0': 'wagon',
//     '1': 'superbro',
//     '2': '叫我超哥',
//     length: 3
// }

// let arr = Array.from(json);
// console.log(arr);

//of
// let of = Array.of("wo", 8, 7, 6, 5, 4, 3, 2, 1, 0);
// console.log(of);

//find() 实例方法
//value表示当前查找的值
//index表示值得索引，下标
// let find = ['wagon','超哥','最帅'];
// console.log(find.find(function (value, index, find) {
//     return value == 'wagon';
// }))

//fill
// let arr = ['wagon', '超哥', '最帅'];
// arr.fill('1', 1, 2);
// console.log(arr);

//数组循坏
// for (const [index, value] of arr.entries()) {
//     console.log(index + ":" + value);
// }

//entries 实例方法
// let list = arr.entries();
// console.log(list.next().value);
// console.log('---------------');
// console.log(list.next().value);
// console.log('***************');
// console.log(list.next().value);
// console.log('666666666666666');

//函数
// function add(a, b=1) {
//     'use strict'
//     return a + b;
// }
// console.log(add.length);

// var add = (a, b = 1) => {
//     console.log('wagon');
//     return a + b;
// };
// console.log(add(1));

//对象的函数解构json

// let json = {
//     a: 'wagon',
//     b: 'superbro'
// }
// function fun({ a, b = 'web' }) {
//     console.log(a, b);
// }

// fun(json);

//数组解构
let arr = ['wagon', '超哥', '学习中'];
// function fun(a, b, c) {
//     console.log(a, b, c);
// }
// fun(...arr);

//数组遍历 forEach,filter,some,map
// arr.forEach((val, index) => console.log(index, val));
// arr.filter(x => console.log(x));
// arr.some(x => console.log(x));
// console.log(arr.map(x => 'web'));

// console.log(arr.join('|'))

// let name = 'wagon';
// let skill = 'web';
// let obj = { name, skill };
// console.log(obj);

//key值得构建

// let key = "skill";
// var obj = {
//     [key]: 'web'
// }
// console.log(obj);

//自定义对象方法
// let obj = {
//     add: function (a, b) {
//         return a + b;
//     }
// }
// console.log(obj.add(1, 2));

//is() 两个对象进行比较
// let obj1 = { name: 'wagon' };
// let obj2 = { name: 'wagon' };
// console.log(obj1.name === obj2.name);
// console.log(Object.is(obj1.name, obj2.name));
//===同值相等，is严格相等，
// console.log(+0 === -0);
// console.log(NaN === NaN);
// console.log(Object.is(+0, -0));
// console.log(Object.is(NaN, NaN));
//assign合并对象
// let a = { a: 'wagon' };
// let b = { b: '瓦罐' };
// let c = { c: 'web' };
// let d = Object.assign(a, b, c);

// console.log(d);

//Symbol
// let a = new String;
// let b = new Number;
// let c = new Boolean;
// let d = new Array;
// let e = new Object;

// let f = Symbol();
// let obj={name:'wagon',skill:'web',age:'18'};
// console.log(obj[f]);
// obj[f]='web';
// console.log(obj[f]);

// for (const item in obj) {
//     if (object.hasOwnProperty(item)) {
//         const element = object[item];

//     }
// }

//set 特点：不允许重复
// let setArr = new Set(['wagon','superbro','web']);
// setArr.add('superbro');
// console.log(setArr);

//has 查找
// console.log(setArr.has('f'));
// setArr.delete('web');
// console.log(setArr);

//for..of
// for (const item of setArr) {
//     console.log(item);
// }
// setArr.forEach(element => {
//     console.log(element);
// });
// console.log(setArr.size);

//WeakSet

// let weakObj = new WeakSet();
// let obj = { a: 'wagon', b: 'WAGON' };
// let obj1 = obj;
// weakObj.add(obj);
// weakObj.add(obj1);
// console.log(weakObj);

//Map
// let json = {
//     name: 'wagon',
//     skill: 'android'
// }
// let map = new Map();
// map.set(json, 'iam');
// map.set('wagon', json);
// console.log(map);
//map的增删查
//get
// console.log(map.get("wagon"));
//delete
// map.delete(json);
// console.log(map);
// map.clear();
// console.log(map.size);
//has true false
// console.log(map.has('wagon'));

//proxy 代理 ES6 增强对象和函数（方法） 生命周期 预处理
// let obj = {
//     add: function (val) {
//         return val + 100;
//     },
//     name: 'I am wagon'
// }
// console.log(obj.add(100));
// console.log(obj.name);

// let pro = new Proxy({
//     add: function (val) {
//         return val + 100;
//     },
//     name: 'I am wagon'
// },
//     {
//         //get set apply
//         get: function (target, key, property) {
//             console.log('come in get');
//             return target[key];
//         },
//         set: function (target, key, value, receiver) {
//             console.log(` setting ${key} = ${value}`);
//             return target[key] = value;
//          }
//     });

// console.log(pro.name)
// pro.name = "hahaha"
// console.log(pro.name)

//class
// class Coder {
//     name(val) {
//         console.log(val);
//         return val;
//     }

//     skill(val) {
//         console.log(this.name("超哥"));
//     }

//     constructor(a, b) {
//         this.a = a;
//         this.b = b;
//     }
//     add() {
//         return this.a + this.b;
//     }
// }

// let wagon = new Coder(1, 2);
// // wagon.skill('superbro');
// console.log(wagon.add());

// class htmler extends Coder{

// }
// let pang = new htmler;
// pang.name('丑八怪');

//export 输出
//import 引入
import {name} from './temp';
console.log(name);










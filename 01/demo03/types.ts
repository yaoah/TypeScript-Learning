// 字面量进行类型声明
let a: 10;
a = 11;

//可以使用 | 来连接多个类型（联合类型）
let b: "male" | "false";
b = "male";
b = "false";

let c: boolean | string
c = true;
c = 'hello';

// any 表示的是任意类型， 一个变量设置类型为any后，相当于对该变量关闭了TS的类型检测
// 使用 TS 时，不建议使用any类型
// 声明变量如果不指定类型，则TS解析器会自动判断变量的类型为any（隐式的any）
let d: any;
d = 10;
d = 'hello';
d = true;


// unknown 表示未知类型的值
let e: unknown
e = 10;
e = 'hello'
e = false
 
let s:string;
// d的类型是any，它可以赋值给任意变量
// s = d 

e = 'hello'

// unknown 实际上就是一个类型安全的any
// unknown 类型的变量，不能直接赋值给其他变量
if(typeof e === 'string') {
  s = e;
}

// 类型断言, 可以用来告诉解析器变量的实际类型
/**
 * 语法：
 *  变量 as 类型
 *  <类型>变量
 */
s = e as string;
s = <string>e

// void 用来表示空，以函数为例，就表示没有返回值的函数
function fn(): void {
  let num: number = 1
  if(num ==1) {
    return null 
  } else {
    return undefined
  }
}

function fn2(): never {
  throw new Error('报错了');
}

// object 表示一个js对象
let obj: object;
obj = {};
obj = function() {};

// {} 用来指定对象中可以包含哪些属性
// 语法： {属性名: 属性值, 属性名: 属性值}
// 在属性名后边加上?, 表示属性可选
let objB: {name: string, age?: number};
objB = {name: '张三'};

// [propName: string]: any 表示任意类型的属性
let objC: {name: string, [propName: string]: any}
objC = {name: '张三', a: '111', b: '222'}

/**
 * 设置函数结构的类型声明
 * 语法：(形参: 类型, 形参: 类型...) => 返回值
 */

let funD: (a: number, b: number) => number
// funD = function(n1: number, n2: string): number {
//   return n1 + n2
// }

/**
 * 数组的类型声明：
 *  类型[]
 *  Array<类型>
 */

// string[] 表示字符串数组
let arrA: string[];
arrA = ['a', 'b', 'c'];

// number[] 表示数组数值
let arrB: Array<number>
arrB = [1, 2, 3]


/**
 * 元组，元组就是固定长度的数组
 *  语法：[类型, 类型, 类型]
 */

let toupleA: [string, number]
toupleA = ['hello', 123]


/**
 * enum 枚举
 */

 enum Gender {
   Male = 0,
   Female = 1
 }

 let enumA: {name: string, gender: Gender};
 enumA = {
   name: '孙悟空',
   gender: Gender.Male
 }

 console.log(enumA.gender === Gender.Male)

// & 表示同时
 let j: string | number;
 let k: string & number;

 let l: { name: string } & { age: number };
l = {name: '孙悟空', age: 18};

// 类型的别名
type myType = 1 | 2 | 3 | 4 | 5;
let m: 1 | 2 | 3 | 4 | 5;
let n: myType



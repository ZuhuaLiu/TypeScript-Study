// let my_name: string = "rails365";
// console.log("my name is" + my_name);
// let myArr: number[] = [1,3];
// console.log(myArr);
// let myArr: Array<number> = [1,3];
// myArr.push(2);
// console.log(myArr);
// let my_tuple:[string, number] = ['I hate coding', 100];
// console.log(my_tuple[1]);
// const add = (a: number, b: number) => {
//     return a + b;
// }
// let sum = add(10, 20);
// console.log(sum);
// const add = (a: number =10, b: number): number => {
//     return a + b;
// }
// let sum = add(undefined,10.005);
// console.log(sum.toFixed(2));
// const add = (a: number = 10, b: number = 20): void => {
//     console.log(a + b)
//    }
//    let sum = add();
// const add = (a: number, ...num: number[]): number => {
//         return num.reduce((pre, cur) => {
//            return pre + cur
//         },a)
//    }
// let sum = add(1,2,3,4,5,6,6);
// console.log(sum);
// let a: any;
// a = 10;
// a = '111';
// console.log(a);
function isNumber(value) {
    // 可以进行进一步处理
    return typeof value === "number";
}
function isString(value) {
    return typeof value === "string";
}
// const log = (value: any) => {
//  console.log(typeof value);
//  if (isNumber(value)) {
//      return `your number is ${value}`;
//  }
//  if (isString(value)) {
//      return `your name is ${value}`;
//  }
//  throw new Error(`Expected string or number, got ${value}.`);
// }
var log = function (value) {
    console.log(typeof value);
    if (isNumber(value)) {
        return "your number is " + value;
    }
    if (isString(value)) {
        return "your name is " + value;
    }
    // throw new Error(`Expected string or number, got ${value}.`);
};
console.log(log(2));

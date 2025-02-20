// interface Person {
//     name: string;
//     age: number;
// }

// // 另一种类型断言的方式 as
// // 更好的明确类型和类型里面的结构
// let person = {} as Person;
// person.name = '111';
// console.log(person.age);

interface Person {
    name: string;
}

interface Employee {
    age: number;
}

// 继承另一个接口 Person
// 会继承 Person 的属性的方法
interface Programmer extends Person {
    age: number;
}

let p: Programmer = {
    age: 27,
    name: "rails365"
}

// 类不能继承多个类，也就是说不能有多个父类
// 但可以实现多个接口
// 每个接口的属性和方法都要实现
class P implements Person, Employee {
    name: string;
    age: number;
}

let p1: P = {
    name: "rails365",
    age: 25
}

let p2: Person = p1;
    console.log(p2);
let p3: Employee = p1;
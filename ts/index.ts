import * as _　from 'lodash'
class Person {
    public firstName: string;
    public lastName: string;
    constructor(){

    }
}

let foo = new Person();
foo.firstName = "11";

console.log(foo.firstName);

let a = [1, 2, 3];
_.reverse(a);
console.log(a);
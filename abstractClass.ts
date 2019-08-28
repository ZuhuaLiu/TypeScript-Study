abstract class Person {
    abstract name: string;

    // constructor(name: string) {
    //  this.name = name;
    // }

    display(): void {
        console.log(this.name);
    }

    abstract find(string): Person;
    // // 抽象的方法
    // // 没有方法体
    // abstract find(string): Person;
}

class Employee extends Person {
    name: string;
    empCode:number;
    constructor(name: string, code: number) {
        super();
        this.empCode = code;
        this.name = name;
    }

    find(name: string): Person {
        return new Employee(name,1);
    }
}

let p:Person = new Employee("xxx",3333);
let p1: Person = p.find('111');
console.log(p1);

//等效代码
// class Person {
//  private _name: string;
//  private _age: number;

//  constructor(name: string, age: number) {
//      this._name = name;
//      this._age = age;
//  }
// }

class Person1 {
    constructor(private name: string, private age: number) {

    }
}

let p2: Person1 = new Person1("hfpp2012", 29);
console.log(p2);

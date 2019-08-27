// 模板
class Person {
    // 定义了两个数据内容
    protected firstName: string;
    protected lastName: string;

    private static age: number = 10;

    public constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    readonly name: string = 'wanggou';

    getAge() {
        return `my age is ${Person.age}`
    }

    static getStaticAge() {
        return `my age is ${Person.age}`
    }

    public greet() {
        console.log('hi');
    }

    protected sayHi() {
        console.log('private say hi');
    }

    public callSayHi() {
        this.sayHi();
        console.log('********');
    }

    // public
    // get 方法
    protected getFirstName() {
        return this.firstName;
    }

    getLastName() {
        return this.lastName;
    }

    // public
    // set 方法
    setFirstName(firstName) {
        this.firstName = firstName;
    }

    setLastName(lastName) {
        this.lastName = lastName;
    }

    public othergreet() {
        this.greet();
        console.log('*****');
    }
}

let aPerson = new Person("rails365", "hfpp2012");
console.log(aPerson.name);
// console.log(aPerson.getAge());
// console.log(Person.getStaticAge());

// 相当于 set 方法
// aPerson.firstName = "rails365"
// 相当于 get 方法
// console.log(aPerson.firstName);
// aPerson.setFirstName("hfpp2012");
// aPerson.getFirstName();

// aPerson.sayHi();
// aPerson.callSayHi();

// 继承成了父类的数据和行为，就是属性和方法
// 它的父类就是 Person
class Programmer extends Person {
    public greet() {
        console.log('hello world');
    }

    constructor(firstName: string, lastName: string) {
        // 调用父类的构造函数的方法，要传入参数
        super(firstName, lastName);
        console.log("Programmer constructor");
    }

    // super 代表父类
    public greetLikeNormalPeople() {
        super.greet();
    }

    // 子类定义的方法
    // public getFullName(): string {
    //  return `${this.firstName} ${this.lastName}`;
    // }

    // 自己定义的方法
    // getFirstName protected
    getSuperFirstName(): string {
        return this.getFirstName();
    }

    getSuperLastName(): string {
        return this.lastName;
    }

    // 可以访问继承过来的 private 属性
    // getFirstName 和 getLastName 是继承过来
    // public getFullName(): string {
    //  return `${this.getFirstName()} ${this.getLastName()}`;
    // }

    public getFullName(): string {
        return `${this.getSuperFirstName()} ${this.getSuperLastName()}`;
    }
}


// console.log(Programmer.getStaticAge());
// console.log(Person.age);
// let aProgrammer = new Programmer("rails365", "hfpp2012");
// console.log(aProgrammer.firstName);
// 继承过来的方法
// aProgrammer.getFirstName();
// console.log(aProgrammer.getFullName());
// console.log(aProgrammer.getFirstName());

// console.log(aProgrammer.getSuperFirstName());
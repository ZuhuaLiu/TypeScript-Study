"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
    }
    // constructor(name: string) {
    //  this.name = name;
    // }
    Person.prototype.display = function () {
        console.log(this.name);
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, code) {
        var _this = _super.call(this) || this;
        _this.empCode = code;
        _this.name = name;
        return _this;
    }
    Employee.prototype.find = function (name) {
        return new Employee(name, 1);
    };
    return Employee;
}(Person));
var p = new Employee("xxx", 3333);
var p1 = p.find('111');
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
var Person1 = /** @class */ (function () {
    function Person1(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person1;
}());
var p2 = new Person1("hfpp2012", 29);
console.log(p2);

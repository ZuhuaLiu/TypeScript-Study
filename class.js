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
    // constructor(firstName: string){
    //      this.firstName = firstName;
    // }
    Person.prototype.greet = function () {
        console.log("hello");
    };
    Person.prototype.getFirstName = function () {
        console.log(this.firstName);
    };
    Person.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    return Person;
}());
// let a = new Person('first_name');
// a.firstName = 'first';
// console.log(a.firstName);
var Gou = /** @class */ (function (_super) {
    __extends(Gou, _super);
    function Gou() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gou.prototype.greet = function () {
        console.log("hello1");
    };
    Gou.prototype.greetH = function () {
        _super.prototype.greet.call(this);
    };
    return Gou;
}(Person));
var b = new Gou();
// console.log(b.greet());
var c = new Person();
c.setFirstName('111');
console.log(c.getFirstName());

"use strict";
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.greet = function () {
        console.log('I am employee');
    };
    return Employee;
}());
var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.greet = function () {
        console.log('I am customer');
    };
    return Customer;
}());
var cu = new Customer();
cu.greet();
var em = new Employee();
em.greet();

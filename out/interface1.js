"use strict";
var printCallback;
printCallback = function (suc) {
    console.log("callback", suc);
};
var person = {
    first_name: "hfpp2012",
    age: 27,
    print: function (callback) {
        callback(true);
    }
};
var Programmer = /** @class */ (function () {
    function Programmer() {
    }
    return Programmer;
}());
var programmer = new Programmer();
programmer.first_name = "tony";
var sayName = function (o) {
    console.log(o.first_name);
};
sayName(programmer);
sayName({ first_name: "1111", last_name: "2222" });
person.print(printCallback);
var x;
x = "hi there";
var s = x.substring(0, 5);
console.log(typeof s);

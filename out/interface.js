"use strict";
var sayName = function (o) {
    o.print(o.name);
};
var person = {
    age: 27,
    name: 'hfpp2012',
    print: function (name) {
        console.log(name);
    }
};
// const bottle = {
//     litres: 1,
//     name: "漂流瓶"
// }
sayName(person);
// sayName(bottle);

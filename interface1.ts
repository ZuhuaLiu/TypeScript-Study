interface Person {
    first_name: string
    last_name?: string

    print?(callback:PrintCallback): void

    // 后面会讲
    [propName: string]: any;
}

interface PrintCallback {
    (success: boolean): void
}

let printCallback: PrintCallback;
printCallback = (suc: boolean): void => {
    console.log("callback", suc);
}


let person = {
    first_name: "hfpp2012",
    age: 27,
    print:(callback: PrintCallback): void => {
        callback(true);
    }
}

class Programmer implements Person {
    first_name: string;
}

const programmer = new Programmer();
programmer.first_name = "tony";

const sayName = (o: Person) => {
    console.log(o.first_name);
}

sayName(programmer);
sayName({first_name: "1111", last_name: "2222"} as Person);
person.print(printCallback);

let x: any;
x = "hi there";
let s = (<string>x).substring(0,5);
console.log(typeof s);

function 
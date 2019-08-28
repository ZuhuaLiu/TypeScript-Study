interface States {
    [index: string]: boolean;
}

let s: States = { 'enabled': true, 'maximized': false }
console.log(s);
console.log(s["enabled"]);

interface States1 {
    // An index signature parameter type must be 'string' or 'number'.
    [index: number]: any;
}

let s1: States1 = [22, 34, 45, 1];
console.log(s1);
// console.log(s1);
// console.log(s1[0]);

let s2: number[] = [1, 2, 3];

interface States2 {
    [index:number]:boolean;
    length: number;
    pop(): boolean;
}

let s3: States2 = [true, false, false, false];
console.log(s3);
console.log(s3.length);
console.log(s3.pop());
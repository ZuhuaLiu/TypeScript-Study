function show(x: number | string): void {
    console.log(typeof x);
    if (typeof x === 'number') {
        console.log("a number " + x);
    } else {
        console.log("a string " + x);
    }
}

// show("test string");
// show(4);
// show(null);

class Person {}

let person = new Person();
// console.log(typeof person);
// console.log(typeof new String("test"));
// console.log(typeof undefined);
// console.log(typeof null);

class Car {
    start() {
        console.log('car starting');
    }

    drive() {
        console.log('car driving');
    }
}

class Bike {
    start() {
        console.log('bike starting');
    }

    ride() {
        console.log('bike ridding');
    }
}

function move(vehicle: Bike | Car): void {
    vehicle.start();
    // console.log(vehicle.drive);
    // vehicle.drive !== undefined
    if( (vehicle as Car).drive ) {
        (vehicle as Car).drive();
    } else {
        (vehicle as Bike).ride();
    }
}

move(new Car());
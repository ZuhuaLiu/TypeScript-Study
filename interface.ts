    const sayName = (o:Named) => {
        o.print(o.name);
    }
    interface Named {
        name:string;
        print(name:string):void;
    }
    const person = {
        age: 27,
        name: 'hfpp2012',
        print:(name) => {
            console.log(name);
        }
    }

    // const bottle = {
    //     litres: 1,
    //     name: "漂流瓶"
    // }

    sayName(person);
    // sayName(bottle);
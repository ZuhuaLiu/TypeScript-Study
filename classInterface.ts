interface Person {
    name: string;

    greet(): void;
}

class Employee implements Person {
    name: string;

    greet(): void {
        console.log('I am employee');
    }
}
class Customer implements Person {
    public name: string;
    public email: string;
    greet(): void {
        console.log('I am customer');
    }
}
let cu = new Customer();
cu.greet();
let em = new Employee();
em.greet();


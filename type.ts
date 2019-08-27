// let myname:string = 'qqqq';
type Name = string;
// let myname:Name = '1111';
// console.log(myname);
type User = {
    name: string,
    age: number,
    print():void
}

const user: User = {
    name: "rails365",
    age: 27,
    print:() => {
        console.log('XX');
    }
}
interface IUser {
    name: string;
    age: number;
}
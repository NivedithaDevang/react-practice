
//enum

enum Direction{
    North, South, East, West
}

let currDirection1 = Direction.North;
let currDirection2 = Direction.South;
let currDirection3 = Direction.East;
let currDirection4 = Direction.West;


console.log(currDirection1);
console.log(currDirection2);
console.log(currDirection3);
console.log(currDirection4);


//arrayy string
const names: string[] = [];
names.push("Dylan", "Niveditha");
console.log(names);


//read only
const read: readonly string[] = ["Niveditha"];
read.push("Dhanvi");
console.log(read);


//tuple
let ourTuple: [number, string, boolean];
ourTuple = [12, "Hi", true];
console.log(ourTuple);


//objects
const car : {name : string, model : string, year: number} = 
{
name: "Toyota",
model: "fortuner",
year: 2018
}

console.log(car);


//interfaces
interface Rectangle{
    height: number
    width: number
}

const rectangle: Rectangle ={
    height: 100,
    width: 10
};
console.log(rectangle.height * rectangle.width);


//union | or
function printStatus(code: string | number){
    console.log(`The status code is ${code}`);
}
printStatus(201);
printStatus('404');


//classes
class Person{
    name: string = "";
}
const person = new Person();
person.name = "Niveditha";

console.log(person.name);


//constructor
class Bottle{
    constructor(public brand: string, public price: number, public color : string){

    }
}

let b1 = new Bottle("Milton", 1200, "green");
let b2 = new Bottle("Cello", 120, "transparent");
console.log(b1);
console.log(b2);


//generics
function getValue<T>(value: T) {
        console.log(value);

}
getValue<string>("Niveditha");
getValue<number>(21);
getValue(true);



//generic interfaces
interface GenInt<D>{
    name: string;
    age: number;
    key: D;
}
function gen(obj: GenInt<string>){
}
gen({name: "Niveditha", age: 22, key: "abcd"})
console.log(gen);
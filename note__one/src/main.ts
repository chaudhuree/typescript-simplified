// array
// let a: number[]; // sometime this may cause error if we don't initialize it

let a: number[] = [];

a = [1,2,3,4,5,6,7,8,9,10];
console.log('a', a);

// object 

let person:{name:string,age:number,isMarried?:boolean}={
    name: 'John',
    age: 30
}
person.isMarried = true;

//  type

type Person = {
    name:string,
    age:number,
    isMarried?:boolean,
    address:{
        city:string,
        state:string
    },
    friends:string[]
}

let person1:Person = {
    name: 'John',
    age: 30,
    address:{
        city:'Dhaka',
        state:'Dhaka'
    },
    friends:[]
}

let person2:Person ;

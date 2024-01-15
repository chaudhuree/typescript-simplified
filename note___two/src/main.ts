// function

function add(a: number, b: number): number {
  return a + b;
}

function fullName(firstName: string, lastName?: string): string {
  return `${firstName} ${lastName}`;
}

// object type
// function Person(person: { name: string }) {
//   console.log(person.name) ;
// }

// Person({ name: "chaudhuree" });

function Person(person: { name: string }) {
  console.log(person.name);
}

// Person({ name: "chaudhuree", age: 20 });

// amra function er peramter dewar somoy kono extra property pass korte pari na
// tahole seta error dekhabe

// but amra akta object k variable er moddhe nea seta pass kore dile r error ashbe na

// like

const obj = {
  name: "chaudhuree",
  age: 20,
};
Person(obj); // aita kono error throw korbe na jodio function a age nai but amra pass kore dilam

// optional perameter
function personExample(name:string, address?:{city:string}): void {

    console.log(`${name}  ${address?.city}`);
}

personExample("chaudhuree",{city:"dhaka"})


// default perameter value and optional perameter

type Option={
	age?:number,
	isMarried?:boolean
}
function printNameAndAge(name:string,{age=27,isMarried}:Option={}){
	console.log(name,age,isMarried)
}
// but at this point wile calling the function we have to give all the value
printNameAndAge("sohan",{age:26,isMarried:false}); // no error
printNameAndAge("sohan",{age:26}); // error
// printNameAndAge("sohan",{isMarried:false}); // error
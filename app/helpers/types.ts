
// let text = "Esto es un texto";
// text = "Hello";
// text = 123;

// let number1: number = 123;
// let numberToText: string = number1.toString();

// function multiplicarPor2( arr: Array<number> ) {
//     arr.map(item => item * 2)
// }


// Type
// type Person = {
//     name: string;
//     age: number;
//     gender?: "Male" | "Female";
// }

// type Programmer = {
//     language: "Typescript" | "Javascript";
// }

// type PersonProgrammer = Person & Programmer;

// Interfaces
interface Person {
    name: string;
    age: number;
    gender?: "Male" | "Female";
}

// interface PersonProgrammer extends Person, Programmer {}
interface Programmer extends Person {
    language: "Typescript" | "Javascript"
}

const person: Programmer = {
    name: "Jorge",
    age: 30,
    gender: "Male",
    language: "Typescript",
}

function addOneToAge(person: Person) {
    person.age += 1;
}

addOneToAge(person);

// Template functions

const personas: Programmer[] = [
    {
        name: "Jorge",
        age: 30,
        gender: "Male",
        language: "Typescript",
    },
    {
        name: "Omar",
        age: 20,
        gender: "Male",
        language: "Typescript",
    },
    {
        name: "Alejandra",
        age: 30,
        gender: "Female",
        language: "Typescript",
    },
]

const strings = ["123", "xD", "otro"];

function findByIndex<T>(array: T[], index: number): T | undefined {
    const object = array.find((element, elementIndex) => index === elementIndex)
    return object;
}


export function getObjects() {
    console.log(findByIndex<string>(strings, 2));
    console.log(findByIndex<Person>(personas, 2));

}
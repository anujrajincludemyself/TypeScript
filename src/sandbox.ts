// const char = 'anuj';
// console.log(char);

// const input = document.querySelectorAll('input');
// console.log(input);

// input.forEach(function (input) {
//     console.log(input);
// });

export { };

let name = 'anujraj';


const circ = (diameter: number) => {
    return diameter * Math.PI;
}
console.log(circ(10));

let mixed: (String | number | boolean);

mixed = 25;
mixed = "hello";
mixed = true;

console.log(mixed);

let age: any;
age = 25;
age = "hello";
age = true;

// let greet = ()=>{
//     console.log("hi");
// }
// greet = 'anuj';
let greet :Function;

greet =()=>{
    console.log("hi")
}
const add = (a:number,b:number,c:number= 10) :number=>{
    //   console.log(a+b);
    //   console.log(c);
      return a+b;
}
// console.log(add(8,3));
add(3,4)
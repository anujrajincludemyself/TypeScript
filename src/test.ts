let greet :(a : string , b :string) => void;  //this is called as  signature of the function 

greet = (name :string , surname :string)=>{
    console.log(`the name of person is ${name}${surname}`);
}

let calc :(a:number , b :number , c:string)=> number; //now this is the signatur of the function 

calc =(numone :number , numtwo:number,symbol:string)=>{
      if(symbol == "add"){
        return numone+numtwo;
      }
      else{
        return numone-numtwo;
      }
}

let logdetails : (obj:{name : string ,age :number}) =>void;

type person = {name : string ,age :number}; //this is called as aliasign 

logdetails=(ninjs :person)=>{
console.log(`the name of the person is ${ninjs.name}and the age is ${ninjs.age}`)
}
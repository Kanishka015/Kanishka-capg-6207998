console.log("yo");

//type annotation
// let b:string = "hello world";
// console.log(b);

let b:string="yo";
let c:number=3;
let d:boolean=true;
let e:string[]=["a","b","c"];
let f:any=3;
let g: null
f="yo1";


// let arr:number[] = [1,2,3,4,5];
// arr.push(6);
// console.log(arr);

// // let arr1:[string , number] = ["bcdddg", 23443, 2343];

// console.log(arr1);

// let stud { 
// name: string.
// age; number;

// }

//? is optional parameter

function greet(name:string, age:number=24){
    console.log(`${name} and ${age} `);
}

greet("yo")

function add(a ,b){
    return a+b

}

add(10,30)
console.log(add(10,30))

let arr3:(string|number)[] = [1,2,3,"a","b","c"]; //| is union type piperline operator
arr3.push(4);

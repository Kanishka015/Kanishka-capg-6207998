console.log("yo");
//type annotation
// let b:string = "hello world";
// console.log(b);
var b = "yo";
var c = 3;
var d = true;
var e = ["a", "b", "c"];
var f = 3;
var g;
f = "yo1";
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
function greet(name, age) {
    if (age === void 0) { age = 24; }
    console.log("".concat(name, " and ").concat(age, " "));
}
greet("yo");
function add(a, b) {
    return a + b;
}
add(10, 30);
console.log(add(10, 30));
var arr3 = [1, 2, 3, "a", "b", "c"]; //| is union type piperline operator
arr3.push(4);

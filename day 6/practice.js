// var message = "hello world";
// console.log(message);

// typeof message; // string
// typeof 42;

// typeof null;
//historical bug in JavaScript, but it is not an object, it is a primitive value that represents the absence of any object value.

// var name = "Alice";
// let age = 30;
// one = 1;
// console.log(name);
// console.log(age);
// console.log(one);


// const Varcomp = [
//     { name: "Alice", age: 30 },
//     { name: "Bob", age: 25 },
//     { name: "Charlie", age: 35 }

// ];

// console.table(Varcomp);

let user = " developer";

function process(){
    var tool = "JavaScript"; // function scope

    if(true){
        let secret =" 123"; // block scope
        console.log(user); 
        return "hello";
    }

    //console.log("Outside block:", secret); // Uncaught ReferenceError: secret is not defined
}

process();
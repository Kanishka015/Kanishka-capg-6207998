console.log("Hello, World!");
window.console.log("This is a message from the console.");

console.log(document);
console.log(document.title);
console.log(document.body);
console.log(document.head);

//!doument obj model
let btn1 = document.body.children[2]
console.log(btn1.parentElement);
console.log(btn1.parentNode);


let btn2 = document.body.children[3]
console.log(btn2.previousElementSibling);
console.log(btn2.nextElementSibling);

// let head4=div1.lastElementChild

// console.log(head4.previousElementSibling);
// console.log(head4.previousSibling);


//get element by id
let h1 = document.getElementById("heading1");
console.log(h1);

// let head4 = document.getElementsByClassName("h44");
// console.log(head4);
// let convertdarray=Array.from(head4);
// console.log(convertdarray);
// convertdarray.map

//query selector
let h11 = document.querySelector(".h44");
console.log(h11);

let h12=document.querySelectorAll(".h44");
console.log(h12);

let img1=document.createElement("img");
img1.src="https://www.w3schools.com/images/w3schools_green.jpg";
console.log(img1);
img1.setAttribute("alt","w3schools logo");
document.body.append(img1);

let h1=document.createElement("h1");
h1.innerHTML="This is a heading";
document.body.append(h1);

let p=document.createElement("p");
p.textContent="playright"
p.setAttribute("id","p1");
document.body.append(p);
console.log(p);


//event handling

//inline handling
let btn1 = document.getElementById("btn1");

function demo() {
    alert("Button clicked!");
}
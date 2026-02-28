// let p1= new Promise<string>((resolve, reject)=>{
//     let success = true;
//     if(success==true){
//         resole("login successful");
//     }
//     else{
//         reject("login failed"); 
//     }
// })
// console.log(p1);

// function getUser():Promise<string>{
//     return new Promise<string>((resolve, reject)=>{
//         reject("user not found");
//         //resolve("user found");
//     })
// }
let p1= new Promise<string>((resolve, reject)=>{
    let success = false;
    if(success==true){
        resolve("login successful");
    }
    else{
        reject("login failed"); 
    }
})
console.log(p1);

function getUser():Promise<string>{
    return new Promise<string>((resolve, reject)=>{
        reject("user not found");
        //resolve("user found");
    })
}
getUser().catch((ele)=>{
    console.log(ele);
}).then((res)=>{console.log(res);
})

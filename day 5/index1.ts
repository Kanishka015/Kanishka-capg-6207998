console.log("start");
setTimeout(() => {
    console.log("timeout");
}, 5000);

setInterval(() => {
    console.log("interval");
}, 2000);
console.log("end");

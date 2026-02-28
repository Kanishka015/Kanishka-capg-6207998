import {test} from "@playwright/test"


test("test1" , async()=>{
    console.log("test1")
})

test.slow("test2" , async()=>{
    console.log("test2")
})

test.fixme("test3" , async()=>{
    console.log("test3")
})                      
test("test4" , async()=>{
    console.log("test4")
})
test("test5" , async()=>{
    console.log("test5")
})

test.describe("test6" , async() => {
    console.log("test6");
    test("123" , async({page})=>{
        
    })
    test("456" , ()=>{})
    test("asd" , ()=>{})
    test("hfj" , ()=>{})
    test("dnk" , ()=>{})
    
})
import {test} from '@playwright/test'

test.beforeAll("" , async()=>{
    console.log("before all")
})

test.beforeEach("", async()=>{
    console.log("before each");
})

test("test1", async()=> {
    console.log("test1");
})

test("test2", async()=> {
    console.log("test2");
})
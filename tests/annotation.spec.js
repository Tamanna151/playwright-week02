import {test} from "@playwright/test"
test.only("1st example",async()=>{
    console.log("1 hiii")
})
test("2nd example",async()=>{
    console.log("2 hello")
})
test("3rd example",async()=>{
    console.log("3 world")
})
test.skip("4th example",async()=>{
    console.log("4 title")
})
test.fixme("5th example",async()=>{
    console.log("5th ")
})
test.describe("login",async()=>{
    console.log("start1");
   
    test.only("start3",async()=>{
        console.log("test 5")
    });
})
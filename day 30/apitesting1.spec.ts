import {test,request} from "@playwright/test"
let baseURL="https://www.shoppersstack.com/shopping";
let token:string;

//!Shopper stack 
test("Shopper stack",async({request})=>{

    //! login
    let r1=await request.post(`${baseURL}/users/login`,{
        data:{
            email:"rutu1@gmail.com",
            password:"Rutu@123",
            role:"SHOPPER"
        },ignoreHTTPSErrors:true
    })
    let resp=await r1.json()
    token=resp.data.jwtToken
    console.log(resp)
    console.log(token);
    console.log("...");
    
//! get all products
    let r2 = await request.get(`${baseURL}/products/alpha`,{
        // headers:{
        //     Authorization:`Bearer ${token}`     }
        ignoreHTTPSErrors:true  ,params:{}      
    })
    console.log(await r2.json())
    console.log("...");

    //! create a product in wishlist
    let r3 = await request.post(`${baseURL}/shoppers/378284/wishlist`, {
        data: {
        productId: 77,
        quantity: 5
        },
        headers: {
        Authorization: `Bearer ${token}`
        },ignoreHTTPSErrors: true,
    });
    console.log(await r3.json())
    console.log("...");

    //! get all wishlisted items
    let r4=await request.get(`${baseURL}/shoppers/378284/wishlist`,{
             headers: {
        Authorization: `Bearer ${token}`
        },ignoreHTTPSErrors: true,   
   
    })
    console.log(await r4.json())
    console.log("...");

    //! add to cart
    let r5=await request.post(`${baseURL}/shoppers/378284/carts`,{
        data: {
        productId: 77,
        quantity: 3
        },
        headers: {
        Authorization: `Bearer ${token}`
        },ignoreHTTPSErrors: true,
    })
    console.log(await r5.json())
    console.log("...");

    //! get all products from cart 
    let r6=await request.get(`${baseURL}/shoppers/378284/carts`,{
             headers: {
        Authorization: `Bearer ${token}`
        },ignoreHTTPSErrors: true,   
   
    })
    console.log(await r6.json())
    console.log("...");

    //! post address
    let r7=await request.post(`${baseURL}/shoppers/378284/address`,{
        data: {
        addressId: 1,
        buildingInfo: "Flat 302, Shree Residency",
        city: "Jaipur",
        country: "India",
        landmark: "Near World Trade Park",
        name: "kanishka nagar",
        phone: "9876543210",
        pincode: "302017",
        state: "Rajasthan",
        streetInfo: "Malviya Nagar",
        type: "Home"
},
        headers: {
        Authorization: `Bearer ${token}`
        },ignoreHTTPSErrors: true,
    })
    console.log(await r7.json())
    console.log("...");

    //! get address by id
    let r8=await request.get(`${baseURL}/shoppers/378284/address/151772`,{
             headers: {
        Authorization: `Bearer ${token}`
        },ignoreHTTPSErrors: true,   
   
    })
    console.log(await r8.json())
    console.log("...");
 
    //! plavce order
 let r9 = await request.post(`${baseURL}/shoppers/378284/orders`, {
    data: {
        address: {
            addressId: 151772,
            buildingInfo: "Flat 114, Shree Residency",
            city: "Jaipur",
            country: "India",
            landmark: "Near police station",
            name: "kanishka nagar",
            phone: "9876543210",
            pincode: "302017",
            state: "Rajasthan",
            streetInfo: "pratap Nagar",
            type: "Home"
        },
        paymentMode: "COD"
    },
    headers: {
        Authorization: `Bearer ${token}`
    },
    ignoreHTTPSErrors: true
});

console.log(await r9.json());
console.log("...");

//! get order   
    let r10 = await request.get(`${baseURL}/shoppers/378284/orders`,{
       headers: {
        Authorization: `Bearer ${token}`
    },
    ignoreHTTPSErrors: true     
    })
    console.log(await r10.json())
    console.log("...");

//! get reviews
    let r11=await request.get(`${baseURL}/reviews/51`,{
        ignoreHTTPSErrors: true,
    })
     console.log(await r11.json())
    console.log("...");

//! post a review
    let r12= await request.post(`${baseURL}/reviews`,{
        data:{      
    dateTime: "2026-03-28T12:47:25.557Z",
    description: "Amazing phone loved it!",
    heading: "BEST",
    rating: 4,
    shopperId: 378284,
    shopperName: "kan"
    },
    headers: {
        Authorization: `Bearer ${token}`
    },
    params:{
        productId: 51
    },
    ignoreHTTPSErrors: true
    })
    console.log(await r12.json())
    console.log("...");

})
// const axios = require("axios");

// //post 
// //change request method 
// // send body
// // send haeder
// async function main() {
//     const resopnse = await axios.get("https://httpdump.app/dumps/86f741d7-7e7c-45c2-907b-1b685a762e1c?a=b", {
            
//         username: "balaji",
//         password: "12345",

//         },
//         {
//             header: {
//                 Authorization: "Bearer 123",
//             },
//         },

//     );
//     //respons data
//     console.log(resopnse.data);
    
// }
// main();


// ////////////
const axios = require("axios");

//post 
//change request method 
// send body
// send haeder
async function main() {
    const resopnse = await axios (
        {
            url: "https://httpdump.app/dumps/86f741d7-7e7c-45c2-907b-1b685a762e1c?a=b",
            method: "POST",
            header: {
                Authorization: "Bearer 123",
            },
          data:{
            username: "balaji",
           },
          
        },

        
    
    );
    //respons data
    console.log(resopnse.data);
    
}
main();
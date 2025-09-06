//ARROW FUNCTION 

//normal function 
// function sum(a, b){
//     return a + b;
// }
// app.get("/", function(req, res)  {
    
// })

//this  is the arrow function
// const sum = (a, b) => {
//     return a + b;
// }

// app.get("/", (req, res) => {

// })

//// MAP, filter , arrow fns 
//given an array, given me back a new array in which every value is multiplied by 2
// [1, 2, 3, 4, 5]
// [2, 4, 6, 8, 10]


// const input = [1, 2, 3, 4, 5];
//solution 
// const newArray = [];

// for (let i = 0; i < input.length; i++){
//     newArray.push(input[i] * 2)
// }
// console.log(newArray);

/// Other solution map
// function transform(i){
//     return i * 2;

// }
// const ans = input.map(function(i){
//     return i * 2;
// });
// console.log(ans);

// create a map function that takes 2 inputs 
// an arrays, and a transformation callback/fn
// and transform the array into a new one using the transform fns


// filtering 
// what if I tell u, given an input array, give me back all the even values from it

const arr = [1, 2, 3, 4, 5]
//ans 

// const newarr = [];
// for(let i = 0; i<arr.length; i++){
//     if(arr[i] % 2 == 0){
//         newarr.push(arr[i]);
//     }
// }

// console.log(newarr);

//filter

function filterLogic(n) {
    if(n % 2 == 0){
        return true;
    } else{
        return false;
    }
}

const ans = arr.filter(filterLogic);
console.log(ans);
// create a map fns that takes an array and a transform fn as input 
// and returns the tranformed array as output
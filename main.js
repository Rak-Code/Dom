// // //a function which return a anonymous function is called a closure

// // function times(num){
// // //     return function(x){
// // //         return x*num;
// // //     }
// // // }

// // // double = times(2);
// // // console.log(double(5)); // Output: 10

// // // triple = times(3);
// // // console.log(triple(5)); // Output: 15


// // // function count(num){
// // //     return function(x){
// // //         return x = x + num;
// // //         }
// // // }

// // // counter = count(1);
// // // console.log(counter(1)); // Output: 15


// // mat = [
// //     [1,2,3],
// //     [4,5,6],
// //     [7,8,9]
// // ]

// // for(const row of mat){
// //     let result = "";
// //     for(const cell of row){
// //         result =result  + " " + String(cell);
        
// //     }
// //     console.log(result);
// // }


// obj = {
//     obj2:{
//         1:"one",

//     },
//     obj3:{
//         2:"two"
//     }
// }

// for(const key in obj){
//     // console.log(key);
//     for(const key2 in obj[key]){
//         console.log(key2, obj[key][key2]);
//     }
// // }
// [
//     [11,22,33],
//     [44,55,66],
//     [77,88,99]
// ]



// let result = []
//     for(let j = 1; j <= 9; j++){
//         console.log(11*j)
//         result  = 11*j;
//     }

 let arr = [];
 for(let i = 0; i < 3; i++){
    arr.push([])
    for(let j = 0; j < 3; j++){
        arr[i].push(11*((i*3)+j+1));
    }
 }
 console.log(arr);


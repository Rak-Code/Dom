
// let promise = new Promise((resolve, reject) => {
//     let num = prompt("enter value");
     
  
//     if (num % 2 === 0) {
//       resolve("Even Number",num); 
//     } else {
//       reject("Odd Number ",num); 
//     }
//   });
  
//   promise
//     .then((message) => {
//       console.log(message); 
//     })
//     .catch((error) => {
//       console.log(error); 
//     });
  

async function fetchData(){
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    console.log(data);

}

fetchData();

  
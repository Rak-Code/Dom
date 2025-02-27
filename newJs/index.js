console.log("hello");

let add = (...arr) => {
    setTimeout(() =>{

        let sum = 0;
        for (const element of arr) {
            sum += element;
        }
        console.log(sum);
        ;
    },1000*3)
    };
    
console.log("hello");


console.log(add(1,2,3,4,5,6,7,8,9));

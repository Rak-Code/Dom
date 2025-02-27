let add = (...arr) => {
    let sum = 0;
    for (const element of arr) {
        sum += element;
    }
    return sum;
}

console.log(add(1,2,3,4,5,6,7,8,9));

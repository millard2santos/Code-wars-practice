const squareNum = (numbers) =>{
    
    let sum = 0;
    for (i = 0 ; i < numbers.length ; i++){
        sum += numbers[i]**2
    }
    return sum;
}

console.log(squareNum([2,3,4]))


    let defArray = []

function eachCons(array, n) {
    for (i = 0; i < array.length ; i++){
     defArray.push(array.slice(i, i + n))
    }
    return defArray.filter( e => e.length === n)
  }

console.log(eachCons([1, 2, 3, 4], 2))
console.log(defArray)
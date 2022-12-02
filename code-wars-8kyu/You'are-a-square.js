const collect = require('collect.js');


const myArray = collect({
    name: 'Millard',
    number: 123456,
    city: 'Madrid'
})
const X = myArray.flip()

console.log(X.all())
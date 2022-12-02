const smash = (words) =>{
    let word = ''
    for (i = 0; i < words.length; i++){
      word += ' ' + words[i]
      
    }
   word = word.replace(' ', '')
   
   return word
}

console.log(smash(['Millard', 'Deiner', ]))
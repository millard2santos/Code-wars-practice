const flip=(d, a)=>{
  
    if (d === 'R'){
       a = a.sort((e,f)=>e-f )
    }
    else {
      a = a.sort((e,f)=> f-e)
    }
    return a
  }

console.log(flip(d,a))
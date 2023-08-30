function addOne(valor){
    return new Promise(resolve=>{
        setTimeout(() => resolve(valor+1), 500);
    })
}

addOne(1)
    .then(result => {
        console.log(result)//2
        return addOne(result)
    })
    .then(result => {
        console.log(result)//3
        return addOne(result)
    })
    .then(result => {
        return Promise.reject("Oops")//4
    })
    
    .catch(error =>{
        console-log(error)
    })
    


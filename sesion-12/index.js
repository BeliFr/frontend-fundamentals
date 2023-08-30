function myFuncion(param1){
    return param1*2;
}

console.log(myFuncion(25));


function calculaEdad (birthYear){
    const age = 2023 - birthYear;
    return age;
}

const edadAlejandra = calculaEdad(1999)
const edadOscar = calculaEdad(1988)
const edadSamuel = calculaEdad(1998)

console.log(edadAlejandra)
console.log(edadOscar)
console.log(edadSamuel)

function yearsUntilRetirement( year, name){
    const age = calculaEdad(year)
    const retirement = 65 - age
    console.log(`${name} se retirará en ${retirement} años`)
}
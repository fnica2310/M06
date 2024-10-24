let numeros = [4,0,3,4,7,5,3,8,1,2,3,4,4,0,7,3,9,6,2,1];
function numero(){
    let numeros_o = numeros.sort((a, b) => a - b );
    const num = new Set(numeros_o);
    let numeros_s = [...num]
    console.log(numeros)
    console.log(numeros_o)
    console.log(numeros_s)
}
numero()
function mostrar_hora(){
    const fecha = new Date();
    let hora = fecha.getHours();
    if (hora < 12 && hora > 5 ){
        const mensaje = `Bon dia`;
        document.getElementById("fecha-hora").innerHTML = mensaje;
    } else if(hora >= 12 && hora < 21){
        const mensaje = `Bona tarda`;
        document.getElementById("fecha-hora").innerHTML = mensaje;
    }else if(hora >= 21 && hora < 5){
        const mensaje = `Bona nit`;
        document.getElementById("fecha-hora").innerHTML = mensaje;

    }
}
 function nombre() {
    const nombre = document.getElementById('nombre').value;
    const mensaje = nombre +" ";
    document.getElementById("fecha-hora").innerHTML = mensaje;
    mostrar_hora();
};
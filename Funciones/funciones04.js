const auth = true;
const account = true;
const credit = true;
//Los && condicionan de forma estricta su cumplimento de todas las condicionales
//Mientras que los || perimten que se ejecute con almenos una condición sea cumplida.

if (auth && account && credit){
    console.log("El usuario esta autenticado")
}else if (auth || account || credit){
    console.log("Le hace falta requisitos al usuario");
}


//Operador ternario
//Este operador tiene tres partes  Variable - valor a evaluar, ? - signo que denota donde termina la condición
//y los : - que remarcan donde del lado izquierdo el resultado si es verdadero y derecha falso.
console.log(auth ? account ? credit ? "El usuario puede pagar" : "El usuario no puede pagar" : "El usuario no tiene cuenta" : "El usuario no esta autenticado");




    const puntaje = 450;

//Para escapar de una funcion y evitar ejecutar el resto de codigo se usa return;

    function revisarPuntaje(){
        if(puntaje > 400){
            console.log('Excelente!!');
            return;
        }

        if(puntaje>300){
            console.log("Buen puntaje");
            return;
        }
    }


revisarPuntaje();
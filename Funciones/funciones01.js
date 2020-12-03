
function sumar(a, b){
 console.log(a+b);
}


sumar(24, 44);


const sumar2 = function(a, b, c){
    console.log(a+b+c);
}

sumar2(3, 6, 9);


/**
 * 
 * La diferencia entre cada forma de crear funciones radica en que la primer forma 
 * es registrada al inicializar la pagina y puede ser llamada desde cualquier parte 
 * del documento, mientras que por su parte la segunda forma solo puede ser llamada 
 * despues de su creación.
 * 
 * **/




 function Hola(name = "usuario", lastName = ""){
    console.log(`Hola, bienvenido ${name} ${lastName}`);
 }


Hola("Emir", "Luna");
Hola("Emir");
Hola();





/**
 * 
 * comunicacion entre funciones mediante return
 * 
 **/

let carrito = [];
function agregar(producto){
    carrito.push(producto);
    console.log(carrito);
    console.log(obetenerImpuesto());
}

function obetenerImpuesto(){
    let total = 0;

    carrito.forEach(function(producto){
        total += producto.price;
    })
    console.log(total);
    return total * 0.16;
}



function product(name, price){
    this.name = name;
    this.price = price;
    agregar(this);
}

const lap = new product("Laptop", 5000);
const tab = new product("Tablet", 1200);
const cel  =new product("Celular", 2000);

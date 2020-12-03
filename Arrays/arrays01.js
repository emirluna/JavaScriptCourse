/**
 * Para agregar elementos al final o inicio de una array mediante metodos 
 * el metodo Push agrega el elemento al final.
 * el metodo unshift lo agrega al incio.
 * 
 * 
 * 
 * de modo Declarativo se crea mediante una variable de copia sin afectar el array original 
 * con la sintaxis: resultado =  [...carrito, producto];
 * 
 */


const carrito = [];

const product = {
    name: "Laptop",
    price: 4500
}

const product2 = {
    name: "Tablet",
    price: 2300,
    showProduct : function(){
        console.log(`El producto: ${this.name} tiene un precio de $ ${this.price}`)
    }
}

const product3 = {
    name: "teclado",
    price: 300
}

const product4 = {
    name: "Bocina",
    price: 450
}


let resultado;

resultado = [...carrito, product2];
resultado = [product3, ...resultado];
resultado = [...resultado ,product4]

console.table(resultado);
console.log(carrito);


carrito.push(product);
carrito.push(product2);
carrito.unshift(product3);
carrito.unshift(product4);

console.table(carrito);



/**
 * 
 * Eliminar elementos de los arrays de forma imperativa
 * 
 * con los metodos:
 *  pop() - elimina el ultimo elemento
 *  shift() - elimina el primer elemento
 *  splice(indice, N. elementos) - Elimina valores centrales
 * 
 */



 carrito.pop();

 console.table(carrito);

 carrito.shift();

 console.table(carrito);

 resultado.splice(1,1);

 console.table(resultado);


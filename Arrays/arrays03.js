// Metodo forEach

const carrito = [
    {name: "Bateria", price:450},
    {name: "Teclado", price:340},
    {name: "CPU", price:4320},
    {name: "Mouse", price:7650},
    {name: "Headphones", price:880},
    {name: "Tablet", price:88670},
    {name: "Notebook", price:5460},
    {name: "Ultrabook", price:3340}
];

console.log("Reccorrido de arrays  mediante el metodo tradicional con for")
for (let i  = 0; i< carrito.length; i++){
    console.log(`${carrito[i].name} - precio ${carrito.price}`);
}


console.log("Reccorrido de arrays  mediante el metodo forEach")
carrito.forEach(function(product){
    console.log(`${product.name} - precio ${product.price}`);

})

/**A pesar de la gran semejanza entre forEach y Map tienen la diferencia principal
 * de que map() crea una nueva variable con los valores recurridos
 * y forEach() solamente recorre el array pero no genera ninguna variable
*/
console.log("Reccorrido de arrays mediante el metodo map")
const productos = carrito.map(function(product){
    console.log(`${product.name} - precio ${product.price}`);
    return `${product.name} - precio ${product.price}`;    
})

console.log("variable creada a base del recorrido del array");  
console.log(productos);


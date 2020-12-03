/**
 * Unir uno o mas objetos:
 * Ya sea con el metodo assign o la nomenclatura:
 * { ...propiedad, ...propiedadx}
 * 
 * guardando el resultado en un nuevo objeto sin afectar los originales.
*/

/*
const product = {
    name: "Laptop",
    price: 4500
}

const category = {
    categoryName : "Computacion"
}

const details = {
    screen : "14\"",
    weigth : 2.3
}

const result = Object.assign(product, category, details);

const result2 = { ...product, ...category, ...details};

console.log(result);

console.log(result2);

*/





/**
 * La palabra reservada This se usa para mostrar recursividad hacia el mismo objeto
 * 
 * Con la sintaxis de template strings 
 * 
 * console.log(`El producto: ${this.name} tiene un precio de $ ${this.price}`)
 * 
 */

 /*
const product = {
    name: "Laptop",
    price: 4500,
    showProduct : function(){
        console.log(`El producto: ${this.name} tiene un precio de $ ${this.price}`)
    }
}

const product2 = {
    name: "Tablet",
    price: 2300,
    showProduct : function(){
        console.log(`El producto: ${this.name} tiene un precio de $ ${this.price}`)
    }
}


product.showProduct();

product2.showProduct();

*/



/**
 * 
 * Object Constructor
 *
 * El objeto constructor semejante a crear un objeto templete da pauta a poder crear un objeto
 * desde el llamado de una funcion.
 * 
 * */


 function Product(name, price){
     this.name = name;
     this.price = price;
     this.status = true;
 }


 const product1 = new Product("Tablet Samsung", 4500);

 console.log(product1);

 console.log(Object.keys(product1)); //arroja solo el array de los nombre de las propiedades o Keys
 
 console.log(Object.values(product1)); // Muestra el array de los valores 

 console.log(Object.entries(product1)); // Muestra el objeto en pares [key, value]
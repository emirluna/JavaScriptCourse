
/** Deconstructuring arrays
 * 
 * El desestructurado de arrays basicamente se refiere a sacar los elementos de una array 
 * y agregarlos en su propia variable ajena al objeto original para manipularlos sin afectar al original
 * 
 * En cuanto a arrays el destructurado se realiza mediante la siguiente sintaxis:
 * 
 * 
 */
const numeros = [1,2,3,4,5,6,13,12,14,15,36];

// Extrae solo el primer valor
const [primero] = numeros;
console.log("Extrayendo solo primer valor");
console.log(primero);

// Extrae solo el segundo valor
const [ , segundo]  =numeros;
console.log("Extrayendo solo segundo valor");
console.log(segundo);

//Para extraer mas valores se separan por comas cada unos hasta el que se quiere extraer.
const [uno, dos, tres]  =numeros;
console.log("Extrayendo solo tres valores");
console.log(uno);
console.log(dos);
console.log(tres);

//Si se requiere un valor intermedio, pero no se necesitan los valores iniciales, 
//estos se omiten por espacios vacios separados por comas.
console.log("Extrayendo solo un valor intermediario");
const [ , , , , , , , , intermedio] = numeros;
console.log(intermedio);


//En caso de solo querer extraer las primeras posiciones y dejar el resto en una copia de array 
//se extraeran las variables a requerir y se utiliza la  sintaxis rest  : ...variable

const [valor1, valor2, ...resto] = numeros;
console.log("Extrayendo solo dos valores y creando array con el resto");
console.log(valor1);
console.log(valor2);
console.log(resto);








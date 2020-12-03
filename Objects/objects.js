/*
const student = {
    name : "emir",
    lastName : "luna",
    age : 23,
    phone : 2345686585
}

console.log(student.name);

const { age, phone } = student;

console.log(age);
console.log(phone);

student.skill = "social";

console.log(student.skill);


delete student.lastName;

console.log(student);

*/

/*
const School = {
    name : "Lazaro Cardenas",
    location: {
        street: "Domingo Arenas",
        number: 1,
        zipCode: 90700
    },
    description: "Escuela primaria",
    teachers: {
        name: "pedro",
        topics: [
            {signature: "ingles", time: "full time", grade: [4,5,6]},
            {signature: "history", time: "half time", grade: [4,6]}]
    },
    students: {
        name: "juanito",
        grade: 4,
        status: true
    }
}


console.log(School);

const {teachers: name} = School;

console.log(name);

const {teachers: {topics}} = School;

console.log(topics);
*/

/**
 * En modo estricto y con el metodo Freeze no permite que se modifique el objeto original
 *  - Evita currupción de información
 *  - Agregado de campos no existentes
 *  - Eliminacion de propiedades
 */
/*
"use stric";

const student = {
    name : "emir",
    lastName : "luna",
    age : 23,
    phone : 2345686585
}

Object.freeze(student);

console.log(Object.isFrozen(student));

delete student.name;

student.age = 26;
student.group = "Network"

console.log(student);

*/




/**
 * Con el metodo Seal, evita añadir o eliminar propiedades
 * pero si perimte el cambiar el valor de las existentes.
 * 
 */


"use stric";

const student = {
    name : "emir",
    lastName : "luna",
    age : 23,
    phone : 2345686585
}

Object.seal(student);

console.log(Object.isSealed(student));

delete student.name;

student.age = 26;
student.group = "Network"

console.log(student);
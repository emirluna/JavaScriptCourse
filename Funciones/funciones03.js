/**
 * 
 * Arrow funtions
 * Esta sintaxis cambia la palabra reservada Function con => 
 * conserva los () para el paso de parametros, en caso de solo ser una se puede omitir
 * En caso de ser una funcion corta de una linea se puede omitir el uso de {}
 * Implicitamente retorna un valor sin nececidad de declararlo.
 * 
 */


function hola(name = "usuario", lastName = ""){
    console.log(`Hola, bienvenido ${name} ${lastName}`);
 }

const holaArrow = (name = "usuario", lastName = "") => `Hola, bienvenido ${name} ${lastName}`;
 

hola("Emir", "Luna");

console.log("Con arrow function");
console.log(holaArrow("Emir", "Luna"));


let door = true;

const House = {
    
    doorStatus: () => {
        if (door){
            console.log("Door is open");
        }else{
            console.log("Door is close");
        }
    },

    openDoor: () => {
        console.log("The door is opening");
        door=true;
    },

    closeDoor: () => {
        console.log("The door is closing");
        door=false;
    }, 

    whoKnoc: (whoIs) => {
        console.log(`${whoIs} is waiting outdoor`);
    }

}
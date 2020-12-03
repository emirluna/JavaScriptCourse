/**
 * Si se requiere se puede manejar en forma de objeto la agrupación de varias funciones
 * su funcinoalidad es la misma, ofreciendo una mejor organización de las mismas
 * para acceder a las funciones ahora se tiene que acceder con la sintaxis de punto.
 */

let door = true;

const House = {
    
    doorStatus: function(){
        if (door){
            console.log("Door is opened");
        }else{
            console.log("Door is closed");
        }
    },

    openDoor: function(){
        console.log("The door is opening");
        door=true;
    },

    closeDoor: function(){
        console.log("The door is closing");
        door=false;
    }

}


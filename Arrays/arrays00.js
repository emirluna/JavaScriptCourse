    //un array puede constar solo de numeros y se creado directamente con corchetes
    const numeros = [1,2,3,4,5,6,7];

    //Asi como de strigns y ser creado con New Array()
    const meses =  new Array('enero', 'febrero', 'marzo', 'abril');

    //Incluso puede tener varios tipos de datos: Strings, enteros, booleanos, Objetos y otros arrays anidados
    const deTodo = ["hola", 10, true, 'si', null, {numbre: "emir", edad: 23}, [1,2,3]];

    console.table(numeros);
    console.log(meses);
    console.table(deTodo);


    const numeros2 = [1,2,3,4,5,6,7,[1,2,3,4,5,6,7,[1,2,3,4,5,6,7,[1,2,3,4,5,6,7]]]];

    console.log(numeros2);

    console.table(numeros2[7][7][7]);
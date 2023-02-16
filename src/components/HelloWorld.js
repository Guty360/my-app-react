// nota: primero tener en cuenta que los componentes que se agreguen a react se deben agregar en una nueva 
// carpeta como por ejemplo la carpeta de nombre " Componentes" Alojado en SRC
// que para este caso contiene un archivo js denominado HelloWorld

import React from 'react' //La primera estructura es la de las importaciones
 
function HelloWorld() { //esta es la forma correcta de definir una funcion en este caso el nombre es el mismo que el componente
       
    
    //dentro de las funciones podemos crear codigo JavaScript por ejemplo
    
    // const MyFirtsFunctionJS = () => {
    // console.log("My Function");
    // }


    return( // los returns solo pueden retornar un unico componente por ejemplo en este return 
            // solo se retornar el <div> (si el div contiene mas elementos es otro cuento), seria 
            //como retornar un array
        
        // existe otra opcion de envio sino quieres que sea un <div></div> puedes colocar directamente 
        // <></> <---- se llama fragment
        <> 
            <h1>Hello World</h1>
            <h2>FireFox</h2>
        </>
    );

 }

function GoodByeWorld(){
    return (
        <div>
        <h2>See you later world</h2>
    </div>
    );
 }

export {HelloWorld, GoodByeWorld}
// ahora qwue el componente esa importado se puede mandar a llamar 
// desde el App.js para renderizarlo

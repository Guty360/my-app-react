import React from "react";

function saludar(props){
    //para sacar informacion del props que recibe el componente saludar se define una estructura js
    // como const y definimos las funciones que queremos sacar del props que esta recibiendo
    //se le conoce como Destructuring
    const { userInfo, saludarFn } = props;
    const { nombre = "Anónimo" } = userInfo;
    const {edad = "Anónima"} = userInfo;

    console.log(props.edad)
    console.log(userInfo)   
    return(
        //si quieres imprimir informacion que se esta enviando del APP.js
        //dentro de viñetas se coloca entre llaves
        <>
        <h1>Hola {props.name}, tu tienes {props.edad}</h1>
        <h1>Hola {props.userInfo.nombre}, tu tienes {props.userInfo.edad}</h1>
        <button onClick={ () => props.saludarFn(props.userInfo.nombre)}>Enviar saludo</button>
        <br/>
        <button onClick={ () => saludarFn(nombre,edad)}>Enviar saludo 2</button>
        </>
        //en button "enviar saludo" la informacion se manda elemento por elemento es decir la carga de codigo es mayor
        //en button "enviar saludo 2" podemos desglozar la informacion en 1 solo elemento con menos codigo 
    );
}
export default saludar
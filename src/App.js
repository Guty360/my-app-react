import logo from "./logo.svg";
import "./App.css";
// import {HelloWorld} from "../src/components/HelloWorld"
import Saludar from "./components/Saludar";
import React, { useEffect, useState } from "react";

function App() {


  //funcion de js que guarda un array de elementos
  const user = {
    nombre: "Manuel gutierrez",
    edad: 22, 
    color:"red"
  };

  //funcion de saludo que conecta al componente Saludar
  const saludarFn = (nombre, edad) => {
     console.log("Hola " + nombre + " tienes " + edad +" años de edad");
     console.log("")
     console.log(`Hola ${nombre} tu tienes ${edad} años de edad`);
  };

  const [stateCar, setStateCar] = useState(false);
  const [contar, setContar] = useState(0);

    const encender_Apagar = () => {
    //  setStateCar(!stateCar)
     setStateCar(preValue => !preValue)
     setContar(contar + 1)
    }

    useEffect(() => {
      console.log(`Total: ${contar}`)
    }, [contar])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <HelloWorld/> */}
        {/* <GoodByeWorld/> */}
        {/* <Saludar userInfo={user} saludarFn={saludarFn} /> */}
        <Saludar edad="22" userInfo={user} saludarFn={saludarFn}/>
        <h2>----Pruebas con Templates---- </h2>

        <h3>El coche esta: {stateCar ? "Encendido": "Apagado"}</h3>
        <h4>Clicks: {contar} </h4>
        <button onClick={encender_Apagar}>Encender/Apagar</button>
        
      </header>
    </div>
  );
}

export default App;

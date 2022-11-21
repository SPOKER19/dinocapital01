import { useEffect } from "react";
import Swal from "sweetalert2";


function App(props) {

  useEffect(() => {
    mostrarAlerta();  
  },[]);

  const mostrarAlerta = () => {
    
    Swal.fire({
      icon: "info",
      title: 'Auto Close Alert!',      
      text: `Esta pestaña se cerrara en 3 Segundos. <p>Este es el año actual:  </p>` ,
      //timer: 3000,
      footer: "<b>Este es el FOOTER del mensaje</b>"
    })
    
    //Swal.fire("Mensaje simple"); // Este es el ejemplo Nro.1

    /*
      Swal.fire(
        'The Internet?',  //El titulo del Mensaje
        'That thing is still around?', // El Mensaje Detallado
        'question' // El icono del Mensaje
        /* Los iconos que puedes utilizar son:
          success
          error
          warning
          info
          question
        */    
    /* ); */


  };


  return (   
      <div>
        <h4>
          Dino Capital, Inversion a Maximos Niveles¡¡¡¡¡
        </h4>
        <h2 className="text-xl font-extrabold text-red-600">Pagina de Prueba 4000</h2>
        <h2 className="text-5xl font-medium text-lime-500">Pagina de Prueba 10000 + 2</h2>
        <hr></hr>

        <p className="mt-2"> 1.- Este es el valor de la variable <strong>langSelected</strong> = {props.langSelected} </p>
        <p className="mt-2"> 2.- Este es el valor de la variable <strong>toggleIdiomas</strong> = 
        {props.toggleIdiomas ? "TRUE" : "FALSE"} </p>
        <p className="mt-2"> 3.- Este es el valor de la variable <strong>windowWidth</strong> = {props.windowWidth} </p>
        <p className="mt-2"> 4.- Este es el valor de la variable <strong>trueFalseTamanoMD</strong> = 
        {props.trueFalseTamanoMD ? "TRUE" : "FALSE"} </p>
        <p className="mt-2"> 5.- Este es el valor de la variable <strong>tamPantalla</strong> = {props.tamPantalla} </p>
        
      </div>  
  );
}

export default App;

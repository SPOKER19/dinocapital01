import React, {useState, useEffect, useCallback} from 'react';
import { RoutesMain } from './RoutesMain';
import { useMoralis } from 'react-moralis';
import * as CompFxGlobales from "../05_Fx/CompFxGlobales";


export const ConnectMetaM = (props) => {    
   
    const { Moralis, user, isUnauthenticated, authError } = useMoralis();
    const [ userActual, setUserActual ] = useState([]);

    const borrarDatosMemoria = useCallback( async  () => {
      await Moralis.User.logOut()
      .then(() => {        
        setUserActual(Moralis.User.current());         
        //console.log("CERRANDO y Borrando Datos User ......................... ");
      });
    }, [Moralis.User]);
    

  useEffect(() => {
    if(isUnauthenticated){     
      borrarDatosMemoria();
    }else{ 
      //console.log("Estoy en ConnectMetaM useEffects = ", user);
      setUserActual(user);
    }        
  }, [isUnauthenticated, borrarDatosMemoria, userActual, user]);

  useEffect(() => {       
    if(authError){
        let messajeError = authError.message; 
        CompFxGlobales.fxMostrarAlerta("error", "ERROR", messajeError);
    } else{}         
  },[authError]);

         
    return (		
          <RoutesMain     langSelected = {props.langSelected}
                            setCurrentLocale = {props.setCurrentLocale}  
                            toggleIdiomas = { props.toggleIdiomas } 
                            windowWidth = { props.windowWidth }                         
                            tamPantalla = { props.tamPantalla }  
                            trueFalseTamanoMD = { props.trueFalseTamanoMD }
                            setTrueFalseTamanoMD = { props.setTrueFalseTamanoMD }
                            /******/
                            userActual = { userActual }
                            borrarDatosMemoria = { borrarDatosMemoria } 
            /> 
	  );
}

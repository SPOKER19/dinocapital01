import React from 'react';
import Cookies from 'universal-cookie';
import { useMoralis  } from 'react-moralis';

const cookies = new Cookies(); 

export const A01ValorVariables = (props) => {   
    
    const { isAuthenticating, isAuthenticated, isUnauthenticated, isWeb3Enabled, enableWeb3 } = useMoralis();

  return (
        <div className='flex-wrap items-center justify-around hidden p-2 bg-green-400 xs:flex'>
            {/* Tabla Nro 1  ******************************** */}
            <table className="text-gray-900 border border-spacing-2 border-slate-500 bg-blue-gray-200">
                <thead className='text-gray-300 bg-blue-600'>
                    <tr>
                        <th className="px-6 py-2 border border-slate-600">Variable</th>                   
                        <th className="px-4 py-2 border border-slate-600">Valor</th>
                    </tr>                          
                </thead>
                {/********************************* */}
                <tbody>
                    <tr>                    
                        <td className="px-6 py-2 border border-slate-600">cookies.get("ckIdiomaActual")</td>
                        <td className="px-6 py-2 border border-slate-600">{cookies.get("ckIdiomaActual")}</td>
                    </tr> 
                    <tr>                    
                        <td className="px-6 py-2 border border-slate-600">langSelectedr</td>
                        <td className="px-6 py-2 border border-slate-600">{props.langSelected}</td>
                    </tr>  
                    <tr>                    
                        <td className="px-6 py-2 border border-slate-600">windowWidth</td>
                        <td className="px-6 py-2 border border-slate-600">{props.windowWidth}</td>
                    </tr>  
                    <tr>                    
                        <td className="px-6 py-2 border border-slate-600">trueFalseTamanoMD</td>
                        {(props.trueFalseTamanoMD)
                            ?   <td className="px-6 py-2 text-yellow-300 bg-green-800 border border-slate-600">TRUE</td>
                            :   <td className="px-6 py-2 text-white bg-red-600 border border-slate-600">FALSE</td>
                        }                        
                    </tr>  
                    <tr>                    
                        <td className="px-6 py-2 border border-slate-600">tamPantalla</td>
                        <td className="px-6 py-2 border border-slate-600">{props.tamPantalla}</td>
                    </tr>  
                    <tr>                    
                        <td className="px-6 py-2 border border-slate-600">props.userActual</td>
                        {(props.userActual)
                            ?   <td className="px-6 py-2 text-yellow-300 bg-green-800 border border-slate-600">Data BDD _User</td>
                            :   <td className="px-6 py-2 text-white bg-red-600 border border-slate-600">Null</td>
                        } 
                    </tr> 
                    <tr>                    
                        <td className="px-6 py-2 border border-slate-600">URLMainOrigin</td>
                        <td className="px-6 py-2 border border-slate-600">{props.URLMainOrigin}</td>
                    </tr>           
                </tbody>
            </table>

            {/* Tabla Nro 2  ******************************** */}
            <table className="text-gray-900 border border-spacing-2 border-slate-500 bg-blue-gray-200">
                <thead className='text-gray-300 bg-blue-600'>
                    <tr>
                    <th className="px-6 py-2 border border-slate-600">Variable</th>                   
                    <th className="px-4 py-2 border border-slate-600">Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>                    
                        <td className="px-6 py-2 border border-slate-600">idSponsorURL = CAPTURAMOS EL ID DE LA URL WEB</td>
                        <td className="px-6 py-2 border border-slate-600">{props.idSponsorURL}</td>
                    </tr> 
                    <tr>                    
                        <td className="px-6 py-2 border border-slate-600">nombreIdSponsorARegistrar = OBTIENE SU VALOR DE idSponsorURL</td>
                        <td className="px-6 py-2 border border-slate-600">{props.nombreIdSponsorARegistrar}</td>
                    </tr>      
                    <tr>                    
                        <td className="px-6 py-2 border border-slate-600">boolValidarLoadingParamURL = SE ACTIVA APENAS SE REINICIA LA PAGINA DURANTE LA VALIDACION DE LA VARIABLE idSponsorURL (SE VUELVE TRUE) E INDICA QUE SE DEBE ESPERAR</td>
                        {(props.boolValidarLoadingParamURL)
                            ?   <td className="px-6 py-2 text-yellow-300 bg-green-800 border border-slate-600">TRUE</td>
                            :   <td className="px-6 py-2 text-white bg-red-600 border border-slate-600">FALSE</td>
                        }                         
                    </tr>  
                    <tr>                    
                        <td className="px-6 py-2 border border-slate-600">isAuthenticating =  De MORALIS </td>
                        {(isAuthenticating)
                            ?   <td className="px-6 py-2 text-yellow-300 bg-green-800 border border-slate-600">TRUE</td>
                            :   <td className="px-6 py-2 text-white bg-red-600 border border-slate-600">FALSE</td>
                        }                         
                    </tr> 
                    <tr>                    
                        <td className="px-6 py-2 border border-slate-600">isAuthenticated =  De MORALIS</td>
                        {(isAuthenticated)
                            ?   <td className="px-6 py-2 text-yellow-300 bg-green-800 border border-slate-600">TRUE</td>
                            :   <td className="px-6 py-2 text-white bg-red-600 border border-slate-600">FALSE</td>
                        }                         
                    </tr> 
                    <tr>                    
                        <td className="px-6 py-2 border border-slate-600">isUnauthenticated =  De MORALIS</td>
                        {(isUnauthenticated)
                            ?   <td className="px-6 py-2 text-yellow-300 bg-green-800 border border-slate-600">TRUE</td>
                            :   <td className="px-6 py-2 text-white bg-red-600 border border-slate-600">FALSE</td>
                        }                         
                    </tr>   
                    <tr>                    
                        <td className="px-6 py-2 border border-slate-600">isWeb3Enabled =  De MORALIS</td>
                        {(isWeb3Enabled)
                            ?   <td className="px-6 py-2 text-yellow-300 bg-green-800 border border-slate-600">TRUE</td>
                            :   <td className="px-6 py-2 text-white bg-red-600 border border-slate-600">FALSE</td>
                        }                         
                    </tr> 
                    <tr>                    
                        <td className="px-6 py-2 border border-slate-600">enableWeb3 =  De MORALIS</td>
                        {(enableWeb3)
                            ?   <td className="px-6 py-2 text-yellow-300 bg-green-800 border border-slate-600">TRUE</td>
                            :   <td className="px-6 py-2 text-white bg-red-600 border border-slate-600">FALSE</td>
                        }                         
                    </tr>     
                    <tr>                    
                        <td className="px-6 py-2 border border-slate-600">boolIdSpondorParamURL = 
                            Indica si Existe o No Existe el Id Sponsor tomado de la URL 
                            Si existe se preguntara si esta conectado o no
                            Si no existe se mostrar un mensaje que indicara que hay un Error en la URL y se tendra que redirigir a una nueva Pag para Loguearse.
                        </td>
                        {(props.boolIdSpondorParamURL)
                            ?   <td className="px-6 py-2 text-yellow-300 bg-green-800 border border-slate-600">TRUE</td>
                            :   <td className="px-6 py-2 text-white bg-red-600 border border-slate-600">FALSE</td>
                        }                         
                    </tr>  
                    <tr>                    
                        <td className="px-6 py-2 border border-slate-600">boolValidatLongUsername</td>
                        {(props.boolValidatLongUsername)
                            ?   <td className="px-6 py-2 text-yellow-300 bg-green-800 border border-slate-600">TRUE</td>
                            :   <td className="px-6 py-2 text-white bg-red-600 border border-slate-600">FALSE</td>
                        }                         
                    </tr> 
                    <tr>                    
                        <td className="px-6 py-2 border border-slate-600">C2SeccIdSponsor  =  boolSeccValidarOCambiarIdSponsor</td>
                        {(props.boolSeccValidarOCambiarIdSponsor)
                            ?   <td className="px-6 py-2 text-yellow-300 bg-green-800 border border-slate-600">TRUE</td>
                            :   <td className="px-6 py-2 text-white bg-red-600 border border-slate-600">FALSE</td>
                        }                         
                    </tr> 
                    <tr>                    
                        <td className="px-6 py-2 border border-slate-600">C2SeccIdSponsor  =  boolMostrarOModfIdSponsor</td>
                        {(props.boolMostrarOModfIdSponsor)
                            ?   <td className="px-6 py-2 text-yellow-300 bg-green-800 border border-slate-600">TRUE</td>
                            :   <td className="px-6 py-2 text-white bg-red-600 border border-slate-600">FALSE</td>
                        }                         
                    </tr>    
                    <tr>                    
                        <td className="px-6 py-2 border border-slate-600">C2SeccIdSponsor  =  boolSpinningOIngreseIdSponsorInput</td>
                        {(props.boolSpinningOIngreseIdSponsorInput)
                            ?   <td className="px-6 py-2 text-yellow-300 bg-green-800 border border-slate-600">TRUE</td>
                            :   <td className="px-6 py-2 text-white bg-red-600 border border-slate-600">FALSE</td>
                        }                         
                    </tr>    
                    <tr>                    
                        <td className="px-6 py-2 border border-slate-600">C2SeccIdSponsor  =  boolTamInputIdSponsor8Let</td>
                        {(props.boolTamInputIdSponsor8Let)
                            ?   <td className="px-6 py-2 text-yellow-300 bg-green-800 border border-slate-600">TRUE</td>
                            :   <td className="px-6 py-2 text-white bg-red-600 border border-slate-600">FALSE</td>
                        }                         
                    </tr> 
                    <tr>                    
                        <td className="px-6 py-2 border border-slate-600">C2SeccIdSponsor  =  mostrarSeccBoolUsernameInput</td>
                        {(props.mostrarSeccBoolUsernameInput)
                            ?   <td className="px-6 py-2 text-yellow-300 bg-green-800 border border-slate-600">TRUE</td>
                            :   <td className="px-6 py-2 text-white bg-red-600 border border-slate-600">FALSE</td>
                        }                         
                    </tr>  
                    <tr>                    
                        <td className="px-6 py-2 border border-slate-600">C2SeccIdSponsor  =  userNameNew</td>
                        <td className="px-6 py-2 border border-slate-600">{ props.userNameNew }</td>                        
                    </tr>  
                    <tr>                    
                        <td className="px-6 py-2 border border-slate-600">C2SeccIdSponsor  =  boolBotonValidarUser</td>
                        {(props.boolBotonValidarUser)
                            ?   <td className="px-6 py-2 text-yellow-300 bg-green-800 border border-slate-600">TRUE</td>
                            :   <td className="px-6 py-2 text-white bg-red-600 border border-slate-600">FALSE</td>
                        }                         
                    </tr>  
                    <tr>                    
                        <td className="px-6 py-2 border border-slate-600">C2SeccIdSponsor  =  boolSpinningOIngreseNewUsernameInput</td>
                        {(props.boolSpinningOIngreseNewUsernameInput)
                            ?   <td className="px-6 py-2 text-yellow-300 bg-green-800 border border-slate-600">TRUE</td>
                            :   <td className="px-6 py-2 text-white bg-red-600 border border-slate-600">FALSE</td>
                        }                         
                    </tr>
                    <tr>                    
                        <td className="px-6 py-2 border border-slate-600">C2SeccIdSponsor  =  mostrarBoolUsernameBDD</td>
                        {(props.mostrarBoolUsernameBDD)
                            ?   <td className="px-6 py-2 text-yellow-300 bg-green-800 border border-slate-600">TRUE</td>
                            :   <td className="px-6 py-2 text-white bg-red-600 border border-slate-600">FALSE</td>
                        }                         
                    </tr>
                    <tr>                    
                        <td className="px-6 py-2 border border-slate-600">C2SeccIdSponsor  =  mostrarSeccBoolButtonRegistrar</td>
                        {(props.mostrarSeccBoolButtonRegistrar)
                            ?   <td className="px-6 py-2 text-yellow-300 bg-green-800 border border-slate-600">TRUE</td>
                            :   <td className="px-6 py-2 text-white bg-red-600 border border-slate-600">FALSE</td>
                        }                         
                    </tr>
                    <tr>                    
                        <td className="px-6 py-2 border border-slate-600">MainDC  =  boolAccesoAPublicidad</td>
                        {(props.boolAccesoAPublicidad)
                            ?   <td className="px-6 py-2 text-yellow-300 bg-green-800 border border-slate-600">TRUE</td>
                            :   <td className="px-6 py-2 text-white bg-red-600 border border-slate-600">FALSE</td>
                        }                         
                    </tr>

                </tbody>                                
            </table>

            
           

        </div>
  )
}

 
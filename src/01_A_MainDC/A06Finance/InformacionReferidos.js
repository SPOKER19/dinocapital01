import React from 'react';
import { FormattedMessage } from 'react-intl';
import PublicidadKino01 from "../../03_Imagenes/Publicidad/publicidad_Kino_01.png";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { CuadroMisReferidos } from './CuadroMisReferidos';
import { UsuarioConMasReferidos } from './UsuarioConMasReferidos';


export const InformacionReferidos = (props) => {
  
 
  return (
    <div className='z-0 flex flex-wrap items-center w-full h-auto p-1 overflow-hidden lg:justify-around'>
            
            {/* cuadro # 01 */}
            <div className='flex items-center justify-center w-full p-3 bg-gradient-to-tr from-gray-800 to-teal-600 hover:bg-blue-gray-800 sm:w-1/2 xl:flex-1 '>   
                  <div className='flex flex-col items-center justify-center w-full h-96'>

                    <div className='mb-10 text-xl font-semibold underline'>
                        <FormattedMessage id="Mi Link de Referido" /> 
                    </div>
                    <div className='items-center justify-center w-full input-group'>                       
                        <div className='items-center justify-center px-2 pt-2 text-2xl'>
                          <ion-icon name="people-outline"></ion-icon>
                        </div> 
                        <div className='overflow-hidden bg-gradient-to-tr from-gray-800 to-gray-900 text-lg mx-0.5 px-3'>
                            {(props.userActual)
                              ?  props.userActual.attributes.LinkReferido 
                              :  ""                                        
                            }                             
                        </div>
                        <div className='items-center justify-center px-2 pt-2 text-2xl'>
                            <CopyToClipboard    text={(props.userActual)
                                                  ?  props.userActual.attributes.LinkReferido 
                                                  :  ""                                        
                                                }                                                           
                                                onCopy={props.mostrarMensjCopiado}
                            >                                           
                                
                                        <ion-icon name="documents-outline"></ion-icon>                                  
                            </CopyToClipboard> 
                        </div>                                         
                    </div> 

                  </div> 
            </div>
            {/* cuadro # 02 */}
            <div className='flex items-center justify-center w-full p-3 bg-gradient-to-tr from-gray-800 to-teal-600 hover:bg-blue-gray-800 sm:w-1/2 xl:flex-1 '>   
                  <div className='flex flex-col items-center justify-center w-full h-96'>
                    <CuadroMisReferidos   userActual = { props.userActual }
                                          dataMisReferidosBDD = { props.dataMisReferidosBDD }
                    />
                  </div>  
            </div>
            {/* cuadro # 03 */}
            <div className='flex items-center justify-center w-full p-3 bg-gradient-to-tr from-gray-800 to-teal-600 hover:bg-blue-gray-800 sm:w-1/2 xl:flex-1 '>   
                  <div className='flex flex-col items-center justify-center w-full h-96'>
                    <UsuarioConMasReferidos   userActual = { props.userActual }
                                              totalDataUsuariosRegistrados = { props.totalDataUsuariosRegistrados } 
                                              arrayConMejoresPatrocinadores = { props.arrayConMejoresPatrocinadores }      
                                              fxMostrarMejoresPatrocinadores = { props.fxMostrarMejoresPatrocinadores }              
                    />
                  </div>
            </div>
            {/* cuadro # 04 */}
            <div className='flex items-center self-stretch justify-center w-full p-3 bg-gradient-to-tr from-gray-800 to-teal-600 hover:bg-blue-gray-800 sm:w-1/2 xl:flex-1 '>                  
                  <div className='flex flex-col items-center justify-center object-cover w-full bg-center bg-cover'>
                      <img    src={ PublicidadKino01 } 
                              className="w-80 h-96"
                              alt='LogoForex'/>                                                
                  </div>     
            </div>       
       
        </div>
        
       
      
  )
}

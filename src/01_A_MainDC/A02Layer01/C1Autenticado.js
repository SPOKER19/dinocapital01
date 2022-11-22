import React from 'react';

const identicon = require('identicon');


export const C1Autenticado = (props) => {

    //****** Conectando IDENTICON // Synchronous API  ******//           
        let identiconAddressidSponsorURL =(props.userActual) ? props.userActual.attributes.idSponsorUSER : "";;    
        const bufferIdSponsor = identicon.generateSync({ id: identiconAddressidSponsorURL , size: 50 });
        
        let identiconAddressUsername = (props.userActual) ? props.userActual.attributes.username : "";    
        const bufferUsername = identicon.generateSync({ id: identiconAddressUsername , size: 50 }); 
    //**************************************************** */ 

  return (
            <div className='relative'>
                <div className='absolute bg-pink-600 rounded-lg -inset-1 blur animate-tilt'></div>
                <figure className="relative flex flex-col items-center justify-center w-full p-3 text-center rounded-lg bg-gradient-to-b from-lime-800 to-teal-400">
                    
                    <blockquote className="py-3 mx-auto text-gray-800">                            
                        <p className="mt-2 font-light">Bienvenido:</p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center mb-5 space-x-3">                        
                        <img    src={bufferUsername} 
                                alt="Mi ID"
                        />
                        <div className='flex flex-col'>
                            <div className="font-medium text-center">
                                <div className="text-sm font-bold text-gray-800">{(props.userActual) ? props.userActual.attributes.username : ""}</div>  
                            </div>
                            <button className="p-1 mt-2 text-xs font-light text-white bg-red-600 rounded-lg"                                    
                                    onClick={ props.fxCerrarSesion }                                    
                            >
                                Close
                            </button>
                        </div>
                    </figcaption> 
                    
                    
                    <blockquote className="py-4 mx-auto mb-1 text-gray-800">                            
                        <p className="mt-2 font-light">El ID de su Patrocinador es:</p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center mb-5 space-x-3">                        
                        <img    src={bufferIdSponsor} 
                                alt="Id Sponsor"
                        /> 
                        <div className="space-y-0.5 font-medium text-left">
                            <div className="text-sm font-bold text-gray-800">{(props.userActual) ? props.userActual.attributes.idSponsorUSER : ""}</div>                                
                        </div>
                    </figcaption>  
                                                            
                </figure>
            </div>

  )
}


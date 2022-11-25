import React from 'react';
import * as CompFxGlobales  from '../../05_Fx/CompFxGlobales';

const identicon = require('identicon');


export const CuadroMisReferidos = (props) => {   
    
   
    const crearTablaMisReferidos = () => {       
        return  (props.dataMisReferidosBDD.sort((a, b) => b.attributes.createdAt - a.attributes.createdAt)).map((prevMisReferidos, index) => (
                <td     className="flex py-3 w-full"
                        key={index} 
                >                    
                    <div className="flex items-center space-x-3 w-full">
                        <div className="avatar">
                            <div className='flex flex-col items-center justify-center h-full w-11 xs:w-12 bg-gradient-to-l from-deep-orange-300 to-green-500'>
                                <figcaption className="flex items-center justify-center space-x-3">                        
                                    <img    src={identicon.generateSync({ id: prevMisReferidos.attributes.usernameDU , size: 40 })} 
                                            alt="IdSponsorURL"
                                    />
                                </figcaption>
                            </div>
                        </div>
                        <div className='flex flex-col xs:flex-row items-center justify-center w-full'>
                            <div className='flex flex-col items-center justify-center w-full'>
                                <div className="font-bold">{prevMisReferidos.attributes.usernameDU}</div>                                
                                <div className='flex flex-row items-center justify-center w-full'>
                                    <img    className='w-5 h-5 mr-6' 
                                            alt= {"Banderas"}
                                            src= {CompFxGlobales.fxObtenerBanderaIdiomaSelect(prevMisReferidos.attributes.Idioma_Orig)}                      
                                    /> 
                                    <div className="text-sm opacity-50">Lenguaje</div> 
                                </div>
                            </div>
                            <div className="flex items-center justify-center font-bold w-full">
                                {CompFxGlobales.fxTransfUnixADateYMD(CompFxGlobales.fxTransfDateYMDaUnix(prevMisReferidos.attributes.createdAt))}
                            </div> 
                        </div>
                    </div>                       
                </td> 
            )) 
                           
    } 

       
    return (
        <div className='flex flex-col w-full overflow-y-auto'>
            <div className="w-full">
                <table className="table w-full">
                    {/* -- head -- */}
                    <thead className="w-full">
                        <tr>                            
                            <th>Mis Ultimos Referidos</th>                            
                        </tr>
                    </thead>
                    {/* -- tbody -- */}
                    <tbody className="w-full">
                        <tr className="w-full">      
                            {(props.dataMisReferidosBDD && props.dataMisReferidosBDD.length !== 0)
                                ? crearTablaMisReferidos()
                                :   <td>
                                        " No posee Referidos "  
                                    </td>                          
                            } 
                        </tr>                                           
                    </tbody>
                    {/* -- foot -- */}
                    <tfoot>
                        <tr>                            
                            <th>Mis Ultimos Referidos</th>                            
                        </tr>
                    </tfoot>                
                </table>
            </div>
        </div>
    )
}


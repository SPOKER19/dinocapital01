import React from 'react';
import { FormattedMessage } from 'react-intl';
import * as CompFxGlobales  from '../../05_Fx/CompFxGlobales';

const identicon = require('identicon');


export const CuadroMisReferidos = (props) => {   
    
   
    const crearTablaMisReferidos = () => {       
        return  ((props.dataMisReferidosBDD.sort((a, b) => b.attributes.createdAt - a.attributes.createdAt)).slice(0,5)).map((prevMisReferidos, index) => (
                <td     className="flex py-1 w-full"
                        key={index} 
                >                   
                    <div className="flex items-center xs:space-x-3 w-full">
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
                <table className="table w-full h-full ">
                    {/* -- head -- */}
                    <thead className="items-center justify-center w-full">
                        <tr className=''>                            
                            <th className='flex items-center justify-center'>
                                <span className='text-2xl font-semibold mr-5 text-yellow-300'><ion-icon name="ribbon-outline"></ion-icon></span>
                                <span className='text-xs xs:text-base overflow-x-hidden'>
                                    <FormattedMessage id="MIS ULTIMOS 5 REFERIDOS" /> 
                                </span>                                
                            </th>                            
                        </tr>                       
                    </thead>                   
                    {/* -- tbody -- */}
                    <tbody className="w-full h-full">
                        <tr className="w-full h-full">      
                            {(props.dataMisReferidosBDD && props.dataMisReferidosBDD.length !== 0)
                                ? crearTablaMisReferidos()
                                :   <td>
                                        " No posee Referidos / It does not have referred"  
                                    </td>                          
                            } 
                        </tr>                                           
                    </tbody>
                    {/* -- foot -- */}
                    <tfoot className="items-center justify-center w-full">
                        <tr className=''>                            
                            <th className='flex items-center justify-center'>
                                <span className='text-2xl font-semibold mr-5 text-yellow-300'><ion-icon name="ribbon-outline"></ion-icon></span>
                                <span className='text-xs xs:text-base overflow-x-hidden'>
                                    <FormattedMessage id="MIS ULTIMOS 5 REFERIDOS" /> 
                                </span>                                
                            </th>                            
                        </tr> 
                    </tfoot>                
                </table>
            </div>
        </div>
    )
}


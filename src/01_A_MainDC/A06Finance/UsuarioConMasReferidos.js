import React from 'react';
import { FormattedMessage } from 'react-intl';
// import * as CompFxGlobales  from '../../05_Fx/CompFxGlobales';

const identicon = require('identicon');


export const UsuarioConMasReferidos = (props) => {   
    
   
    const crearTablaMejoresSponsor = () => {    
          
          return  ((Object.entries(props.arrayConMejoresPatrocinadores).sort((a, b) => b[1] - a[1])).slice(0,5)).map((prevMisReferidos, index) => (
                <td     className="flex w-full py-1"
                        key={index} 
                >
                    <div className="flex items-center w-full space-x-3">
                        <div className="avatar">
                            <div className='flex flex-col items-center justify-center h-full w-11 xs:w-12 bg-gradient-to-l from-deep-orange-300 to-green-500'>
                                <figcaption className="flex items-center justify-center space-x-3">                        
                                    <img    src={identicon.generateSync({ id: prevMisReferidos[0] , size: 40 })} 
                                            alt="IdSponsorURL"
                                    />
                                </figcaption> 
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-center w-full xs:flex-row'>
                            <div className='flex flex-col items-center justify-center w-full'>
                                <div className="font-bold">{prevMisReferidos[0]}</div>  
                            </div>
                            <div className="flex items-center justify-center w-full font-bold">
                                {prevMisReferidos[1]}
                            </div> 
                        </div>
                    </div>        
                                          
                </td> 
            ))  
                           
    } 

       
    return (
        <div className='flex flex-col w-full overflow-y-auto h-96'>
            <div className="w-full">
                <table className="table w-full">
                    {/* -- head -- */}
                    <thead className="items-center justify-center w-full">
                        <tr className=''>                            
                            <th className='flex items-center justify-center'>
                                <span className='mr-5 text-2xl font-semibold text-light-blue-400'><ion-icon name="diamond-outline"></ion-icon></span>
                                <span className='overflow-x-hidden text-xs xs:text-base'>
                                    <FormattedMessage id="TOP 5 PATROCINADORES" />
                                </span>                                
                            </th>                            
                        </tr>                       
                    </thead>
                    {/* -- tbody -- */}
                    <tbody className="w-full">
                        <tr className="w-full">      
                            {(props.arrayConMejoresPatrocinadores)
                                ? crearTablaMejoresSponsor()
                                :   <td>
                                        " No hay Patrocinios Todavia / Without sponsorships "  
                                    </td>                          
                            }                            
                        </tr>                                           
                    </tbody>
                    {/* -- foot -- */}
                    <tfoot>
                        <tr>                            
                            <th className='flex items-center justify-center'>
                                <span className='mr-5 text-2xl font-semibold text-light-blue-400'><ion-icon name="diamond-outline"></ion-icon></span>
                                <span className='overflow-x-hidden text-xs xs:text-base'>
                                    <FormattedMessage id="TOP 5 PATROCINADORES" />
                                </span>                                  
                            </th>                        
                        </tr>
                    </tfoot>                
                </table>
            </div>
        </div>
    )
}




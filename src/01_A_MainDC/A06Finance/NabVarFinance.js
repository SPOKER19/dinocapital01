import React from 'react';
import { FormattedMessage } from 'react-intl';
import * as CompFxGlobales  from '../../05_Fx/CompFxGlobales';
//import { Link } from 'react-router-dom';

export const NabVarFinance = (props) => {

  const fxProximamente = () => {
    CompFxGlobales.fxMostrarAlerta("info", "Game THE FARM", "Proximamente / Coming Soon !!!!!");
  }
 
  return (
      <div className='flex flex-wrap items-center justify-around w-full p-1 pt-1 space-y-1.5 lg:space-y-0'>
            {/* cuadro # 01 */}
            <div className='flex flex-row items-center justify-center w-full rounded-lg md:w-1/2 px-1.5 lg:px-0 lg:w-1/5 '> 
                  <div className='flex items-center justify-center w-1/3 h-12 bg-red-600 rounded-l-full'>
                    <span className='pt-2 text-2xl font-bold'>                    
                      <ion-icon name="people-circle-outline"></ion-icon>
                    </span>              
                  </div>
                  <div className='flex flex-col items-center justify-center w-full h-12 text-gray-800 bg-gray-100 hover:bg-slate-300'>
                      <div className='flex flex-col items-center justify-center xs:flex-row lg:ml-2'>
                        <div className='mr-2'><FormattedMessage id="Total" /></div>    
                        <div> <FormattedMessage id="Usuarios" /></div> 
                      </div>
                  </div>
                  <div className='flex items-center justify-center w-full h-12 text-gray-800 bg-gray-50 hover:bg-slate-300'>
                      <span className='text-xl font-semibold'>
                        { props.totalUsuariosRegistrados }
                      </span>
                  </div>
            </div>
            {/* cuadro # 02 */}
            <div className='flex flex-row items-center justify-center w-full rounded-lg px-1.5 lg:px-0 md:w-1/2 lg:w-1/5 '> 
                  <div className='flex items-center justify-center w-1/3 h-12 bg-indigo-600 rounded-l-full'>
                    <span className='pt-2 text-2xl font-bold'>                    
                      <ion-icon name="people-outline"></ion-icon>
                    </span>              
                  </div>
                  <div className='flex flex-col items-center justify-center w-full h-12 text-gray-800 bg-gray-100 hover:bg-slate-300'>
                      <div className='flex flex-col items-center justify-center xs:flex-row lg:ml-2'>
                        <div className='mr-2'><FormattedMessage id="Mis" /> </div>    
                        <div> <FormattedMessage id="Referidos" /></div> 
                      </div>
                  </div>
                  <div className='flex items-center justify-center w-full h-12 text-gray-800 bg-gray-50 hover:bg-slate-300'>
                      <span className='text-xl font-semibold'>
                        { props.misReferidosBDD }
                      </span>
                  </div>
            </div>
            {/* cuadro # 03 */}
            <div className='flex flex-row items-center justify-center w-full rounded-lg px-1.5 lg:px-0 md:w-1/2 lg:w-1/5 '> 
                  <div className='flex items-center justify-center w-1/3 h-12 bg-yellow-300 rounded-l-full'>
                    <span className='pt-2 text-2xl font-bold text-gray-800'>                    
                      <ion-icon name="logo-usd"></ion-icon>
                    </span>              
                  </div>
                  <div className='flex flex-col items-center justify-center w-full h-12 text-gray-800 bg-gray-100 hover:bg-slate-300'>
                      <div className='flex flex-col items-center justify-center xs:flex-row lg:ml-2'>
                        <div className='mr-2'>Token </div>    
                        <div> DinoC:</div> 
                      </div>
                  </div>
                  <div className='flex items-center justify-center w-full h-12 text-gray-800 bg-gray-50 hover:bg-slate-300'>
                      <span className='text-xl font-semibold'>
                          0.02
                      </span>
                  </div>
            </div>
            {/* cuadro # 04 */}
            <div className='flex flex-row items-center justify-center w-full rounded-lg px-1.5 lg:px-0 md:w-1/2 lg:w-1/5 '> 
                  <div className='flex items-center justify-center w-1/3 h-12 bg-green-400 rounded-l-full'>
                    <span className='pt-2 text-2xl font-bold text-gray-800'>                    
                      <ion-icon name="diamond"></ion-icon>
                    </span>              
                  </div>
                  <div className='flex flex-col items-center justify-center w-full h-12 text-gray-800 bg-gray-100 hover:bg-slate-300'>
                      <div className='flex flex-col items-center justify-center xs:flex-row lg:ml-2'>
                        <div className='mr-2'>The </div>    
                        <div> Farm:</div> 
                      </div>
                  </div>
                  <div className='flex items-center justify-center w-full h-12 text-red-600 bg-yellow-200 cursor-pointer animate-pulse'>
                      <span   className='text-xl font-semibold '
                              onClick={fxProximamente}                      
                      >
                        Start
                      </span>
                  </div>
            </div>          
       
      </div>
      
  )
}

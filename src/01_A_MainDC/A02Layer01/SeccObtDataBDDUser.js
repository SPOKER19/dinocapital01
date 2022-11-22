import React from 'react';
import {Metamask, Menu} from '@web3uikit/icons'


export const SeccObtDataBDDUser = (props) => {
  
  return (
      <div className='relative flex flex-col items-center justify-center space-y-5'>
            
            <button className='bg-blue-800 text-gray-200 px-5 py-2.5 rounded-lg text-sm font-bold
                                hover:bg-amber-700 hover:text-blue-gray-900
                              '
                    onClick={props.fxValidateAndConnect}
            >
              <span className='flex flex-row justify-center items-center'>
                Connet 
                <Metamask className='border-2 border-transparent justify-center items-center text-4xl pt-1.5 pl-2.5'/>
              </span>             
              
            </button>   
            <button className='bg-purple-900 text-gray-200 px-5 py-2.5 rounded-lg text-sm font-bold
                                hover:bg-amber-700 hover:text-blue-gray-900
                              '
                    onClick={props.fxAuthWalletConnet}
            >
              <span className='flex flex-row justify-center items-center'>
                Connet WalletConnet
                <Menu className='border-2 border-transparent justify-center items-center text-4xl pt-1.5 pl-2.5'/>
              </span>  
            </button>    
      </div>               
  )
}


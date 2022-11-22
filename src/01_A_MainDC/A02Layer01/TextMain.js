import React from 'react';
import { FormattedMessage } from 'react-intl';

export const TextMain = () => {
  return (
            <div className='w-full md:w-1/2 xs:px-10 py-3'>
                <div className='w-full '>
                    <h1 className="text-2xl font-bold text-center justify-center text-white xs:text-3xl sm:text-4xl md:text-5xl  lg:text-6xl md:font-black ">                   
                        <span className='uppercase mr-1'>Dino</span>
                        <span className="text-yellow-300 uppercase">Capital</span>                       
                    </h1>
                </div>
                
                <h2 className="text-2xl font-bold text-center text-white md:font-bold xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl">                   
                <FormattedMessage id="InversionInteligente" />
                </h2>
                <div className='flex flex-col items-center justify-center sm:flex-row md:flex-col xl:flex-row'>
                    <h2 className="text-2xl font-semibold text-center text-yellow-300 xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:font-bold ">                   
                    <FormattedMessage id="AportandoValor" />
                    </h2>
                    <h2 className="text-2xl font-semibold text-center text-white sm:ml-2 xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:font-bold">                   
                    <FormattedMessage id="aNuestrosInversores" />
                    </h2>
                </div>                                
            </div>
  )
}

 
import React from 'react';
import { FormattedMessage } from 'react-intl';

import LogoDC from '../03_Imagenes/Logo/LogoDino-013.png';
import Twitter01 from '../03_Imagenes/LogoRRSS/twitter_001.png';
import Discord from '../03_Imagenes/LogoRRSS/Discord_logo_01.png';
import Instagram from '../03_Imagenes/LogoRRSS/Logo_Instagram.jpg';
import Facebook from '../03_Imagenes/LogoRRSS/Logo_Facebook.jpg';

export const A01Footer = (props) => {

    return (
    
        <footer className="flex flex-col items-center justify-end h-auto ">
            
            <div className="flex flex-col items-center justify-center w-full p-5 space-y-3 text-white bg-green-900 ">                
                <div className="w-16 rounded-full xs:w-20 sm:w-24 md:w-32 lg:w-36 bg-gradient-to-l from-green-400 to-yellow-300 ">
                    <img src={LogoDC} alt='Logo'/>
                </div>
                
                <ul className="flex flex-col items-center cursor-pointer xs:flex-row">
                        <li //onClick={() => fxObtenerNombre("Home") } 
                            className="inline-block mx-2 text-2xl font-black uppercase xs:tracking-widest xs:mx-4 sm:text-3xl md:mx-6 md:text-4xl xl:text-5xl">
                            <span className=''>Dino</span>
                            <span className="text-yellow-300 ">Capital</span>                                            
                        </li>                                    
                </ul>                    
            </div>

            <div className="flex flex-col items-center justify-center w-full p-5 space-y-3 text-white xs:p-10 bg-gradient-to-t from-gray-900 to-green-900">                
                <p className='w-full pt-5 pb-10 text-xl font-light text-center border-4 border-gray-800 md:w-3/4 lg:w-1/2 xs:text-2xl md:text-3xl bg-gradient-to-tl from-black to-black via-green-900 '>
                    <FormattedMessage id="QueremosQueNuestrosClientes" />
                    <br className='underline' />                  
                    <span className='ml-5 font-medium'>
                        <FormattedMessage id="TeInvitamosA" /> 
                        <br className='underline' />
                        <span className='text-yellow-500'><FormattedMessage id="LoMejorEstaPorVenir" /></span>. “
                    </span> 
                </p> 
                <ul className="flex flex-row items-end justify-end w-full md:w-3/4 lg:w-1/2 ">
                        <li className="text-base font-black xs:text-xl xs:tracking-widest">
                            <span className=''>CEO </span>
                            <span className=''>Dino</span>
                            <span className="text-yellow-300 ">Capital</span>                                            
                        </li>                                    
                </ul>                
            </div>

            {/* Logo y Nombre Empresa + RRSS */}            
            <div className='flex flex-col items-center w-full p-3 pb-10 text-xs text-center text-white bg-gradient-to-t from-black to-gray-900 xs:flex-row xs:justify-around sm:text-base'>
                               
                <div>
                    <ul className='flex flex-row space-x-10 space-y-8 xs:space-x-5 sm:space-x-20'>
                        <li className='flex flex-col items-center justify-center text-xs font-semibold cursor-pointer sm:text-base md:text-2xl'>
                            <img src={Instagram} alt='Logo' className='rounded-full w-14 md:w-20'/>
                            <span className='pt-1 duration-300 hover:text-green-300'>INSTAGRAM</span>
                        </li>
                        <li className='flex flex-col items-center justify-center text-xs font-semibold cursor-pointer sm:text-base md:text-2xl'>
                            <img src={Facebook} alt='Logo' className='border-2 border-blue-500 rounded-full w-14 md:w-20'/>
                            <span className='mt-1 duration-300 hover:text-green-300'>FACEBOOK</span>
                        </li>                    
                    </ul>   
                </div>

                <div>
                    <ul className='flex flex-row space-x-10 space-y-8 xs:space-x-5 sm:space-x-20'>
                        <li className='flex flex-col items-center justify-center text-xs font-semibold cursor-pointer sm:text-base md:text-2xl'>
                            <img src={Discord} alt='Logo' className='rounded-full w-14 md:w-20'/>
                            <span className='pt-1 duration-300 hover:text-green-300'>DISCORD</span>
                        </li>
                        <li className='flex flex-col items-center justify-center text-xs font-semibold cursor-pointer sm:text-base md:text-2xl'>
                            <img src={Twitter01} alt='Logo' className='border-2 border-blue-500 rounded-full w-14 md:w-20'/>
                            <span className='mt-1 duration-300 hover:text-green-300'>TWITTER</span>
                        </li>                    
                    </ul>
                </div>
                
            </div>
            

        </footer>
    
  )
}
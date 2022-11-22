import React, { useState, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import LogoBandera from '../../03_Imagenes/LogoBanderas/LogoBandera-08.png';
import { Link } from 'react-router-dom';


import BandEEUU from '../../03_Imagenes/Banderas/101_Bandera_EEUU_1.png';
import BandChin from '../../03_Imagenes/Banderas/102_Bandera_China_1.png';
import BandRus from '../../03_Imagenes/Banderas/103_Bandera_Rusia_1.png';
import BandSpanish from '../../03_Imagenes/Banderas/104_Bandera_Spanish_1.png';
import BandAlemania from '../../03_Imagenes/Banderas/105_Bandera_Alemania.png';
import BandCroatia from '../../03_Imagenes/Banderas/106_Bandera_Croacia.png';
import BandIndia from '../../03_Imagenes/Banderas/107_Bandera_India.png';
import BandEmiArabes from '../../03_Imagenes/Banderas/108_Bandera_Emiratos_Arabes.png';
import BandFrancia from '../../03_Imagenes/Banderas/109_Bandera_Francia.png';
import BandItalia from '../../03_Imagenes/Banderas/110_Bandera_Italia.png';
import BandIrlanda from '../../03_Imagenes/Banderas/111_Bandera_Irlanda.png';
import BandPortugal from '../../03_Imagenes/Banderas/112_Bandera_Portugal.png';





export const CompBanderas = (props) => {

    const [idiomas] = useState([        
        {lguaj: 'English', siglaIdioma: 'en', src: BandEEUU },
        {lguaj: 'Chinese', siglaIdioma: 'zh', src: BandChin },
        {lguaj: 'Russian', siglaIdioma: 'ru', src: BandRus },
        {lguaj: 'German', siglaIdioma: 'de', src: BandAlemania },
        {lguaj: 'Spanish', siglaIdioma: 'es', src: BandSpanish },
        {lguaj: 'Croatia', siglaIdioma: 'hr', src: BandCroatia },
        {lguaj: 'Hindi', siglaIdioma: 'hi', src: BandIndia },
        {lguaj: 'Arab', siglaIdioma: 'ar', src: BandEmiArabes },
        {lguaj: 'french', siglaIdioma: 'fr-CH', src: BandFrancia },
        {lguaj: 'Italian', siglaIdioma: 'it-CH', src: BandItalia },
        {lguaj: 'Irish ', siglaIdioma: 'ga-IE', src: BandIrlanda },
        {lguaj: 'Portuguese', siglaIdioma: 'pt-BR', src: BandPortugal },       
    ]);

    
    const crearBanderasDinamicas = () => {
       
        return idiomas.map(prevBanderas => (
            <div className="py-1"
                key={prevBanderas.siglaIdioma}
                onClick={()=> props.toggleIdiomas(prevBanderas.siglaIdioma)} 
            >                                                                
                <Menu.Item > 
                        {({ active }) => (                                     
                                <Link   to={"/"}
                                        className={`flex items-center px-4 py-1 text-sm 
                                        ${active ? "bg-indigo-500 text-white" : "text-gray-700"} 
                                        `}
                                > 
                                        <img    className='w-5 h-5 mr-6' 
                                                alt= {prevBanderas.lguaj}
                                                src= {prevBanderas.src}                      
                                        />                                         
                                        {prevBanderas.lguaj} 
                                </Link>
                        )}
                </Menu.Item>
            </div>            
            
        ));
        
    }

       
  return (
        <div>
                <Menu as="div" className='relative z-50 flex items-center justify-center'>

                    {({open}) =>(

                        <Fragment>

                            <Menu.Button    className="w-6 rounded-full xs:w-7 bg-gradient-to-l from-yellow-400 to-yellow-300 ">
                                    <img src={LogoBandera} alt='LogoBandera'/>
                            </Menu.Button>

                            <Transition 
                                show={open}
                                enter="transition duration-400 ease-out"                      
                                enterFrom="transform scale-15 opacity-30"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-500 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Menu.Items className="absolute right-0 mt-8 origin-top-right bg-gray-300 divide-y divide-gray-300 rounded shadow-lg w-44 ring-1 ring-black ring-opacity-5 xs:-mr-3" static

                                >

                                     {crearBanderasDinamicas()}

                                </Menu.Items>
                                
                            </Transition> 
                            
                        </Fragment>
                    )}                           

                </Menu>
        </div>
  )
}

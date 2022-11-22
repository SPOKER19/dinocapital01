import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Menu } from '@headlessui/react';
import { Link } from 'react-router-dom';
import LogoDc from "../../03_Imagenes/Logo/LOGO_DINO.png";
import { CompBanderas } from './CompBanderas';
import { ConnectButton } from '@web3uikit/web3';
import { useMoralis  } from 'react-moralis';
import * as CompFxGlobales from "../../05_Fx/CompFxGlobales";
import { A01Spinner } from '../../06_Componentes/Spinner/A01Spinner';
//import { NabVarFinance } from './NabVarFinance';


export const NavBar = (props) => {

    const { isAuthenticated, logout, isAuthenticating, user } = useMoralis();    
    
   
    let Links = [
        {name: "HOME", link: "/" },
        {name: "WhitePaper", link: "/A01WithePaper" },         
    ];     
    
    return ( 
        <>
        <div className='flex flex-col'>
            <div className='fixed top-0 left-0 z-50 flex flex-row w-full px-2 py-2 bg-gray-800 xs:px-5'>

                    <Menu as='div'  className="relative z-0 flex items-center justify-between flex-1">
                    
                    {/* Logo y Nombre Empresa */}
                            <div className="flex flex-row items-center text-white">                              
                                <Link   to={"/"}                                            
                                    className=""
                                > 
                                    <div className="w-10 rounded-full bg-gradient-to-l from-green-400 to-yellow-300 xs:w-12 ">
                                            <img src={ LogoDc } alt='Logo'/>                            
                                    </div>
                                </Link> 
                                    
                                <Link   to={"/"}                                            
                                    className=""
                                > 
                                    <ul className="flex flex-col items-center cursor-pointer"> 
                                            <li className="inline-block mx-2 text-base font-black hover:text-green-200 xs:tracking-widest xs:text-lg xs:mx-4 md:text-3xl md:mx-6 ">
                                                <span className=''>Dino</span>
                                                <span className="ml-1 text-yellow-300">Capital</span>                                            
                                            </li>
                                            <li><span className="mx-2 text-xs">{ props.tamPantalla } </span> 
                                                <span className="text-xs">{ props.windowWidth } </span> 
                                            </li>                      
                                    </ul>
                                </Link>       
                            </div>

                        {/* Boton de Menu */} 
                            {(isAuthenticating)
                                ?                                      
                                        <A01Spinner />
                                    
                                :   <Menu.Button >                                       
                                        <div className="flex flex-col items-center justify-center px-2 py-1 text-2xl text-indigo-100 bg-gray-900 cursor-pointer md:hidden hover:bg-red-600 rounded-xl ">
                                                <ion-icon name={"reorder-four-outline"}></ion-icon>  
                                        </div>                                      
                                    </Menu.Button>                    
                            }
                        
                        {/* Lado Derecho Nav-Bar */}   
                                    
                            <Menu.Items className={`                         
                                absolute flex flex-col text-center top-14 -right-1 z-20  w-full border border-green-200                          
                                xs:w-1/2 xs:-right-4
                                sm:w-1/2                                             
                                md:hidden
                            
                            `}>                
                                <ul className="w-full text-base text-center cursor-pointer md:flex md:space-x-3 md:items-end md:justify-end">   
                                    {   Links.map((acceso, index) => { 
                                                return(   
                                                    <Menu.Item key={index}
                                                    >
                                                        <li className="px-1 py-3 text-sm text-indigo-100 bg-gray-800 hover:text-yellow-300 hover:bg-gray-700 md:p-2 md:text-xs md:hover:bg-transparent lg:p-3 lg:text-base">                                
                                                            <Link   to={acceso.link}                                            
                                                                    className="px-2 py-1 xs:px-12 md:px-0 "
                                                            > 
                                                                {acceso.name} 
                                                            </Link>                                                                       
                                                        </li>  
                                                    </Menu.Item>                 
                                                )                      
                                        })                            
                                    }    
                                    
                                    {(!isAuthenticated)
                                        ?   <button     key={"conect"} 
                                                        className="w-full p-3 text-sm font-bold text-black uppercase duration-500 bg-yellow-200 border border-gray-800 rounded md:text-xs md:w-auto md:p-2 lg:p-3 lg:text-base hover:bg-green-300 hover:text-green-800"
                                                        // onClick={()=> authenticate()}
                                                        onClick={()=> props.fxAuthWalletConnet()}
                                            >
                                                        <Menu.Item>
                                                            <Link   to={''}  
                                                                    className="px-4 py-1 xs:px-12 md:px-0 "                               
                                                            >
                                                                <FormattedMessage id="Conectarse" />
                                                            </Link>
                                                        </Menu.Item>
                                            </button>   
                                        :   <button     key={"conect"} 
                                                        className="flex flex-col w-full px-1 py-3 text-xs font-bold text-black duration-500 bg-teal-400 border border-gray-800 rounded md:w-auto md:p-2 lg:p-3 lg:text-base hover:bg-green-300 hover:text-green-800"                                            
                                            >                                           
                                                <Menu.Item>
                                                    <div className='flex flex-col items-center justify-center w-full'>
                                                        <span className='w-full'>
                                                            {CompFxGlobales.fxMostrarAddFormaIncongnita((user) ? user.attributes.accounts[0] : "") }  
                                                        </span>                                        
                                                        <span   className='w-1/4 px-2 py-1 mx-auto mt-3 font-light text-white bg-red-600'
                                                                onClick={()=> logout()}
                                                        >
                                                            logout
                                                        </span>   
                                                    </div>
                                                </Menu.Item>                                            
                                            </button>   
                                    }
                                </ul>
                            </Menu.Items>   

                    </Menu>

                    {/* MENU TAMAÑO MD */}
                        <div className={`hidden                         
                                md:flex md:flex-row md:items-center md:text-center md:justify-center md:w-full 
                        `}>              
                            <ul className="md:w-full md:text-base md:text-center md:cursor-pointer md:flex md:space-x-3 md:items-end md:justify-end ">   
                                {
                                    Links.map((acceso, index) => { 
                                        return(   
                                        
                                            <li     key={index}                                             
                                                    className="md:text-indigo-100 md:bg-gray-800 md:hover:text-yellow-300 md:hover:bg-gray-700 md:p-2 md:text-xs md:hover:bg-transparent lg:p-3 lg:text-base">                                
                                                <Link   to={acceso.link}                                            
                                                        className="md:px-0"
                                                > 
                                                    {acceso.name} 
                                                </Link>                                                                       
                                            </li>  
                                                    
                                        )                      
                                    })
                                }                          
                                {(isAuthenticated)
                                    ?  <ConnectButton />               
                                    :   ""
                                }  

                            {/*  <ConnectButton />  */}

                            </ul>
                        </div> 
                    {(!isAuthenticated)
                        ?   <div className="flex items-center justify-center px-2">
                                <CompBanderas  toggleIdiomas = { props.toggleIdiomas } />                        
                            </div>                
                        :   ""
                    }
                
            </div>

            {/* {(isAuthenticated) &&
                <div className='pt-16 md:pt-20'>
                    <NabVarFinance />
                </div>
            }  */}

        </div>   
        </>
    )
}

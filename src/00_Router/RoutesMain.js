import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useMoralis  } from 'react-moralis';
import ReactGA from 'react-ga';
import { NavBar } from '../01_A_MainDC/A01NavBar/NavBar';
import { MainDC } from '../01_A_MainDC/MainDC';
import { A01WithePaper } from "../01_B_WhitePaper/A01WithePaper"
import { Error404 } from '../06_Componentes/PagesError404.js/Error404';
import { A01Footer } from '../01_Z_Footer/A01Footer';



export const RoutesMain = (props) => {    

    const [ URLMainOrigin, setURLMainOrigin ] = useState("");  

    const {authenticate, isAuthenticated, isWeb3Enabled, enableWeb3 } = useMoralis();

    const fxAuthWalletConnet = async () => {
        const userMovil = authenticate({
            provider: "walletConnect",
            chainId: 56,
            mobileLinks: [
                "rainbow",
                "metamask",
                "argent",
                "trust",
                "imtoken",
                "pillar",
              ], 
            signingMessage: "Welcome!!!!",
        });
        console.log("datos Usuario = ", userMovil);       
    }; 
   
    useEffect(() => {
        ReactGA.initialize('G-98WF6TXZ3R');
        ReactGA.pageview(window.location.pathname + window.location.search);       
    }, []); 

    useEffect(() => {  
        if(window.location){
                let URLMain = new URL(window.location);
                //console.log("URLMain = ", URLMain.origin);   
                setURLMainOrigin(URLMain.origin);         
        }else{
             //console.log("*** NO EXISTE window.location");
        }
     }, []);

     useEffect(() => {
        if(!isWeb3Enabled && isAuthenticated){
            enableWeb3({
                provider: "walletConnect",
                chainId: 56,
                signingMessage: "Welcome Ready!!!!",
            });
            console.log("web3 Activate!!!!");
        }else{
            
        }
    }, [isWeb3Enabled, isAuthenticated, enableWeb3]); 

    return (

        <BrowserRouter>            
            <div className='flex flex-col w-full min-h-screen text-gray-100 bg-gray-800'>
            
                <NavBar     langSelected = {props.langSelected}
                            setCurrentLocale = {props.setCurrentLocale}  
                            toggleIdiomas = { props.toggleIdiomas } 
                            windowWidth = { props.windowWidth } 
                            tamPantalla = { props.tamPantalla }
                            trueFalseTamanoMD = { props.trueFalseTamanoMD }
                            setTrueFalseTamanoMD = { props.setTrueFalseTamanoMD } 
                            fxAuthWalletConnet = { fxAuthWalletConnet }  
                            /******/
                            userActual = { props.userActual }                                                                    
                            borrarDatosMemoria = { props.borrarDatosMemoria } 
                            URLMainOrigin = { URLMainOrigin }                              
                />  

                <Routes>
                    <Route exact path="/" element= {    <MainDC langSelected = {props.langSelected}
                                                                setCurrentLocale = {props.setCurrentLocale}  
                                                                toggleIdiomas = { props.toggleIdiomas } 
                                                                windowWidth = { props.windowWidth } 
                                                                tamPantalla = { props.tamPantalla }
                                                                trueFalseTamanoMD = { props.trueFalseTamanoMD }
                                                                setTrueFalseTamanoMD = { props.setTrueFalseTamanoMD }                                                                     
                                                                    /******/
                                                                userActual = { props.userActual }                                                                    
                                                                borrarDatosMemoria = { props.borrarDatosMemoria } 
                                                                URLMainOrigin = { URLMainOrigin }  
                                                                fxAuthWalletConnet = { fxAuthWalletConnet }                                                                  
                                                        /> 
                                                    } 
                    />

                    <Route exact path="/:id" element= {    <MainDC  langSelected = {props.langSelected}
                                                                    setCurrentLocale = {props.setCurrentLocale}  
                                                                    toggleIdiomas = { props.toggleIdiomas } 
                                                                    windowWidth = { props.windowWidth } 
                                                                    tamPantalla = { props.tamPantalla } 
                                                                    trueFalseTamanoMD = { props.trueFalseTamanoMD }
                                                                    setTrueFalseTamanoMD = { props.setTrueFalseTamanoMD }                                                                    
                                                                    /******/
                                                                    userActual = { props.userActual }                                                                    
                                                                    borrarDatosMemoria = { props.borrarDatosMemoria }  
                                                                    URLMainOrigin = { URLMainOrigin }  
                                                                    fxAuthWalletConnet = { fxAuthWalletConnet }                                                                   
                                                            /> 
                                                    } 
                    />

                    <Route exact path="/A01WithePaper" element=  {  <A01WithePaper                          
                                                                    />
                                                                } 
                    /> 

                    <Route  path="*" element=   {   <Error404 />
                                                } 
                    /> 
                    
                </Routes>  

                <A01Footer />

            </div>         
        </BrowserRouter>              

    )
}
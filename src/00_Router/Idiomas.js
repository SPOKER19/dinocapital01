import React, {useState, useEffect} from 'react';
import { ConnectMetaM } from './ConnectMetaM';
import { IntlProvider } from 'react-intl';
import { AllMessages } from '../04_Translations/AllMessages';
import Cookies from 'universal-cookie';

const cookies = new Cookies(); 


export const Idiomas = () => {   
      

      if(cookies.get("ckIdiomaActual") === undefined){
            cookies.set('ckIdiomaActual', "en", {sameSite: 'Lax'}, {path: "/"});            
        }
            
      const [currentLocale, setCurrentLocale] = useState(cookies.get("ckIdiomaActual") || "en"); 
      const [windowWidth, setwindowWidth] = useState(window.innerWidth);       
      const [ tamPantalla, setTamPantalla ] = useState('');
      const [ trueFalseTamanoMD, setTrueFalseTamanoMD ] = useState(false);
      

      const messages = AllMessages[currentLocale];    
      
      const toggleIdiomas = (idiomaSelected) => { 
            //console.log('Idioma = ', idiomaSelected);   
            setCurrentLocale(idiomaSelected)
            cookies.set('ckIdiomaActual', idiomaSelected, {sameSite: 'Lax'}, {path: "/"});
      }    

      useEffect(() => {
            if(windowWidth >= 768 && setTrueFalseTamanoMD(true));
            const TamanoWindow = () => setwindowWidth(window.innerWidth);
            window.addEventListener('resize', TamanoWindow );
           
            if(windowWidth >= 768 ){                   
                  setTrueFalseTamanoMD(true); 
            }else{
                  setTrueFalseTamanoMD(false);
            };

            if(windowWidth >= 0 && windowWidth < 481 ){
                  setTamPantalla('MOVIL');                    
            } if(windowWidth >= 481 && windowWidth < 641 ){
                  setTamPantalla('XS-480');                    
            } if(windowWidth >= 641 && windowWidth < 768 ){
                  setTamPantalla('SM-641');                    
            } if(windowWidth >= 768 && windowWidth < 1024 ){
                  setTamPantalla('MD-768');                   
            } if(windowWidth >= 1024 && windowWidth < 1280 ){
                  setTamPantalla('LG-1024'); 
            } if(windowWidth >= 1280 && windowWidth < 1536 ){
                  setTamPantalla('XL-1280'); 
            } if(windowWidth >= 1536 && windowWidth < 1751 ){
                  setTamPantalla('2X1-1536'); 
            } if(windowWidth >= 1751 ){
                  setTamPantalla('ExtraG'); 
            }    
            else{} 

            return () => {       
            window.removeEventListener('resize', TamanoWindow );
            };
      }, [windowWidth]);      
     
      return(

            <IntlProvider locale={currentLocale} messages={messages}> 
                  <ConnectMetaM     
                        langSelected = {currentLocale}
                        setCurrentLocale = {setCurrentLocale}
                        toggleIdiomas = { toggleIdiomas } 
                        windowWidth = { windowWidth }                    
                        trueFalseTamanoMD = { trueFalseTamanoMD }
                        setTrueFalseTamanoMD = { setTrueFalseTamanoMD }
                        tamPantalla = { tamPantalla }
                  />       
            </IntlProvider>
             
      )

}
      
      


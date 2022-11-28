//import {create, all, subtract, add } from 'mathjs'
import {create, all, subtract, add } from 'mathjs'
import moment from 'moment';
import Swal from "sweetalert2";

import BandEEUU from '../03_Imagenes/Banderas/101_Bandera_EEUU_1.png';
import BandChin from '../03_Imagenes/Banderas/102_Bandera_China_1.png';
import BandRus from '../03_Imagenes/Banderas/103_Bandera_Rusia_1.png';
import BandSpanish from '../03_Imagenes/Banderas/104_Bandera_Spanish_1.png';
import BandAlemania from '../03_Imagenes/Banderas/105_Bandera_Alemania.png';
import BandCroatia from '../03_Imagenes/Banderas/106_Bandera_Croacia.png';
import BandIndia from '../03_Imagenes/Banderas/107_Bandera_India.png';
import BandEmiArabes from '../03_Imagenes/Banderas/108_Bandera_Emiratos_Arabes.png';
import BandFrancia from '../03_Imagenes/Banderas/109_Bandera_Francia.png';
import BandItalia from '../03_Imagenes/Banderas/110_Bandera_Italia.png';
import BandIrlanda from '../03_Imagenes/Banderas/111_Bandera_Irlanda.png';
import BandPortugal from '../03_Imagenes/Banderas/112_Bandera_Portugal.png';

const config = {
    // Default type of number
    // Available options: 'number' (default), 'BigNumber', or 'Fraction'
    number: 'BigNumber',
    // Number of significant digits for BigNumbers
    precision: 21
}
const math = create(all, config);

//******************************************************************************** */
/* ----  FX OBTENER NOMBRE DE RED CONECTADA  ----- */

export function getNameNetWorkID (_NetWorkId) {
    let nameRed = '';
        if(_NetWorkId === "0x1" || _NetWorkId === 1 ){
            nameRed = 'ETHEREUM Red Principal';
            console.log('Valor de NAMERED', nameRed);
            return nameRed;
        }
        else if(_NetWorkId === "0x89"){
            nameRed = 'Red MATIC';
            console.log('Valor de NAMERED', nameRed);
            return nameRed;
        }
        else if(_NetWorkId === "0x38" || _NetWorkId === 56){
            nameRed = 'BNB Main NetWork';
            console.log('Valor de NAMERED', nameRed);
            return nameRed;
        }
        else if(_NetWorkId === "0x61" || _NetWorkId === 97){
            nameRed = 'Test NetWork BNB';
            console.log('Valor de NAMERED', nameRed);
            return nameRed;
        }
        else if(_NetWorkId === "0x3" || _NetWorkId === 3){
            nameRed = 'ROPSTEN Red de Pruebas';
            console.log('Valor de NAMERED', nameRed);
            return nameRed;
        }
        else if(_NetWorkId === "0x2a" || _NetWorkId === 42){
            nameRed = 'KOVAN Red de Pruebas';
            console.log('Valor de NAMERED', nameRed);
            return nameRed;
        }
        else if(_NetWorkId === "0x4" || _NetWorkId === 4){
            nameRed = 'RINKEBI Red Privada';
            console.log('Valor de NAMERED', nameRed);
            return nameRed;
        }
        else if(_NetWorkId === "0x5" || _NetWorkId === 5){
            nameRed = 'GOERLI Test NetWork';
            console.log('Valor de NAMERED', nameRed);          
            return nameRed;
        }
        else if(_NetWorkId === 5777){
            nameRed = 'GANACHE PC'; 
            return nameRed;
        }
        else{
            nameRed = 'POR FAVOR CONECTESE A UNA RED VALIDA'; 
            return nameRed;
        }     
        
} 


//******************************************************************************** */
/* ----  FX REDIRECCIONAMIENTO A PAGINA PRINCIPAL  ----- */

export const fxRedirectPagPrincipal = () => {       
    window.open('https://dinoc01.netlify.app/')
}

//******************************************************************************** */
/* ----  MANEJOR DE FECHAS ----- */
export const fxObtenerDateUNIX= () => {   
    const now = new Date(); 
    var utcSegundos = Math.round(now.getTime() / 1000);
    return  utcSegundos;       
}

export const fxTransfUnixADateYMD = (_dateUNIX) => {     
    var FechaEnSegundos = parseInt(_dateUNIX);   
    var FechaFormatDate = moment.unix(FechaEnSegundos).format('YYYY-MM-DD'); 
    return  FechaFormatDate;       
}

export const fxTransfDateYMDaUnix= (_DateYMD) => {        
    var utcSegundos = Math.round(_DateYMD.getTime() / 1000);
    return  utcSegundos;       
}

//******************************************************************************** */
/* ----  MANEJOR DE PALABRAS ----- */

export const fxMostrarAddFormaIncongnita = (_add) => { 
    
    var cadenaAdd = _add;   
    var AddInicio = cadenaAdd.substring(0, 6);
    var AddIncongnit = '***************';
    var Addfinal = cadenaAdd.substring(37);
    var resultadoAdd = AddInicio.concat(AddIncongnit, Addfinal);
    
    return  resultadoAdd;  
}

//******************************************************************************** */
/* ---- FX MATEMATICAS  ----- */

export const fxCambiarNroA2Decimales = (n1) => {
    return (((parseFloat(n1)) + 0).toFixed(2));
}

export const fxCambiarNroA3Decimales = (n1) => {
    return (((parseFloat(n1)) + 0).toFixed(3));
}

export const fxTransfStringAInt = (n1) => {
    return parseInt(n1) ;
}

export const fxTransfStringAIntFloat = (n1) => {
    return parseFloat(n1) ;
}

export const fxAplicarPorcAunaCifra = (cifra, porcent) => {
    let MontoPorcentaje = (cifra * porcent) / 100
    return MontoPorcentaje;
}

/* * * * * LIBRERIA  mathJS * * * * */

export const fxConvertirNumberABigNumber = (n1) => {
    return (math.bignumber(n1));
}

export const fxConvertirBigNumberANumber = (n1) => {
    return (math.number(n1));
}

export const fxRestarTwoNumberLibrarymathJS = (n1, n2) => {
    return (subtract(n1, n2));
}

export const fxSumarTwoNumberLibrarymathJS = (n1, n2) => {
    return (add(n1, n2));
}

//******************************************************************************** */
/* Los iconos que puedes utilizar son:  success, error, warning, info, question   */    
export const fxMostrarAlerta = (icon, title, text) => {    
  
            Swal.fire({
            icon: icon,
            title: title,      
            text: text,
            timer: 3000,
            //footer: footer
            })  
            // Swal.fire({
            //     icon: "info",
            //     title: 'Auto Close Alert!',      
            //     text: `Esta pestaña se cerrara en 3 Segundos. <p>Este es el año actual:  </p>` ,
            //     timer: 3000,
            //     footer: "<b>Este es el FOOTER del mensaje</b>"
            // })      
        
    };

//******************************************************************************** */
/* ----   ----- */

export function fxObtenerBanderaIdiomaSelect (_lenguajeSelect) {
    let rutaImagenSRC = '';
        if(_lenguajeSelect === "en"){ //#01
            rutaImagenSRC = BandEEUU;            
            return rutaImagenSRC;
        }
        else if(_lenguajeSelect === "zh"){ //#02
            rutaImagenSRC = BandChin;            
            return rutaImagenSRC;
        }
        else if(_lenguajeSelect === "ru"){ //#03
            rutaImagenSRC = BandRus;            
            return rutaImagenSRC;
        }
        else if(_lenguajeSelect === "es"){  //#04
            rutaImagenSRC = BandSpanish;            
            return rutaImagenSRC;
        }
        else if(_lenguajeSelect === "de"){  //#05
            rutaImagenSRC = BandAlemania;            
            return rutaImagenSRC;
        }
        else if(_lenguajeSelect === "hr"){  //#06
            rutaImagenSRC = BandCroatia;            
            return rutaImagenSRC;
        }
        else if(_lenguajeSelect === "hi"){  //#07
            rutaImagenSRC = BandIndia;            
            return rutaImagenSRC;
        }
        else if(_lenguajeSelect === "ar"){  //#08
            rutaImagenSRC = BandEmiArabes;            
            return rutaImagenSRC;
        }
        else if(_lenguajeSelect === "fr-CH"){  //#09
            rutaImagenSRC = BandFrancia;            
            return rutaImagenSRC;
        }
        else if(_lenguajeSelect === "it-CH"){  //#10
            rutaImagenSRC = BandItalia;            
            return rutaImagenSRC;
        }
        else if(_lenguajeSelect === "ga-IE"){  //#11
            rutaImagenSRC = BandIrlanda;            
            return rutaImagenSRC;
        }
        else if(_lenguajeSelect === "pt-BR"){  //#12
            rutaImagenSRC = BandPortugal;              
            return rutaImagenSRC;
        }
        else{
            rutaImagenSRC = ''; 
            return rutaImagenSRC;
        }     
        
} 

//******************************************************************************** */
/* ----   ----- */



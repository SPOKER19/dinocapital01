import React, {useState, useEffect, useCallback} from 'react';
import { FormattedMessage } from 'react-intl';
import { useParams, Link } from 'react-router-dom';
import LogoDC from '../03_Imagenes/Logo/LogoDino-013.png';
import ImgNoConect01 from "../03_Imagenes/Publicidad/004_DinoBaby01.png";
import ImgNoConect02 from "../03_Imagenes/Publicidad/005_DinoBaby02.png";
import ImgNoConect03 from "../03_Imagenes/Publicidad/006_DinoBaby03.png";
import ImgConect01 from "../03_Imagenes/Publicidad/002_DragonViserion.png";
import ImgConect02 from "../03_Imagenes/Publicidad/001_Triceraptos.png";
import ImgConect03 from "../03_Imagenes/Publicidad/003_DragonDrogon.png";
import { useMoralis  } from 'react-moralis';
import { Spinner } from 'flowbite-react';
import * as CompFxGlobales  from '../05_Fx/CompFxGlobales';
import { C1Autenticado } from './A02Layer01/C1Autenticado';
import { C2SeccIdSponsor } from './A02Layer01/C2SeccIdSponsor';
import { FondoMain } from './A02Layer01/FondoMain';
import { SeccObtDataBDDUser } from './A02Layer01/SeccObtDataBDDUser';
import { TextMain } from './A02Layer01/TextMain';
import { NabVarFinance } from './A06Finance/NabVarFinance';
import { InformacionReferidos } from './A06Finance/InformacionReferidos';
// import { A01ValorVariables } from './A07ValorVariables/A01ValorVariables';





export const MainDC = (props) => {
  
    const { Moralis, authenticate, isAuthenticated, isAuthenticating, logout } = useMoralis();
       
    const [ idSponsorURL ] = useState(useParams().id || 'dcapital');  
    const [ nombreIdSponsorARegistrar, setNombreIdSponsorARegistrar ] = useState(idSponsorURL || "");
    const [ boolAccesoAPublicidad, setBoolAccesoAPublicidad ] = useState(false); 
    
    //Validando Parametros URL  C2SeccIdSponsor
    /* * */ const [ boolValidarLoadingParamURL, setValidarLoadingParamURL ] = useState(false); // Valida el idSponsorURL de la URL Indica que se debe esperar.
    /* * */ const [ boolIdSpondorParamURL, setBoolIdSpondorParamURL ] = useState(false); // Indica si el idSponsorURL (existe / no existe) luego de validarlo fxValidIdUsuarioURLBDD
    /* * */ const [ boolValidatLongUsername, setBoolValidatLongUsername ] = useState(false); //Valida la Longitud del UseName true si es igual a 8 caracteres                    
    /* * */ const [ boolSeccValidarOCambiarIdSponsor, setBoolSeccValidarOCambiarIdSponsor ] = useState(false); // Para Abrir Seccion Change Id Sponsor
    /* * */ const [ boolMostrarOModfIdSponsor, setBoolMostrarOModfIdSponsor ] = useState(false); // Para Mostrar el Nuevo IdSponsor A Registrar
    /* * */ const [ boolSpinningOIngreseIdSponsorInput, setBoolSpinningOIngreseIdSponsorInput ] = useState(false); //Pertenec a C2SeccIdSponsor
    /* * */ const [ boolTamInputIdSponsor8Let, setBoolTamInputIdSponsor8Let ] = useState(false);
    /* * */ const [ mostrarSeccBoolUsernameInput, setMostrarSeccBoolUsernameInput ] = useState(false); // Para Mostrar el Input userName A Registrar
    /* * */ const [ userNameNew, setUserNameNew ] = useState("");
    /* * */ const [ boolBotonValidarUser, setBoolBotonValidarUser ] = useState(false); 
    /* * */ const [ boolSpinningOIngreseNewUsernameInput, setBoolSpinningOIngreseNewUsernameInput ] = useState(false); //Loading al estar buscando el New User BDD
    /* * */ const [ mostrarBoolUsernameBDD, setMostrarBoolUsernameBDD ] = useState(false); // Para Mostrar el Nuevo userName A Registrar
    /* * */ const [ mostrarSeccBoolButtonRegistrar, setMostrarSeccBoolButtonRegistrar ] = useState(false); // Para Mostrar el Boton para Registrar New Usuario
    //*********************************************************************************** */

    const [ totalDataUsuariosRegistrados, setTotaDatalUsuariosRegistrados ] = useState(null);
    const [ totalUsuariosRegistrados, setTotalUsuariosRegistrados ] = useState(0);
    const [ misReferidosBDD, setMisReferidosBDD ] = useState(0);
    const [ dataMisReferidosBDD, setDataMisReferidosBDD ] = useState(null);
    const [ arrayConMejoresPatrocinadores, setArrayConMejoresPatrocinadores ] = useState(null);

    const mostrarMensjCopiado = () => {         
        CompFxGlobales.fxMostrarAlerta('success', "Link Referido", "Copiado.....");
    }
    
    const fxValidIdSponsorURLBDD = useCallback(async () => { 
        setValidarLoadingParamURL(true);
        const query = new Moralis.Query("dataUser"); 
        query.equalTo("usernameDU", idSponsorURL);        
        await query.find()
        .then(function(receipt){             
            if(receipt.length === 0 ){
                //console.log('No se encontro resultados IdSponsor en la BDD');                
                setValidarLoadingParamURL(false);    
                setBoolIdSpondorParamURL(false);
            }else{                
                //console.log("IdSponsor URL Se encuentra en la BBD = ", receipt);
                setValidarLoadingParamURL(false); 
                setBoolIdSpondorParamURL(true);                
            }           
        })
        .catch(function(error){
           console.log('Error Validando Datos', error);
           setValidarLoadingParamURL(false);
        });
    }, [idSponsorURL, Moralis.Query]); 
    

    const fxObtenerTotalUsuariosRegistrados = useCallback(async () => { 
        const query = new Moralis.Query("dataUser"); 
        await query.find()
        .then(function(receipt){             
            if(receipt.length === 0 ){
                //console.log('No se encontraron USUARIOS REGISTRADOS');  
                setTotaDatalUsuariosRegistrados(receipt);
                setTotalUsuariosRegistrados(receipt.length);  
            }else{                
                //console.log("USUARIOS REGISTRADOS = ", receipt.length);  
                setTotaDatalUsuariosRegistrados(receipt);
                setTotalUsuariosRegistrados(receipt.length); 
                /* fxMostrarMejoresPatrocinadores(receipt)    */                        
            }           
        })
        .catch(function(error){
           console.log('Error Validando Datos', error);
        });
    }, [Moralis.Query]); 

    
    const fxMostrarMejoresPatrocinadores = useCallback(async () => {         
        if(totalDataUsuariosRegistrados){
          const respuesta =  totalDataUsuariosRegistrados
          .map(item => item.attributes.idSponsor)
           // console.log(respuesta.sort())
          //AQUI VIENE LA MAGIA CON REDUCE ==> Tenemos nuestro Acumulador que sera un Objeto
          // la Primera Variable sera el Acumulador == OBJ
          // La segunda Variable sera la variable que estamos iterando o preguntando en este caso sera idSponsor
          // Luego colocamos los valores de array function => {}
          // OJO = Nuestro estado inicial no sera CERO con en otros ejercicios sino sera UN OBJETO VACIO {}
          // Ahora lo que hariamos es una pregunta sencilla SI En el Objeto que estamos iterando la Clave idSponsor existe
          // Si existe lo que hacemos es decirle que sume su actual valor mas 1
          .reduce((obj, item) => {
            if(obj[item]){
                obj[item] = obj[item] + 1;
            }else{
                obj[item] = 1;
            }
            return obj;
          }, []) 
         /* console.log(respuesta)  */ 
         setArrayConMejoresPatrocinadores(respuesta);
        }else{}
        
    }, [totalDataUsuariosRegistrados]); 

        
    const fxValidateAndConnect = () => {                
        login();
        fxObtenerTotalUsuariosRegistrados();
        fxValidIdSponsorURLBDD(); //LO PUSE
    };

    const login = async () => {
        if (!isAuthenticated) {  
          await authenticate()
            .then(function (dataBDD_User) {                
                //console.log("Autenticacion Exitosa");              
                //console.log("dataBDDUser.id = ", dataBDD_User.id);                 
            })
            .catch(function (error) {
              console.log(error);             
            });
        }
    } 
    

    const fxObtenerMisReferidosUsuActual = useCallback(async (usuarioActual) => {    // 
        const query = new Moralis.Query("dataUser");        
        query.equalTo("idSponsor", usuarioActual);
        await query.find()
        .then(function(receipt){ 
            if(receipt.length === 0){
                //console.log('No tiene Referidos', receipt);   
                //setPost(list.sort((a,b) => b.tipAmount - a.tipAmount)); 
                setDataMisReferidosBDD(receipt); 
                setMisReferidosBDD(receipt.length);        
            }else{                 
                //console.log('Estos son sus Referidos', receipt);
                setDataMisReferidosBDD(receipt);
                setMisReferidosBDD(receipt.length);
            }             
        })
        .catch(function(error){
            console.log('Error Validando Datos', error);            
        });   
    }, [Moralis.Query]);


    const fxContarUsernameIdConnet = useCallback(async () => { // 
        if(props.userActual){  
            //setBoolAccesoAPublicidad(true);  //Cambiado el Martes 18-10         
            let longitudUsername = await (props.userActual && props.userActual.attributes.username.length) || "";  
             if(longitudUsername === 8){
                //console.log("USERNAME VALIDO");
                setBoolAccesoAPublicidad(true); 
                setBoolValidatLongUsername(true);
                fxObtenerMisReferidosUsuActual(props.userActual.attributes.username);
             }else{
                //console.log("USERNAME A MODIFICAR");
                setBoolValidatLongUsername(false);
            }            
        }else{
            //console.log("USERNAME DESCONECTADO *** ");
            //fxResetVariables();
            setBoolAccesoAPublicidad(false); 
        }
    }, [props.userActual, fxObtenerMisReferidosUsuActual]);  


    const fxCerrarSesion = () => {        
        logout()
        .then(function (dataUserLogout) {
            //console.log("Cierre Exitoso fxCerrarSesion");            
          })
          .catch(function (error) {
            console.log(error);            
          });        
    }

    

    const fxResetVariables = useCallback(async () => {    
        setValidarLoadingParamURL(false);
        setBoolValidatLongUsername(false);
        setBoolSeccValidarOCambiarIdSponsor(false);
        setBoolMostrarOModfIdSponsor(false);
        setBoolSpinningOIngreseIdSponsorInput(false);
        setNombreIdSponsorARegistrar (idSponsorURL || "");
        setBoolTamInputIdSponsor8Let(false);
        setMostrarSeccBoolUsernameInput(false);
        setUserNameNew("");
        setBoolBotonValidarUser(false);
        setBoolSpinningOIngreseNewUsernameInput(false);
        setMostrarBoolUsernameBDD(false);
        setMostrarSeccBoolButtonRegistrar(false);   
        setBoolAccesoAPublicidad(false); 
        setTotaDatalUsuariosRegistrados(null);
        setTotalUsuariosRegistrados(0);
        setMisReferidosBDD(0);
        setDataMisReferidosBDD(null);
        setArrayConMejoresPatrocinadores([]);
    }, [idSponsorURL]); 


    useEffect(() => {  
        fxValidIdSponsorURLBDD();
        fxObtenerTotalUsuariosRegistrados();        
    }, [fxValidIdSponsorURLBDD, fxObtenerTotalUsuariosRegistrados]);
    

    useEffect(() => { 
        if(props.userActual){   
            fxContarUsernameIdConnet();
            fxValidIdSponsorURLBDD(); //LO PUSE
        }else{
            fxValidIdSponsorURLBDD(); //LO PUSE
        }
    }, [fxContarUsernameIdConnet, props.userActual, fxValidIdSponsorURLBDD]); //LO PUSE

    useEffect(() => {  
        if(props.userActual){
             //console.log("*** props.userActual EXISTE = ");
        }else{
             //console.log("*** props.userActual NO EXISTE = ");
             fxResetVariables();
        }
     }, [props.userActual, fxResetVariables]);

     useEffect(() => {  
        if(props.userActual && totalDataUsuariosRegistrados !== 0){
             //console.log("*** props.userActual EXISTE = ");
             fxMostrarMejoresPatrocinadores();
        }else{
            //console.log("*** props.userActual NO EXISTE = ");            
        }
     }, [totalDataUsuariosRegistrados, fxMostrarMejoresPatrocinadores, props.userActual]);

       

    return (
            <div className='pt-20'>
                <div className='flex flex-col w-full h-auto bg-gray-800'>
                    <div className='relative flex flex-col items-center justify-center w-full mx-auto overflow-hidden text-white bg-gray-700'>  

                        <FondoMain />                    
                        
                        <div className="z-0 flex flex-col items-center justify-center w-full py-3 overflow-hidden md:flex-row">
                            <div className=''>
                                <div className="w-24 rounded-full sm:w-28 md:w-36 bg-gradient-to-l from-green-400 to-yellow-300">
                                    <img src={LogoDC} alt='Logo'/>
                                </div>
                            </div>
                            <TextMain />
                        </div> 

                    </div>

                    <div className='z-0 flex flex-wrap items-center w-full h-auto p-1 overflow-hidden lg:justify-around'>
                        <div className='flex items-center self-stretch justify-center w-full p-3 bg-gradient-to-tr from-deep-orange-400 to-teal-600 hover:bg-blue-gray-800 sm:w-1/2 xl:flex-1 '>
                            <div className='flex flex-col items-center self-stretch justify-center w-full overflow-hidden bg-gradient-to-tr from-teal-300 to-indigo-600 hover:bg-blue-gray-800'>
                                
                                {(boolValidarLoadingParamURL === true || isAuthenticating === true)
                                    ?   <div className='flex flex-col items-center justify-center w-full p-2 bg-lime-700 h-96'>
                                            <div className='font-bold text-blue-gray-800'>
                                                <FormattedMessage id="Por Favor Espere......" />                                                
                                            </div>
                                            <Spinner
                                                aria-label="Extra large spinner example"
                                                color="purple"
                                                size="xl"
                                            />
                                        </div>
                                    :   (boolIdSpondorParamURL)
                                        ?   <div className='relative flex flex-col items-center justify-center w-full p-2 h-96'>
                                                {(isAuthenticated)
                                                    ?   (boolValidatLongUsername)
                                                        ?   <div className=''>                                                                
                                                                <C1Autenticado  idSponsorURL = { idSponsorURL } 
                                                                                fxCerrarSesion = { fxCerrarSesion }
                                                                                userActual = { props.userActual }                                                                                
                                                                />                                                                 
                                                            </div>
                                                        :   <C2SeccIdSponsor    userActual = { props.userActual }
                                                                                langSelected = {props.langSelected}
                                                                                URLMainOrigin = { props.URLMainOrigin }
                                                                                nombreIdSponsorARegistrar = { nombreIdSponsorARegistrar }
                                                                                setNombreIdSponsorARegistrar = { setNombreIdSponsorARegistrar }
                                                                                boolIdSpondorParamURL = { boolIdSpondorParamURL }
                                                                                setBoolIdSpondorParamURL = { setBoolIdSpondorParamURL }
                                                                                boolSeccValidarOCambiarIdSponsor = { boolSeccValidarOCambiarIdSponsor }
                                                                                setBoolSeccValidarOCambiarIdSponsor = { setBoolSeccValidarOCambiarIdSponsor }                                                                                
                                                                                boolMostrarOModfIdSponsor = { boolMostrarOModfIdSponsor }
                                                                                setBoolMostrarOModfIdSponsor = { setBoolMostrarOModfIdSponsor }                                                                                
                                                                                boolSpinningOIngreseIdSponsorInput = { boolSpinningOIngreseIdSponsorInput }
                                                                                setBoolSpinningOIngreseIdSponsorInput = { setBoolSpinningOIngreseIdSponsorInput }                                                                                
                                                                                boolTamInputIdSponsor8Let = { boolTamInputIdSponsor8Let }
                                                                                setBoolTamInputIdSponsor8Let = { setBoolTamInputIdSponsor8Let }
                                                                                mostrarSeccBoolUsernameInput = { mostrarSeccBoolUsernameInput }
                                                                                setMostrarSeccBoolUsernameInput = { setMostrarSeccBoolUsernameInput }
                                                                                userNameNew =  { userNameNew } 
                                                                                setUserNameNew = { setUserNameNew }
                                                                                boolBotonValidarUser = { boolBotonValidarUser }
                                                                                setBoolBotonValidarUser = { setBoolBotonValidarUser }
                                                                                boolSpinningOIngreseNewUsernameInput = { boolSpinningOIngreseNewUsernameInput }
                                                                                setBoolSpinningOIngreseNewUsernameInput = { setBoolSpinningOIngreseNewUsernameInput } 
                                                                                mostrarBoolUsernameBDD = { mostrarBoolUsernameBDD }
                                                                                setMostrarBoolUsernameBDD = { setMostrarBoolUsernameBDD }
                                                                                mostrarSeccBoolButtonRegistrar = { mostrarSeccBoolButtonRegistrar }
                                                                                setMostrarSeccBoolButtonRegistrar = { setMostrarSeccBoolButtonRegistrar } 
                                                                                setValidarLoadingParamURL = { setValidarLoadingParamURL }
                                                                                fxContarUsernameIdConnet = { fxContarUsernameIdConnet }
                                                                                boolAccesoAPublicidad = { boolAccesoAPublicidad }
                                                                                setBoolAccesoAPublicidad = { setBoolAccesoAPublicidad }  
                                                                                fxObtenerTotalUsuariosRegistrados = { fxObtenerTotalUsuariosRegistrados }
                                                                                setMisReferidosBDD = { setMisReferidosBDD }
                                                             />                                                      
                                                
                                                    :   <div className='relative w-full'>
                                                            {/* Primera Forma */} 
                                                            <div className="absolute top-0 bg-purple-500 rounded-full opacity-60 w-72 h-72 -left-10 mix-blend-multiply filter blur-lg animate-blob ">
                                                            </div>
                                                            {/* Segundo Circulo */}
                                                            <div className="absolute top-0 bg-yellow-500 rounded-full opacity-60 w-72 h-72 -right-20 mix-blend-multiply filter blur-lg animate-blob animation-delay-2000">
                                                            </div>
                                                            {/* Tercer Circulo */}
                                                            <div className="absolute bg-pink-500 rounded-full opacity-60 -bottom-20 -left-5 xs:left-10 w-72 h-72 -right-4 mix-blend-multiply filter blur-lg animate-blob animation-delay-3000">
                                                            </div>
                                                            <SeccObtDataBDDUser     
                                                                fxValidateAndConnect = { fxValidateAndConnect } 
                                                                fxAuthWalletConnet = { props.fxAuthWalletConnet }                                                                     
                                                            />
                                                        </div>
                                                }
                                            </div>
                                        :   <div className='flex flex-col items-center justify-center w-full p-2 space-y-5 bg-gradient-to-tr from-light-green-700 to-deep-orange-900 h-96'>
                                                <span className='text-sm font-bold text-gray-900'>
                                                    Error de Carga
                                                </span>
                                                <Link   to={'/'} 
                                                        className="px-5 py-2 font-bold text-black bg-green-300"
                                                >
                                                    Reload...
                                                </Link>
                                                <span className='text-sm font-bold text-gray-900'>
                                                    ó Ingrese directamente a:
                                                </span>                                                    
                                                <button className='text-xs cursor-pointer text-deep-purple-900 hover:text-blue-700'
                                                        onClick={CompFxGlobales.fxRedirectPagPrincipal}
                                                >   
                                                    https://dinoc01.netlify.app/
                                                </button>
                                            </div>
                                }
                            </div>                        
                        </div>
                        {(boolAccesoAPublicidad)
                            ?  (props.windowWidth >= 1280)
                                ? <> 
                                    <div className='flex items-center self-stretch justify-center w-full p-3 bg-gradient-to-tr from-deep-orange-400 to-teal-600 sm:w-1/2 xl:flex-1 '>
                                        <div className='relative flex flex-col w-full overflow-hidden bg-gradient-to-tr from-deep-orange-400 to-teal-600 hover:bg-blue-gray-800'>
                                            <div className='flex flex-col items-center justify-center object-cover w-full bg-center bg-cover'>
                                                <img    src={ ImgConect01 } 
                                                        className="w-80 h-96"
                                                        alt='LogoForex'/>                                                
                                            </div>
                                        </div>                        
                                    </div>
                                    <div className='flex items-center self-stretch justify-center w-full p-3 bg-gradient-to-tr from-deep-orange-400 to-teal-600 sm:w-1/2 xl:flex-1'>
                                        <div className='relative flex flex-col items-center self-stretch justify-center w-full overflow-hidden bg-gradient-to-tr from-deep-orange-400 to-teal-600 hover:bg-blue-gray-800'>
                                            <div className='flex flex-col items-center justify-center object-cover w-full bg-center bg-cover'>
                                                <img    src={ ImgConect02 } 
                                                        className="w-80 h-96"
                                                        alt='LogoForex'/>                                                
                                            </div>                                            
                                        </div>                        
                                    </div>
                                    <div className='flex items-center self-stretch justify-center w-full p-3 bg-gradient-to-tr from-deep-orange-400 to-teal-600 sm:w-1/2 xl:flex-1'>
                                        <div className='relative flex flex-col items-center self-stretch justify-center w-full overflow-hidden bg-gradient-to-tr from-deep-orange-400 to-teal-600 hover:bg-blue-gray-800'>
                                            <div className='flex flex-col items-center justify-center object-cover w-full bg-center bg-cover'>
                                                <img    src={ ImgConect03 } 
                                                        className="w-80 h-96"
                                                        alt='LogoForex'/>                                                
                                            </div>                                            
                                        </div>                        
                                    </div>
                                    </>
                                :   <div className='flex flex-wrap items-center justify-around w-full h-auto p-1 overflow-hidden sm:w-1/2 bg-gradient-to-tr from-deep-orange-400 to-teal-600'>
                                        <div className='flex items-center self-stretch justify-center w-1/2 bg-gradient-to-tr from-deep-orange-400 to-teal-600 hover:bg-blue-gray-800 xl:flex-1 '>
                                            <div className='flex flex-col items-center justify-center object-cover w-full bg-center bg-cover'>
                                                <img    src={ ImgConect01 } 
                                                        className="h-48 p-2 w-80 xs:w-64"
                                                        alt='LogoForex'/>                                                
                                            </div>
                                        </div>
                                        <div className='flex items-center self-stretch justify-center w-1/2 bg-gradient-to-tr from-deep-orange-400 to-teal-600 hover:bg-blue-gray-800 xl:flex-1 '>
                                            <div className='flex flex-col items-center justify-center object-cover w-full bg-center bg-cover'>
                                                <img    src={ ImgConect02 } 
                                                        className="h-48 p-2 w-80 xs:w-64"
                                                        alt='LogoForex'/>                                                
                                            </div>
                                        </div>
                                        <div className='flex items-center self-stretch justify-center w-1/2 bg-gradient-to-tr from-deep-orange-400 to-teal-600 hover:bg-blue-gray-800 xl:flex-1 '>
                                            <div className='flex flex-col items-center justify-center object-cover w-full bg-center bg-cover'>
                                                <img    src={ ImgConect03 } 
                                                        className="h-48 p-2 w-80 xs:w-64"
                                                        alt='LogoForex'/>                                                
                                            </div>
                                        </div>
                                        <div className='flex items-center self-stretch justify-center w-1/2 bg-gradient-to-tr from-deep-orange-400 to-teal-600 hover:bg-blue-gray-800 xl:flex-1 '>
                                            <div className='flex flex-col items-center justify-center object-cover w-full bg-center bg-cover'>
                                                <img    src={ ImgConect01 } 
                                                        className="h-48 p-2 w-80 xs:w-64" 
                                                        alt='LogoForex'/>                                                
                                            </div>
                                        </div>
                                    </div>
                            :   (props.windowWidth >= 1280)
                                ?   <>  
                                    <div className='flex items-center self-stretch justify-center w-full p-3 bg-green-700 sm:w-1/2 xl:flex-1 '>
                                        <div className='flex flex-col items-center self-stretch justify-center w-full overflow-hidden bg-gradient-to-tr from-light-green-600 to-amber-600 hover:bg-blue-gray-800'>
                                            <div className='flex flex-col items-center justify-center object-cover w-full bg-center bg-cover'>
                                                <img    src={ ImgNoConect01 } 
                                                        className="w-80 h-96"
                                                        alt='LogoForex'/>                                                
                                            </div>
                                        </div>                        
                                    </div>
                                    <div className='flex items-center self-stretch justify-center w-full p-3 bg-green-600 sm:w-1/2 xl:flex-1'>
                                        <div className='flex flex-col items-center self-stretch justify-center w-full overflow-hidden bg-gradient-to-tr from-light-green-900 to-indigo-600 hover:bg-blue-gray-800'>
                                            <div className='flex flex-col items-center justify-center object-cover w-full bg-center bg-cover'>
                                                <img    src={ ImgNoConect02 } 
                                                        className="w-80 h-96"
                                                        alt='LogoForex'/>                                                
                                            </div>
                                        </div>                        
                                    </div>
                                    <div className='flex items-center self-stretch justify-center w-full p-3 bg-green-700 sm:w-1/2 xl:flex-1'>
                                        <div className='flex flex-col items-center self-stretch justify-center w-full overflow-hidden bg-gradient-to-tr from-teal-900 to-red-500 hover:bg-blue-gray-800'>
                                            <div className='flex flex-col items-center justify-center object-cover w-full bg-center bg-cover'>
                                                <img    src={ ImgNoConect03 } 
                                                        className="w-80 h-96"
                                                        alt='LogoForex'/>                                                
                                            </div>
                                        </div>                        
                                    </div>
                                    </>
                                :   <div className='flex flex-wrap items-center justify-around w-full h-auto p-1 overflow-hidden sm:w-1/2 bg-gradient-to-tr from-deep-orange-400 to-teal-600'>
                                        <div className='flex items-center self-stretch justify-center w-1/2 bg-gradient-to-tr from-deep-orange-400 to-teal-600 hover:bg-blue-gray-800 xl:flex-1 '>
                                            <div className='flex flex-col items-center justify-center object-cover w-full bg-center bg-cover'>
                                                <img    src={ ImgNoConect01 } 
                                                        className="h-48 p-2 w-80 xs:w-64"
                                                        alt='LogoForex'/>                                                
                                            </div>
                                        </div>
                                        <div className='flex items-center self-stretch justify-center w-1/2 bg-gradient-to-tr from-deep-orange-400 to-teal-600 hover:bg-blue-gray-800 xl:flex-1 '>
                                            <div className='flex flex-col items-center justify-center object-cover w-full bg-center bg-cover'>
                                                <img    src={ ImgNoConect02 } 
                                                        className="h-48 p-2 w-80 xs:w-64"
                                                        alt='LogoForex'/>                                                
                                            </div>
                                        </div>
                                        <div className='flex items-center self-stretch justify-center w-1/2 bg-gradient-to-tr from-deep-orange-400 to-teal-600 hover:bg-blue-gray-800 xl:flex-1 '>
                                            <div className='flex flex-col items-center justify-center object-cover w-full bg-center bg-cover'>
                                                <img    src={ ImgNoConect03 } 
                                                        className="h-48 p-2 w-80 xs:w-64"
                                                        alt='LogoForex'/>                                                
                                            </div>
                                        </div>
                                        <div className='flex items-center self-stretch justify-center w-1/2 bg-gradient-to-tr from-deep-orange-400 to-teal-600 hover:bg-blue-gray-800 xl:flex-1 '>
                                            <div className='flex flex-col items-center justify-center object-cover w-full bg-center bg-cover'>
                                                <img    src={ ImgNoConect01 } 
                                                        className="h-48 p-2 w-80 xs:w-64" 
                                                        alt='LogoForex'/>                                                
                                            </div>
                                        </div>
                                    </div>                          
                        } 
                    </div>
                </div>
                
                {(boolAccesoAPublicidad)
                    ?   <div className='my-5'>
                            <NabVarFinance  totalUsuariosRegistrados = { totalUsuariosRegistrados }
                                            misReferidosBDD = { misReferidosBDD }
                            />
                            <div className='my-5'>
                                <InformacionReferidos   userActual = { props.userActual }
                                                        mostrarMensjCopiado = { mostrarMensjCopiado }
                                                        dataMisReferidosBDD = { dataMisReferidosBDD }
                                                        totalDataUsuariosRegistrados = { totalDataUsuariosRegistrados }
                                                        arrayConMejoresPatrocinadores = { arrayConMejoresPatrocinadores }
                                                        fxMostrarMejoresPatrocinadores = { fxMostrarMejoresPatrocinadores }
                                />
                            </div>
                        </div>
                    :   ""
                }
               
                
                {/* <A01ValorVariables  langSelected = {props.langSelected}                                                                    
                                    windowWidth = { props.windowWidth } 
                                    trueFalseTamanoMD = { props.trueFalseTamanoMD }                                                                    
                                    tamPantalla = { props.tamPantalla } 
                                    userActual = { props.userActual }
                                    URLMainOrigin = { props.URLMainOrigin } 
                                    //MAINDC
                                    idSponsorURL = { idSponsorURL }
                                    nombreIdSponsorARegistrar = { nombreIdSponsorARegistrar }
                                    boolValidarLoadingParamURL = { boolValidarLoadingParamURL }
                                    boolIdSpondorParamURL = { boolIdSpondorParamURL }
                                    boolValidatLongUsername = { boolValidatLongUsername }
                                    //C2SeccIdSponsor
                                    boolSeccValidarOCambiarIdSponsor = { boolSeccValidarOCambiarIdSponsor }
                                    boolMostrarOModfIdSponsor = { boolMostrarOModfIdSponsor }
                                    boolSpinningOIngreseIdSponsorInput = { boolSpinningOIngreseIdSponsorInput }
                                    boolTamInputIdSponsor8Let = { boolTamInputIdSponsor8Let }
                                    mostrarSeccBoolUsernameInput = { mostrarSeccBoolUsernameInput }
                                    userNameNew =  { userNameNew }
                                    boolBotonValidarUser = { boolBotonValidarUser }
                                    boolSpinningOIngreseNewUsernameInput = { boolSpinningOIngreseNewUsernameInput }
                                    mostrarBoolUsernameBDD = { mostrarBoolUsernameBDD }
                                    mostrarSeccBoolButtonRegistrar = { mostrarSeccBoolButtonRegistrar }
                                    boolAccesoAPublicidad = { boolAccesoAPublicidad }
                                    //
                                                                               
                /> */}
                
            </div>
    )
}

   
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useMoralis } from 'react-moralis';
import { Button, Label, Spinner, TextInput } from 'flowbite-react';
import * as CompFxGlobales  from '../../05_Fx/CompFxGlobales';


const identicon = require('identicon');

export const C2SeccIdSponsor = (props) => {
    
    const { Moralis, isAuthenticating, logout, setUserData } = useMoralis();

    //****** Conectando IDENTICON // Synchronous API  ******// 
        let identiconIdSponsorURL = props.nombreIdSponsorARegistrar;    
        const bufferIdSponsorURL = identicon.generateSync({ id: identiconIdSponsorURL , size: 40 });  
    //**************************************************** */

    const fxSeccEsMiPatrocinadorURL = () => { 
        props.setBoolSeccValidarOCambiarIdSponsor(true);
        props.setBoolMostrarOModfIdSponsor(true); 
        props.setMostrarSeccBoolUsernameInput(true);      
    };

    const fxSeccModfIdSponsor = () => {    
        props.setBoolSeccValidarOCambiarIdSponsor(true);           
    };

    const fxObtInputNewIdSponsor = (e) => {
        let nombreSponsor = e.target.value;  
        if(nombreSponsor.length === 8){            
            props.setNombreIdSponsorARegistrar(nombreSponsor.toString().toLowerCase());
            props.setBoolTamInputIdSponsor8Let(true);            
        }else{            
            props.setBoolTamInputIdSponsor8Let(false);            
        }
    }


    const handleChangeUsernameLowercase = (e) => {
        let usernameInput = e.target.value;           
        if(usernameInput.length === 8){            
            props.setUserNameNew(usernameInput.toString().toLowerCase());
            props.setBoolBotonValidarUser(true);            
        }else{
            props.setUserNameNew("");
            props.setBoolBotonValidarUser(false);           
        }
    }


    const fxValidarIdSponsorBDD = async () => {     
        props.setBoolSpinningOIngreseIdSponsorInput(true);
        const query = new Moralis.Query("dataUser");        
        query.equalTo("usernameDU", props.nombreIdSponsorARegistrar);       
        await query.first()
        .then(function(receipt){ 
            if(receipt === null || receipt === undefined ){
                CompFxGlobales.fxMostrarAlerta("info", "IDSPONSOR NO EXISTE / Sponsor ID does not exist", "Introduzca un ID SPONSOR VALIDO / Enter a valid ID sponsor");                          
                props.setBoolSpinningOIngreseIdSponsorInput(false); 
                props.setBoolMostrarOModfIdSponsor(false);
                props.setBoolTamInputIdSponsor8Let(false);
                props.setMostrarSeccBoolUsernameInput(false); 
            }else{  
                props.setBoolSpinningOIngreseIdSponsorInput(false);                 
                props.setBoolMostrarOModfIdSponsor(true);  
                props.setMostrarSeccBoolUsernameInput(true); 
            }   
        })
        .catch(function(error){
           console.log('Error Validando Datos', error);            
            props.setBoolSpinningOIngreseIdSponsorInput(false);
        });  
    }

    const validarIdUsuarioBDD = async () => {    //    
        props.setBoolSpinningOIngreseNewUsernameInput(true); 
        const query = new Moralis.Query("dataUser");        
        query.equalTo("usernameDU", props.userNameNew);       
        await query.find()
        .then(function(receipt){ 
            if(receipt.length === 0){
                props.setBoolSpinningOIngreseNewUsernameInput(false); 
                props.setMostrarBoolUsernameBDD(true);
                props.setBoolBotonValidarUser(false);
                props.setMostrarSeccBoolButtonRegistrar(true);               
            }else{                 
                CompFxGlobales.fxMostrarAlerta("info", "USUARIO YA EXISTE / User already exists", "El Username que desea ya esta Registrado / The user you want is already registered");
                props.setBoolSpinningOIngreseNewUsernameInput(false);
                props.setMostrarBoolUsernameBDD(false);
                props.setBoolBotonValidarUser(false);
                props.setMostrarSeccBoolButtonRegistrar(false);
            }             
        })
        .catch(function(error){
            console.log('Error Validando Datos', error);
            props.setBoolSpinningOIngreseNewUsernameInput(false);
        });  
    }

    const fxRegistrarNewUserDU = async () => {  
        props.setValidarLoadingParamURL(true);
        nuevaFilaUserRegister();
    }

    const fxCambiarDataUSER = async () => {
        if(props.userActual){
            /****** CAMBIANDO DATA EN _USER ********/
                setUserData({
                    username: props.userNameNew,  
                    idSponsorUSER: props.nombreIdSponsorARegistrar,
                    LinkReferido: props.URLMainOrigin + "/" + props.userNameNew
                });
            /****** CAMBIANDO DATA EN _USER ********/
            fxObtenerMisReferidos();
            props.fxObtenerTotalUsuariosRegistrados();
            props.fxContarUsernameIdConnet();
        }else{}
    }

    const nuevaFilaUserRegister = async () => {   
        //console.log("REGISTRANDO....");      
        if(props.userActual){
            const incluirNewUsuario = Moralis.Object.extend("dataUser");        
            const newUsuario = new incluirNewUsuario();  
            newUsuario.set("usernameDU", props.userNameNew); 
            newUsuario.set("idUserConnect", props.userActual.attributes.username); 
            newUsuario.set("idSponsor", props.nombreIdSponsorARegistrar);
            newUsuario.set("addressIdConnect", props.userActual.attributes.ethAddress); 
            newUsuario.set("Idioma_Orig", props.langSelected);           
            await newUsuario.save() 
            .then(function(receipt){ 
                fxCambiarDataUSER(); 
                    CompFxGlobales.fxMostrarAlerta("success", "Usuario Creado / Created user", "El Usuario Fue Creado Exitosamente / The user was created successfully");                    
                    props.setValidarLoadingParamURL(false);
                return newUsuario;                
            })
            .catch(function(error){
               console.log('Error al Registrar Usuario', error);
               props.setValidarLoadingParamURL(false);              
            }); 
        } else {console.log("usernameIDConnect Esta Vacio");} 
    } 

    const fxObtenerMisReferidos = async () => {    // 
        const query = new Moralis.Query("dataUser");        
        query.equalTo("idSponsor", props.userNameNew);       
        await query.find()
        .then(function(receipt){ 
            if(receipt.length === 0){
                //console.log('No tiene Referidos', receipt);  
                props.setMisReferidosBDD(receipt.length);          
            }else{                 
                //console.log('Estos son sus Referidos', receipt);
                props.setMisReferidosBDD(receipt.length);  
            }             
        })
        .catch(function(error){
            console.log('Error Validando Datos', error);            
        });  
    }
   


    return (
        <div className='flex flex-col justify-around w-full h-full bg-gradient-to-b from-yellow-300 to-light-blue-800 '>  
            <div className='flex flex-col items-center w-full p-1 '> {/* Contenedor Principal */} 
                {/* C1 */}
                <div className='flex flex-col items-center justify-center w-full h-10 p-1 border-2'> {/* Contenedor 1 */}                    
                    <div className='flex flex-row items-center justify-center w-full text-center'>
                        <div className='flex items-center justify-center flex-1'>
                            <span className='text-sm font-semibold text-gray-900 xs:text-base'>
                                <FormattedMessage id="VAMOS A REGISTRARNOS" />                                
                            </span>
                        </div>
                        <button className="p-1 mt-2 text-2xl font-light text-red-600"                                
                                onClick={() => logout()}                                
                        >
                            <ion-icon name="trash-bin-outline"></ion-icon>
                        </button>
                    </div>       
                </div>
                {/* C2 */}
                <div className='flex flex-col items-center justify-center w-full p-1 border-2 border-red-500 '> {/* Contenedor 2 */}
                    {(props.boolSeccValidarOCambiarIdSponsor === false)                        
                        ?   <div className="flex flex-col items-center self-stretch justify-center w-full h-24"                                            
                            >
                                <div className='flex flex-col items-center justify-center w-full text-center h-1/2'>
                                    <span className='text-xs font-semibold text-gray-700 xs:text-sm'>
                                        <FormattedMessage id="Este es el ID de tu Patrocinador" /> 
                                        {/* Este es el ID de tu Patrocinador */}
                                    </span>
                                </div>
                                <div className='flex flex-row items-center justify-center w-full h-full'>
                                    <div className='flex flex-col items-center justify-center h-full w-11 xs:w-12 bg-gradient-to-l from-deep-orange-300 to-green-500'>
                                        <figcaption className="flex items-center justify-center space-x-3">                        
                                            <img    src={bufferIdSponsorURL} 
                                                    alt="IdSponsorURL"
                                            />
                                        </figcaption>
                                    </div>
                                    <div className='flex-col flex-1 h-full bg-blue-700'>
                                        <div className='flex flex-col items-center justify-center w-full bg-yellow-300 h-1/2'>
                                            <span className='text-base font-bold text-gray-900'>
                                                {props.nombreIdSponsorARegistrar}                                                
                                            </span>
                                        </div>
                                        <div className='flex flex-col items-center justify-center w-full text-center bg-green-500 h-1/2'>
                                            <span className='text-xs font-semibold text-gray-900'>
                                                <FormattedMessage id="Patrocinador Existe" />
                                                {/* Patrocinador Existe */}
                                            </span>
                                        </div>                                                                  
                                    </div>
                                    <div className='flex flex-col items-center justify-center w-8 h-full xs:w-12 bg-gradient-to-l from-green-900 to-deep-purple-900'>
                                            <span   className='mt-3 text-2xl font-semibold text-green-500 sm:text-3xl animate-bounce hover:animate-none'>
                                                <ion-icon name="checkbox-outline"></ion-icon>                                        
                                            </span>       
                                    </div>
                                </div>
                            </div>
                        :   <div className='relative flex flex-col items-center justify-center w-full '>
                                {(props.boolMostrarOModfIdSponsor)
                                    ?   <div className='flex flex-col items-center justify-center w-full border-2 xs:flex-row'>
                                            <div className="flex flex-col items-center justify-center text-xs w-full px-0.5 py-2 bg-lime-800 text-gray-900">
                                                <FormattedMessage id="Id Spondor a Registrar" />
                                                {/* Id Spondor a Registrar */}
                                            </div>
                                            <div className="flex flex-col items-center justify-center w-full p-2 text-gray-200 bg-teal-900">
                                                {props.nombreIdSponsorARegistrar}
                                            </div>                                           
                                        </div>
                                    : (props.boolSpinningOIngreseIdSponsorInput )
                                        ?   <div className="flex flex-row gap-3">
                                                <Button>
                                                    <Spinner aria-label="Spinner button example" />
                                                    <span className="pl-3">
                                                        Validating ...
                                                    </span>
                                                </Button>
                                            </div>
                                        :   <div className='flex flex-col items-center justify-center w-full '>
                                                <div className="block mb-1 font-bold text-center">
                                                    <Label
                                                        htmlFor="idsponsor"
                                                        value="Ingrese el Id de su Patrocinador / Sponsor ID to register"
                                                    />
                                                </div>
                                                <div className='flex flex-row items-center justify-center bg-white'>
                                                    <div className='flex flex-col items-center justify-center'>                                                
                                                        <TextInput
                                                            id="idSponsor1"
                                                            type="text"                                             
                                                            placeholder="It must contain 8 characters"
                                                            required={true}
                                                            maxLength={8} 
                                                            addon="@"                                                       
                                                            onChange={fxObtInputNewIdSponsor} 
                                                        />
                                                    </div>
                                                    <button type="submit"
                                                            className={`${props.boolTamInputIdSponsor8Let === false && 'opacity-30 cursor-not-allowed'}
                                                                        flex items-center justify-center text-amber-500 bg-green-800 
                                                                        hover:bg-blue-9 00 pt-2 px-2                                             
                                                            ` }  
                                                            disabled={!props.boolTamInputIdSponsor8Let}
                                                            onClick={fxValidarIdSponsorBDD}
                                                    >
                                                        <span className='text-2xl font-bold'><ion-icon name="enter-outline"></ion-icon></span>
                                                    </button> 
                                                </div>
                                            </div>                                
                                }                                                                                    
                            </div>
                    }    
                </div>

                {/* C3 */}                  
                {(props.boolSeccValidarOCambiarIdSponsor === false)    
                    ?   <div className='flex flex-col items-center justify-center w-full h-24 text-center border-2 border-blue-900 xs:h-14'> {/* Contenedor 3 */}                            
                            <div className='flex flex-col w-full h-full space-y-2 border-2 xs:flex-row xs:space-y-0'>   
                                <div className="flex flex-col items-center justify-center w-full">
                                    <button className='px-5 py-2 text-xs font-semibold text-yellow-200 bg-blue-900 rounded-lg sm:mr-1 xs:my-2'
                                            disabled={isAuthenticating} 
                                            onClick={fxSeccEsMiPatrocinadorURL}
                                    >
                                        <FormattedMessage id="Es mi Patrocinador" />
                                        {/* Es mi Patrocinador */}
                                    </button>
                                </div> 
                                <div className="flex flex-col items-center justify-center w-full">
                                    <button className='px-3 py-2 text-xs font-semibold text-gray-200 bg-red-700 rounded-lg'
                                            disabled={isAuthenticating} 
                                            onClick={fxSeccModfIdSponsor}
                                    >
                                        <FormattedMessage id="Cambiar Patrocinador" />
                                        {/* Cambiar Patrocinador */}
                                    </button>
                                </div>
                            </div>
                                                    
                        </div>
                    :   ""
                }

                {/* C4*/} 
                {(props.mostrarSeccBoolUsernameInput)
                    ?   <div className='flex flex-col items-center justify-center w-full p-1 border-2'>
                            {(props.mostrarBoolUsernameBDD)
                                ?   <div className='flex flex-col items-center justify-center w-full border-2 xs:flex-row'>
                                        <div className="flex flex-col items-center justify-center text-xs w-full px-0.5 py-2 bg-lime-800 text-gray-900">
                                            <FormattedMessage id="UserName a Registrar" />
                                            {/* UserName a Registrar */}
                                        </div>
                                        <div className="flex flex-col items-center justify-center w-full p-2 text-gray-200 bg-teal-900">
                                            {props.userNameNew}
                                        </div>                                            
                                    </div>                                
                                : (props.boolSpinningOIngreseNewUsernameInput )
                                    ?   <div className="flex flex-row gap-3">
                                            <Button>
                                                <Spinner aria-label="Spinner button example" />
                                                <span className="pl-3">
                                                    Validating ...
                                                </span>
                                            </Button>
                                        </div>
                                    :   <div className='flex flex-col items-center justify-center w-full '>
                                            <div className="block mb-1 font-bold">
                                                <Label
                                                htmlFor="username"
                                                value="Ingrese Username / Enter user"
                                                />
                                            </div>
                                            <div className='flex flex-row items-center justify-center bg-white'>
                                                <div className='flex flex-col items-center justify-center'>                                                
                                                    <TextInput
                                                        id="username"
                                                        type="text"                                             
                                                        placeholder="It must contain 8 characters"
                                                        required={true}
                                                        maxLength={8} 
                                                        addon="@"                                                       
                                                        onChange={handleChangeUsernameLowercase} 
                                                    />
                                                </div>
                                                <button type="submit"
                                                        className={`${props.boolBotonValidarUser === false && 'opacity-30 cursor-not-allowed'}
                                                                    flex items-center justify-center text-amber-500 bg-green-800 
                                                                    hover:bg-blue-9 00 pt-2 px-2                                             
                                                        ` }  
                                                        disabled={!props.boolBotonValidarUser}
                                                        onClick={validarIdUsuarioBDD}
                                                >
                                                    <span className='text-2xl font-bold'><ion-icon name="enter-outline"></ion-icon></span>
                                                </button>
                                            </div>
                                        </div>                                        
                            }
                        </div>
                    :    ""
                } 
                {/* C5*/} 
                {(props.mostrarSeccBoolButtonRegistrar)
                    ?   <div className='flex flex-col items-center justify-center w-full p-1 border-2'>
                            <button     className='flex flex-col items-center justify-center px-3 py-2 text-white bg-blue-700 rounded-lg item hover:bg-blue-500 hover:text-gray-900 hover:font-bold'
                                        onClick={fxRegistrarNewUserDU}
                            >
                                <FormattedMessage id="REGISTRAR" />
                            </button>                            
                        </div>
                    :    ""
                } 

            </div>                 
        </div>
    )
}

 
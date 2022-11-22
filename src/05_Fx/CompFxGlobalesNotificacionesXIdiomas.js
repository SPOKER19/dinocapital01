//import { useNotification } from '@web3uikit/core';
import Cookies from 'universal-cookie';
const cookies = new Cookies(); 


//const dispatch = useNotification();  



const mensajesSAEspanish = [
    /*-- Nro.01  --*/    
 /*0*/  'Bienvenido,',
 /*1*/  'Link Copiado', //14 +
 /*2*/  'Por Favor Utilice la Red Principal de Binance (BNB).', //15
 /*3*/  'Por Favor Conectese a Metamask', //16
 /*4*/  'Consulta realizada Satisfactoriamente', //17
 /*5*/  'Registro Satisfectorio, Copie su Link de Referidos',//18 +
 /*6*/  'Registrando.......', //19 +
 /*7*/  'Email NO Registrado', //20 +
 /*8*/  'Email Eliminado Correctamente', //21 + 
 /*9*/  'Usuario MODIFICADO Exitosamente', //22+
 /*10*/ 'Id Usuario NO EXISTE', //23 +
 /*11*/ 'Correo Usuario YA ESTA REGISTRADO', //24 +
 /*12*/ 'Alias o UserName YA ESTA REGISTRADO', //25 +
 /*13*/ 'Proximamente!!!!',  //26 + 
 /*14*/ 'Usuario Encontrado, Copie su Link de Referidos',
 /*15*/ '',
 /*16*/ '',
 /*17*/ '',
 /*18*/ '',
 /*19*/ '',
 /*20*/ '',
];

const mensajesSAEnglish = [
    /*-- Nro.02  --*/
    'Welcome', //0    
    'Link copied', //1
    'Please use the binance main network (BNB).', //2
    'Please connect to metamask', //3
    'Consultarily conducted', //4
    'Satisfy registration, copy your referral link', //5
    'Registering .......', //6
    'Email not registered', //7
    'Email Deleted correctly', //8
    'User modified successfully', //9
    'User ID does not exist', //10
    'User Mail is already registered', //11
    'Alias or Username is already registered', //12
    'Coming soon !!!!', //13
    'User Found, copy your referral link', //14
    '', //15
    '', //16
    '', //17
    '', //18
    '', //18
    '', //19
    '', //20
    
];

const mensajesSAChinesee = [
    /*-- Nro.03  --*/
    '歡迎', //0
    '連鍵複製', //1
    '請使用Binance主網絡（BNB）', //2
    '請連接到MetAmask', //3
    '涉及宣布進行', //4
    '滿足註冊，複製您的推薦鏈接', //5
    '註冊.......', //6
    '電子郵件未註冊', //7
    '電子郵件正確刪除', //8
    '用戶成功修改', //9
    '用戶ID不存在', //10
    '用戶郵件已註冊', //11
    '別名或用戶名已註冊', //12
    '即將推出!!!!', //13
    '用戶找到，複製推薦鏈接', //14
    '', //15
    '', //16
    '', //17
    '', //18
    '', //18
    '', //19
    '', //20
];

const mensajesSARussian = [
    /*-- Nro.04  --*/
    'Добро пожаловать', //0
    'Ссылка скопирована', //1
    'Пожалуйста, используйте основную сеть Binance (BNB).', //2
    'Пожалуйста, подключитесь к метамаску', //3
    'Конкреативно проводится', //4
    'Удовлетворяйте регистрацию, скопируйте свою ссылку на реферал', //5
    'Регистрация .......', //6
    'Не зарегистрировано электронная почта', //7
    'Правильно удалили электронную почту', //8
    'У пользователя модифицирован успешно', //9
    'Идентификатор пользователя не существует', //10
    'Почта пользователя уже зарегистрирована', //11
    'Плины или имя пользователя уже зарегистрированы', //12
    'скоро !!!!', //13
    'Найдено пользователем, скопируйте свою реферальную ссылку', //14
    '', //15
    '', //16
    '', //17
    '', //18
    '', //18
    '', //19
    '', //20
];

const mensajesSAAleman = [
    /*-- Nro.05  --*/
    'Willkommen', //0
    'Link kopiert', //1
    'Bitte verwenden Sie das Binance-Hauptnetzwerk (BNB).', //2
    'Bitte mit Metamask verbinden', //3
    'konsultiert durchgeführt', //4
    'Die Registrierung erfüllen, Ihren Verweis-Link kopieren', //5
    'sich registrieren .......', //6
    'E-Mail nicht registriert', //7
    'E-Mail korrekt gelöscht', //8
    'User erfolgreich modifiziert', //9
    'Benutzer-ID ist nicht vorhanden', //10
    'User Mail ist bereits registriert', //11
    'Alias ​​oder Benutzername ist bereits registriert', //12
    'Kurz bald !!!!', //13
    'User gefunden, kopieren Sie Ihren Verweis-Link', //14
    '', //15
    '', //16
    '', //17
    '', //18
    '', //18
    '', //19
    '', //20
];

const mensajesSACroacia = [
    /*-- Nro.06  --*/
    'Dobrodošli', //0
    'Veza kopirana', //1
    'Molimo koristite glavnu mrežu za binance (BNB).', //2
    'Molimo povežite se s Metamaskom', //3
    'konzultarno provedeno', //4
    'Zadovoljiti registraciju, kopirajte svoj referentni link', //5
    'Registriranje .......', //6
    'E-pošta nije registrirana', //7
    'E-pošta ispravno izbrisana', //8
    'Korisnik je uspješno modificiran', //9
    'ID korisnika ne postoji', //10
    'Korisnička pošta je već registrirana', //11
    'Alias ​​ili korisničko ime je već registrirano', //12
    'Uskoro dolazi !!!!', //13
    'korisnik pronađen, kopirajte svoju referentnu vezu', //14
    '', //15
    '', //16
    '', //17
    '', //18
    '', //18
    '', //19
    '', //20
];

const mensajesSAIndia = [
    /*-- Nro.07  --*/
    'आपका स्वागत है', //0
    'लिंक की नकल', //1
    'कृपया बिनेंस मुख्य नेटवर्क (बीएनबी) का उपयोग करें।', //2
    'कृपया मेटामास्क से कनेक्ट करें', //3
    'परामर्श रूप से आयोजित किया गया', //4
    'पंजीकरण को संतुष्ट करें, अपने रेफ़रल लिंक की प्रतिलिपि बनाएँ', //5
    'पंजीकरण .......', //6
    'ईमेल पंजीकृत नहीं है', //7
    'ईमेल सही ढंग से हटा दिया गया', //8
    'उपयोगकर्ता ने सफलतापूर्वक संशोधित किया', //9
    'उपयोगकर्ता आईडी मौजूद नहीं है', //10
    'उपयोगकर्ता मेल पहले से ही पंजीकृत है', //11
    'उपनाम या उपयोगकर्ता नाम पहले से ही पंजीकृत है', //12
    'जल्द ही आ रहा है !!!!', //13
    'उपयोगकर्ता मिला, अपने रेफरल लिंक की प्रतिलिपि बनाएँ', //14
    '', //15
    '', //16
    '', //17
    '', //18
    '', //18
    '', //19
    '', //20
];

const mensajesSAArabe = [
    /*-- Nro.08 --*/
    'اهلا',     
    'انسخ الرابط', 
    'يرجى استخدام الشبكة الرئيسية بينانس (BNB).', //2
    'يرجى الاتصال بالميتاماتك', 
    ' أجريت مستشارا', 
    'إرضاء التسجيل، انسخ رابط الإحالة الخاص بك', 
    'تسجيل .......', 
    'البريد الإلكتروني غير مسجل', 
    'البريد الإلكتروني المحذوف بشكل صحيح', 
    'تعديل المستخدم بنجاح', 
    'معرف المستخدم غير موجود',
    'بريد المستخدم مسجل بالفعل',
    'الاسم المستعار أو اسم المستخدم مسجل بالفعل',
    'قريبا !!!!', 
    'وجد المستخدم، انسخ رابط الإحالة الخاص بك',
    '', //15
    '', //16
    '', //17
    '', //18
    '', //18
    '', //19
    '', //20
];

const mensajesSAFrances = [
    /*-- Nro.09 --*/
    'Bienvenue', //0
    'Link copié', //1
    'Veuillez utiliser le réseau principal de la binance (BNB).', //2
    'Veuillez vous connecter à Metamask', //3
    'Réalisé consultaté', //4
    'Satisfaire l enregistrement, copiez votre lien de référence', //5
    'Enregistrement .......', //6
    'Email non enregistré', //7
    'Email supprimé correctement', //8
    'Utilisateur modifié avec succès', //9
    'L ID utilisateur n existe pas', //10
    'Le courrier utilisateur est déjà enregistré', //11
    'Alias ​​ou nom d utilisateur est déjà enregistré', //12
    'Bientôt à venir !!!!', //13
    'Utilisateur trouvé, copiez votre lien de référence', //14
    '', //15
    '', //16
    '', //17
    '', //18
    '', //18
    '', //19
    '', //20
];

const mensajesSAItaliano = [
    /*-- Nro.10 --*/
    'Benvenuto.', //0
    'link copiato', //1
    'Utilizzare la rete principale di Binance (BNB).', //2
    'Si prega di connettersi a Metamask', //3
    'Consultativamente condotto', //4
    'Soddisfa la registrazione, copia il tuo collegamento di riferimento', //5
    'Registrazione .......', //6
    'Email non registrata', //7
    'Email cancellata correttamente', //8
    'Utente modificato con successo', //9
    'L ID utente non esiste', //10
    'La posta dell utente è già registrata', //11
    'alias o nome utente è già registrato', //12
    'Prossimamente presto !!!!', //13
    'Utente trovato, copia il tuo collegamento di riferimento', //14
    '', //15
    '', //16
    '', //17
    '', //18
    '', //18
    '', //19
    '', //20
];

const mensajesSAIrlandes = [
    /*-- Nro.11 --*/
    'Fáilte', //0
    'Nasc a chóipeáil', //1
    'Bain úsáid as an bpríomh-Líonra Binence (BNB).', //2
    'Ceangail le Metamask le do thoil', //3
    'Rinneadh go ndéileáiltear leo', //4
    'Clárú a shásamh, cóipeáil do nasc atreoraithe', //5
    'Clárú .......', //6
    'R-phost nach bhfuil cláraithe', //7
    'Scrios an ríomhphost i gceart', //8
    'Athraíodh an t-úsáideoir go rathúil', //9
    'Níl ID Úsáideora ann', //10
    'Tá post úsáideora cláraithe cheana féin', //11
    'Tá ailias nó ainm úsáideora cláraithe cheana féin', //12
    'Ag teacht go luath !!!!', //13
    'Fuarthas an t-úsáideoir, cóipeáil do nasc atreoraithe', //14
    '', //15
    '', //16
    '', //17
    '', //18
    '', //18
    '', //19
    '', //20
];

const mensajesSAPortug = [
    /*-- Nro.12 --*/
    'Receber', //0
    'Link de cópia', //1
    'Por favor, use a rede principal BINANCE (BNB).', //2
    'Por favor, conecte-se a metamask', //3
    'Consulta feita satisfatoriamente', //4
    'Satisfazer o registro, copie seu link de referência', //5
    'Registrando .......', //6
    'E-mail não registrado', //7
    'E-mail excluído corretamente', //8
    'Usuário modificado com sucesso', //9
    'ID do usuário não existe', //10
    'O usuário do email já está registrado', //11
    'Alias ​​ou nome de usuário já está registrado', //12
    'Brevemente !!!!', //13
    'usuário encontrado, copie seu link de referência', //14
    '', //15
    '', //16
    '', //17
    '', //18
    '', //19
    '', //20
];

/* export const handleNewNotification = (_notifyType, _title, _message) => {
    dispatch({
        type: _notifyType,
        title: _title,
        message: _message,                    
        position: 'bottomL',
        //position:_position || 'bottomL',
        //icon: _icon || "",        
    });
    return; 
  }; */


/* NOTIFICAIONES MEDIANTE ARRAYS */
export function FxMostrarNOTIFICACIONESdeArrays (_IdTexto) { 
    const idiomaActCook = cookies.get("ckIdiomaActual");    
    //console.log('idiomaActCook = ', idiomaActCook);

    if( idiomaActCook === 'es'){ 
        return  mensajesSAEspanish[_IdTexto];
    }
    if( idiomaActCook === 'en'){ 
        return  mensajesSAEnglish[_IdTexto]
    }
    if( idiomaActCook === 'zh'){ 
        return  mensajesSAChinesee[_IdTexto]
    }
    if( idiomaActCook === 'ru'){ 
        return  mensajesSARussian[_IdTexto]
    }
    if( idiomaActCook === 'de'){ 
        return  mensajesSAAleman[_IdTexto]
    }    
    if( idiomaActCook === 'hr'){ 
        return  mensajesSACroacia[_IdTexto]
    }
    if( idiomaActCook === 'hi'){ 
        return  mensajesSAIndia[_IdTexto]
    }
    if( idiomaActCook === 'ar'){ 
        return  mensajesSAArabe[_IdTexto]
    }
    if( idiomaActCook === 'fr-CH'){ 
        return  mensajesSAFrances[_IdTexto]
    }
    if( idiomaActCook === 'it-CH'){ 
        return  mensajesSAItaliano[_IdTexto]
    }
    if( idiomaActCook === 'ga-IE'){ 
        return  mensajesSAIrlandes[_IdTexto]
    }
    if( idiomaActCook === 'pt-BR'){ 
        return  mensajesSAPortug[_IdTexto]
    }  
    else{
    }
    
} 


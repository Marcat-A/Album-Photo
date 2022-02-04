import React, {useState} from 'react';
import English from"../en-US.json";
import French from "../fr-CA.json";
import { IntlProvider } from 'react-intl';


const langContext = React.createContext();

const LangProvider = ({children}) => {
    let localParDefaut;
    let messagesParDefaut;
    const lang = localStorage.getItem('lang');

    if(lang){
        localParDefaut = lang

        if(lang === "en-US"){
            messagesParDefaut = English;
        }else if (lang === 'fr-CA'){
            messagesParDefaut = French
        }else {
            localParDefaut = 'en-us'
            messagesParDefaut = English
        }
    }
    const [messages,changeMessages]= useState(messagesParDefaut);
    const [local, changeLocal]= useState(localParDefaut);
    const changeLanguage = (language) => {
        switch (language){
            case 'French': changeMessages(French);
            changeLocal('French');
            localStorage.setItem('lang','fr-CA')
            break;
            case 'English': changeMessages(English);
            changeLocal('English');
            localStorage.setItem('lang','en-US')
            break;
            default: changeMessages(English);
            changeLocal('English');
            localStorage.setItem('lang','en-US')
        }

    }
    
    return(
        <langContext.Provider value={{changeLanguage : changeLanguage}}>
            <IntlProvider locale={local} messages={messages}>
            {children} 
            </IntlProvider>
        </langContext.Provider>
    )
}

export  {LangProvider, langContext};

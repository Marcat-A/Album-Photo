import React, {useContext} from 'react';
import { FormattedMessage } from 'react-intl';
import { langContext } from '../../lang/context/langContext';


function Language() {
    const changeLanguages = useContext(langContext)
    const langues = [
        {id:1, name:"Français",value:"French" },
        {id:2, name:"English",value:"English" }
    ]
   
    
  return <div className='section language'>
      <h1 className='lang-title'><FormattedMessage id="language.title" defaultMessage="Merci de choisir le language que vous souhaitez utiliser:" /></h1>
      {langues.map((langue) => (
          <button className='btn lang-btn' onClick={() => changeLanguages.changeLanguage(langue.value)} key={langue.id}>{langue.name}</button>
      ))}
  </div>;
}

export default Language;

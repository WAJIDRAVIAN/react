import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";
//Google API Key
// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

const options =[
    {
        label:'Punjabi',
        value:'pun'        
    },
    {
        label:'Urdu',
        value:'ur'        
    },
    {
        label:'English',
        value:'en'        
    },
    {
        label:'Arabic',
        value:'ar'    
    }
];



const Translate=()=>{
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');
    return(
        <div>
            <br/>
            <div className="ui form">
                <div className="field">
                    <input 
                        value={text}
                        onChange={(e)=>setText(e.target.value)}
                        placeholder='Please enter the text to translate'
                    />
                </div>
            </div>
            <Dropdown
                label='Please Select a language'
                options={options} 
                selected={language} 
                onSelectedChange={setLanguage}
            />
            <hr/>
            <h3 className="ui header">Translation</h3>
            <Convert language={language} text={text}/>
        </div>
    );
}

export default Translate;
import React, { useState } from "react";
import Dropdown from "./Dropdown";

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
        value:'eng'        
    },
    {
        label:'Arabic',
        value:'ar'    
    }
];



const Translate=()=>{
    const [language, setLanguage] = useState(options[0]);
    return(
        <div>
            <Dropdown
                label='Please Select a language'
                options={options} 
                selected={language} 
                onSelectedChange={setLanguage}
            />
        </div>
    );
}

export default Translate;
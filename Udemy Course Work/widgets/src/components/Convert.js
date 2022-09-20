import React,  {useState,  useEffect} from "react";


const Convert=({language, text})=>{
    useEffect (()=>{
        console.log('Api request to translate text');
    }, [language, text]);
    return (
        <div>
            Convert
        </div>
    );
}

export default Convert;
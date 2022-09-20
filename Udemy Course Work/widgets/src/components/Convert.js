import React,  {useState,  useEffect} from "react";
import axios from "axios";

//Google API Key
// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
const Convert=({language, text})=>{
    const [results, setResults] = useState([]);
    useEffect(()=>{
        const translate = async()=>{
            const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2',{}, {
                params:{
                    q:text,
                    target:language.value,
                    key:'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            });
            setResults(data);
            console.log(data);
        };
        if (text) {
            const timerId = setTimeout(()=>{
                translate();
            }, 500);
            return()=>{
                clearTimeout(timerId);
            };
        }
    }, [language, text]);
    return (
        <div>
            Convert
        </div>
    );
}

export default Convert;
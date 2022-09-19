import React, {useEffect, useState} from 'react';
import axios from 'axios';
const Search = () => {
    const [term, setTerm] =useState('');
    const [results, setResults] = useState([]);

    console.log(results);
    useEffect(()=>{
        const search = async()=>{
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params:{
                    action:'query',
                    list:'search',
                    origin:'*',
                    format:'json',
                    srsearch:term
                }
            });
            setResults(data);
        };
        if (term) {
            search();
        }
    }, [term]);
  return (
    <div>
        <div className='ui form'>
            <div className='field'>
                <label>Enter Search Keyword</label>
                <input value={term} onChange={event=>setTerm(event.target.value)} className='input'/>
            </div>
        </div>
    </div>
  );
};

export default Search;
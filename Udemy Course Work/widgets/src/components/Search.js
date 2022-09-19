import React, {useEffect, useState} from 'react';
import axios from 'axios';
const Search = () => {
    const [term, setTerm] =useState('programming');
    const [results, setResults] = useState([]);

    console.log(results);
    // Object.keys(results).map((key) => results[key].map())
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
            setResults(data.query.search);
        };
        if (term) {
            search();
        }
    }, [term]);

    const renderedResults = results?.map((result)=>{
        return(
            <div className='item' key={result.pageid}>
                <div className='content'>
                    <div className='header'>
                        {result.title}
                    </div>
                    {result.snippet}
                </div>
            </div>
        );
    });

  return (
    <div>
        <div className='ui form'>
            <div className='field'>
                <label>Enter Search Keyword</label>
                <input value={term} onChange={event=>setTerm(event.target.value)} className='input'/>
            </div>
        </div>
        <div className='ui celled list'> {renderedResults}</div>
    </div>
  );
};

export default Search;
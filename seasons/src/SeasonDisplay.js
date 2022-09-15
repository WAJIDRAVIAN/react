import React from 'react';
// import ReactDOM from 'react-dom/client';

const getSeason =(lat, month)=>{
    if (month>2 && month<9) {
       return lat > 0 ? "Summer" : "Winter";
    }
    else{
        return lat > 0 ? "Winter" : "Summer";
    }
}
const SeasonDisplay =props=>{
    const season = getSeason(props.lat, new Date().getMonth());
    
    const icon = season==='Winter'? 'snowflake icon' : 'sun icon';
    return  (
        <div>
            <i className={`${icon}`}/>
            <br/>
             <h1>{season}</h1>
             <i className={`${icon}`}/>
        </div>
    );
};

export default SeasonDisplay;
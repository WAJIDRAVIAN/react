import React from 'react';
// import ReactDOM from 'react-dom/client';


const seasonConfig={
    Summer:{
        text: 'let\'s hit the beach',
        iconName: 'sun icon'
    },
    Winter:{
        text: 'It\'s already chilling',
        iconName: 'snowFlake icon'
    }
}

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
    const {text, iconName} = seasonConfig[season];
    return  (
        <div>
            <i className={`${iconName}`}/>
            <br/>
             <h1 >{text}</h1>
             <i className={`${iconName}`}/>
        </div>
    );
};

export default SeasonDisplay;
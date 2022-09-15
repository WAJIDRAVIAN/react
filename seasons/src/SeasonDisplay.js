import React from 'react';
// import ReactDOM from 'react-dom/client';

const getSeason =(lat, month)=>{
    if (month>2 && month<9) {
       return lat > 0 ? "Summer" : "Winter";
    }
}
const SeasonDisplay =props=>{
    const season = getSeason(props.lat, new Date().getMonth());

    return  (
        <div>SeasonDisplay
            <br/>
            Season: {season}
        </div>
    );
};

export default SeasonDisplay;
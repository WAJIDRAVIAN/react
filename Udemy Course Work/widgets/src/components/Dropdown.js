import React from "react";

const Dropdown = ({options})=>{
    const renderedOptions = options.map((option)=>{
        return(
            <div key={option.value}>
                {option.label}
            </div>
        );
    })
return (
    <div className="ui form">
        <div className="field">
            <label className="ui label">Select a color</label>
            <div className="ui selection dropdown visible active">
                <i className="ui dropdown icon"></i>
                <div className="text">Select option</div>
                <div className="ui menu visible transition">
                    {renderedOptions}
                </div>
            </div>
        </div>
        
    </div>
);
}

export default Dropdown;
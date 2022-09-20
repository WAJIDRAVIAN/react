import React from "react";

const Dropdown = ({options, selected, onSelectedChange})=>{
    const renderedOptions = options.map((option)=>{
        return(
            <div className="item" onClick={()=>onSelectedChange(option)} key={option.value}>
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
                <div className="default text">{selected.label}</div>
                <div className="item">
                    {renderedOptions}
                </div>
            </div>
        </div>
        
    </div>
);
}

export default Dropdown;
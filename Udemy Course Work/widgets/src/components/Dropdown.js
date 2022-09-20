import React, { useState, useEffect } from "react";

const Dropdown = ({options, selected, onSelectedChange})=>{
    const [open, setOpen] = useState(false);

    useEffect(() => {
        document.body.addEventListener(
          "click",
          () => {
            setOpen(false);
          },
          { capture: true }
        );
      }, []);


    const renderedOptions = options.map((option)=>{
        if (option.value===selected.value) {
            return null;
        }
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
            <div onClick={()=>{setOpen(!open)}} className={`ui selection dropdown ${open?'visible active':''}`}>
                <i className="ui dropdown icon"></i>
                <div className="text">{selected.label}</div>
                <div className={`menu ${open?'visible transition':''}`}>
                    {renderedOptions}
                </div>
            </div>
        </div>
        
    </div>
);
}

export default Dropdown;

/**
 * useEffect(() => {
    document.body.addEventListener(
      "click",
      () => {
        setOpen(false);
      },
      { capture: true }
    );
  }, []);
 */
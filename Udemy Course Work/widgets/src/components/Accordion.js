import React, {useState} from "react";


const Accordion=({items})=>{
    const [activeIndex, setActiveIndex] = useState(null);
    const onTitleClick=(index)=>{
        setActiveIndex(index);        
        console.log('Title clicked:', index)
    }

    const renderedItems = items.map((item,  index)=>{
        return(
            <React.Fragment key={item.title}>
                    <div className="title active" onClick={()=>onTitleClick(index)}>
                        <i className="dropdown icon"></i>
                        {item.title}
                    </div>
                    <div className="content active">
                        <p> {item.content} </p>
                    </div>
                
            </React.Fragment>
        );
    });
    return (
        <div className="ui styled accordion">
            {renderedItems}
            <h2> Active index: {activeIndex}</h2>
        </div>
    );
}

export default Accordion;
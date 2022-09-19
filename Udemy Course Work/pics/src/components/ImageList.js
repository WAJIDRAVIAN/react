import React from "react";

const ImageList = props=>{
    const images = props.images.map(({description, id, urls})=>{
        return (
            <img src={urls.regular} key={id} alt={description}/>
        );
    });
return (
    <div>
        <ul>
            Image List
            <br/>
            {images}
        </ul>
    </div>
    );
};

export default ImageList;
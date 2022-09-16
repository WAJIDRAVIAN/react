import React from "react";

const ImageList = props=>{
    const images = props.images.map(image=>{
        return (
            <img src={image.urls.regular} alt=""/>
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
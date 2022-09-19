import './ImageList.css'
import React from "react";
import ImageCard from './ImageCard';
const ImageList = props=>{
    const images = props.images.map(image=>{
        return (
            <ImageCard image={image} key={image.id}/>
        );
    });
return (
    <div className='image-list'>
            <div>Image List</div>
            {images}
    </div>
    );
};

export default ImageList;
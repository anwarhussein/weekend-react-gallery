import React from "react"
import { useState} from 'react';

function GalleryItem(props) {

    const [imageShow, setImageShow] = useState(true);
    const [imageDescription, setImageDescription] = useState(false)

    const handleClick = () =>{
        setImageShow(!imageShow);
        setImageDescription(!imageDescription);
    }

    return (
        <>
            <div onClick ={handleClick} >
            {imageShow  && <img src={props.image.path} alt={props.image.description}/>}
            {imageDescription && <p>{props.image.description}</p>}
            <button>likes!</button>
            <p>0 people love this!</p> 
            
            </div>
       </>
    
    )
}

export default GalleryItem

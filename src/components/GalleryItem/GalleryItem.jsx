import React from "react"
import { useState} from 'react';

function GalleryItem(props) {

    const [imageShow, setImageShow] = useState(true);
    const [imageDescription, setImageDescription] = useState(false);
    

    const handleClick = () =>{
        setImageShow(!imageShow);
        setImageDescription(!imageDescription);
    }
    
    const handleUpdateLikes = (itemLikedId) =>{
        console.log("Item photo the user clicked to like", itemLikedId );

        props.updateLikes(itemLikedId);
    }
    
    
    return (
        <>
            <div>
            <div onClick ={handleClick}>
            {imageShow  && <img src={props.image.path} alt={props.image.description}/>}
            {imageDescription && <p>{props.image.description}</p>}
            </div>
            <div><button onClick={() => handleUpdateLikes(props.image.id)}>likes!</button>
            <p>{props.image.likes} people love this!</p> </div>
            </div>  
       </>
    
    )
}

export default GalleryItem

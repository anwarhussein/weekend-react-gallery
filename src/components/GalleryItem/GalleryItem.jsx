import React from "react"
import { useState } from 'react';

//Creates the galleryitem component
function GalleryItem(props) {
//Declares the variables to keep track of the change in the image
//and description states.
    const [imageShow, setImageShow] = useState(true);
    const [imageDescription, setImageDescription] = useState(false);

//Handles the conditional rendering for the image and
//description changing states
    const handleClick = () => {
        setImageShow(!imageShow);
        setImageDescription(!imageDescription);
    }
//Handles the likes and updates the number of likes
//on click of the button
    const handleUpdateLikes = (imageLikedId) => {
        console.log("Image id the user clicked to like", imageLikedId);

        props.updateLikes(imageLikedId);
    }

    return (
        <>
            <div>
                <div onClick={handleClick}>
                    {imageShow && <img src={props.image.path} alt={props.image.description} />}
                    {imageDescription && <p>{props.image.description}</p>}
                </div>
                <div><button onClick={() => handleUpdateLikes(props.image.id)}>likes!</button>
                    <p>{props.image.likes} people love this!</p>
                </div>
            </div>
        </>

    )
}

export default GalleryItem

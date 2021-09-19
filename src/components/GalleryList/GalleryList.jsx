import React from 'react'
import GalleryItem from '../GalleryItem/GalleryItem';

// Creates the GalleryList component
function GalleryList(props) {
//Stores the images array and sends the props image
//to the GalleryItemi component
    const arrayToDisplay = props.galleryList.map((image, index) => {
        return <GalleryItem image={image} key={image.id}
            updateLikes={props.updateLikes}

        />

    });
//appends the returned images to DOM/rendering
    return (
        <div className="image-grid">
            {arrayToDisplay}
        </div>
    )
}

export default GalleryList;

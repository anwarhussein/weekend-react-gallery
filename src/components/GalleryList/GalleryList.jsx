import React from 'react'
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList( props) {

const arrayToDisplay = props.galleryList.map((image, index) => {
        return <GalleryItem image={image} key= {image.id}
              updateLikes= {props.updateLikes}
              fetchImages= {props.fetchImages}

        />
       
       });

    return (
        <div className="image-grid">
          {arrayToDisplay}
        </div>
    )
}

export default GalleryList;

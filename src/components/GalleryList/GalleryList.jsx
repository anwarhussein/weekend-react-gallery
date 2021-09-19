import React from 'react'

function GalleryList( props) {

const arrayToDisplay = props.galleryList.map((image, index) => {
          return <div key={image.id}>{image.description}</div>
       
       });

      
    return (
        <div>
          {arrayToDisplay}
        </div>
    )
}

export default GalleryList;

import React from "react"

function GalleryItem(props) {



    return (
        <div ><img src={props.image.path} alt={props.image.description}/>
            <p>{props.image.description}</p>
            <button>likes!</button>
            <p>0 people love this!</p>
            
        </div>
    )
}

export default GalleryItem

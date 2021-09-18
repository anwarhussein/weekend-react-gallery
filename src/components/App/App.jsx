import axios from 'axios';
import React from 'react';
import { useState, useEffect} from 'react';
import './App.css';

function App() {

  const [galleryList, setGalleryList] = useState([]);
  const [loveIt, setLoveIt] = useState(0);
  const [imageDescription, setImageDescription] = useState(false);

  
  const fetchImages =() =>{

    axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) =>{
        console.log(response.data);
        setGalleryList(response.data);
    }).catch((error) =>{
      alert('Error making GET request.' , error);
    });
  }

  useEffect(() =>{
    fetchImages();
  }, []);


  const handleClick = (index) =>
  alert('button was clicked at position',index)

   //setLoveIt(prev => prev +1);

  const handleDescription = () =>{
    return;
  }

  
    return (
      <>
      
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        
        <ul className="image-grid" >
           {galleryList.map((image, index) =>{
                 return <div key= {image.id}><img src={image.path} onClick={handleDescription} alt= {image.description}/>
                 <button onClick={() =>handleClick(key)}>likes</button>
                 <p>0 people love this!</p>
                 </div>
})}
          
        </ul>
        
      
        
       
        
      </div>
      
         
      </>
    );
}

export default App;

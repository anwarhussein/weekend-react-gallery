import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import GalleryList from '../GalleryList/GalleryList';
import './App.css';

function App() {

  const [galleryList, setGalleryList] = useState([]);
  
  const fetchImages = () => {

    axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      console.log(response.data);
      setGalleryList(response.data);
    }).catch((error) => {
      alert('Error making GET request.', error);
    });
  }

  useEffect(() => {
    fetchImages();
  }, []);

  const updateLikes = (itemLikedId) =>{
    axios({
       method: 'PUT',
       url:`/gallery/like/ ${itemLikedId}`,
    })
    .then((response) =>{
      fetchImages();
    }).catch((error) =>{
      alert('Error in liking an image');
      console.log(error);
    });
  }

 


  return (
    
    
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <p>Gallery goes here</p>
      <div>
     
      <GalleryList  galleryList ={galleryList}
        updateLikes={updateLikes}
        fetchImages = {fetchImages}

      />

      </div>
      
    </div>
    

  );

}

export default App;

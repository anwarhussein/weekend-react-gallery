import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import GalleryList from '../GalleryList/GalleryList';
import './App.css';

function App() {
  // useState declaration
  const [galleryList, setGalleryList] = useState([]);

  //fetches images from the server
  const fetchImages = () => {
  //ajax call to get the images
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
  //Ensures rendering at least once
  //Prevents re-rendering/infinite loop
  useEffect(() => {
    fetchImages();
  }, []);

  //Hits the server to get images with'likes' and updates
  //on click of the like button
  const updateLikes = (imageLikedId) => {
    axios({
      method: 'PUT',
      url: `/gallery/like/ ${imageLikedId}`,
    })
      .then((response) => {
        fetchImages();
      }).catch((error) => {
        alert('Error in liking an image');
        console.log(error);
      });
  }
// returns the App component for onward rendering
  return (

    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <p>Gallery goes here</p>
      <div>
{/* sends props to the children e.g GalleryList and GalleryItem */}
        <GalleryList galleryList={galleryList}
          updateLikes={updateLikes}

        />

      </div>

    </div>


  );

}

export default App;

import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import GalleryList from '../GalleryList/GalleryList';
import './App.css';

function App() {

  const [galleryList, setGalleryList] = useState([]);
  const [loveIt, setLoveIt] = useState(0);
  


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


  const handleClick = () =>
    alert('button was clicked at position')


  return (
    
    
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <p>Gallery goes here</p>
      <div>
     
      <GalleryList galleryList ={galleryList}/>
      </div>
      
    </div>
    

  );

}

export default App;

import axios from 'axios';
import React from 'react';
import { useState, useEffect} from 'react';
import './App.css';

function App() {

  const [galleryList, setGalleryList] = useState([]);

  
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

    return (
      <>
      
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        {/* <img src="images/goat_small.jpg"/> */}
        <ul>
        {galleryList.map(item =>
                 <img src={item.path}/>
          )}

        </ul>
      </div>
      
      </>
    );
}

export default App;

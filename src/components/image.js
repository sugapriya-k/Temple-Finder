import React, { useState, useEffect } from 'react';

const ImageDisplay = () => {
  const [imageUrl, setImageUrl] = useState('');

  const fetchImage=()=>{
    fetch('http://localhost:8080/places/images/1') 
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        setImageUrl(url);
      })
      .catch((error) => {
        console.log('Error fetching image:', error);
      });

  }
  useEffect(() => {
    fetchImage()
  }, []);

  return <img src={imageUrl} alt="Image" />;
};

export default ImageDisplay;
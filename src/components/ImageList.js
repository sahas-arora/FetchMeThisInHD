

import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';

let ImageList = (props) => {

    let images = props.images.map((image) => {
    return (
       <ImageCard key={image.id} image={image} />
       );
  });

    return (
      <div className="image-list">
      {images}
    </div>
  );
  };


export default ImageList;

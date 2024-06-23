// components/GalleryItem.js
import React from 'react';

const GalleryItem = ({ imageUrl, onClick }) => {
  return (
    <div className="relative cursor-pointer overflow-hidden h-64 md:h-80 lg:h-96" onClick={onClick}>
      <img src={imageUrl} alt="Gallery Item" className="object-cover w-full h-full" />
    </div>
  );
};

export default GalleryItem;

import React, { useState, useEffect } from 'react';

function PlansImgs({ galeria }) {
  const [galleryImg, setGalleryImg] = useState([]);

  useEffect(() => {
    if (galeria && galeria.length > 0) {
      setGalleryImg(galeria);
    }
  }, [galeria]);

  if (!galleryImg || galleryImg.length === 0) {
    return <div>No images to display</div>;
  }

  return (
    <div className='img-plans-intro'>
      {galleryImg.map((gal, index) => (
        <img key={index}  src={gal} alt="Paisaje Beleron" style={{ animationDelay: `${index * 0.1}s` }} />
      ))}
    </div>
  );
}

export default PlansImgs;

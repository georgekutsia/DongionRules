import React, { useState, useEffect } from 'react';

function IntroImgsComponent({ gallery,  }) {
  const [galleryImg, setGalleryImg] = useState([]);

  useEffect(() => {
    if (gallery && gallery.length > 0) {
      setGalleryImg(gallery);
    }
  }, [gallery]);


  if (!galleryImg || galleryImg.length === 0) {
    return <div>No images to display</div>;
  }

  return (
    <div className='intro-img-paisaje'>
      {galleryImg.slice(0, 6).map((gal, index) => (
        <img key={index} className='imgIntroPaisaje' src={gal} alt="Paisaje Beleron" style={{ animationDelay: `${index * 0.1}s` }}
        />
      ))}
    </div>
  );
}

export default IntroImgsComponent;

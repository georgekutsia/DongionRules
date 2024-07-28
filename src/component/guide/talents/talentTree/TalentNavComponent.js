import React, { useState } from 'react';

const TalentNavComponent = ({ img, description1, description2 }) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <div className="image-container">
      {loading && <div className="loaderCubeRotate"></div>}
      <img src={img} alt="Talent" onLoad={handleImageLoad} style={{ display: loading ? 'none' : 'block' }} className='talent-tree-img-luchador' />
      {!loading && <div className="talent-tree-img-hover-text">{description1} <span >{description2}</span></div>}
    </div>
  );
};

export default TalentNavComponent;

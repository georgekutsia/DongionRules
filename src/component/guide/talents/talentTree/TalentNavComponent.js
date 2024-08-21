import React, { useState } from 'react';

const TalentNavComponent = ({amountOfPoints, img, color, description1, description2 }) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <div className="image-container-talent-tree">
      {loading && <div className="loaderCubeRotate"></div>}
      <h2 className="image-container-talent-tree-counter">{amountOfPoints}</h2>
      <img src={img} alt="Talent" onLoad={handleImageLoad} style={{ display: loading ? 'none' : 'block' }} className={`talent-tree-img-luchador  ${color}`} />
      {!loading && <div style={{fontSize:"1rem"}} className="talent-tree-img-hover-text">{description1} <span>{description2}</span></div>}
    </div>

  );
};

export default TalentNavComponent;

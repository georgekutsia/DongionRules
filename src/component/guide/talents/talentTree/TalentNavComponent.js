import React, { useState } from 'react';
import TalentTreeButtonComponent from './TalentTreeButtonComponent';

const TalentNavComponent = ({ img, color, description1, description2 }) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <div className="image-container">
      {loading && <div className="loaderCubeRotate"></div>}
      <img src={img} alt="Talent" onLoad={handleImageLoad} style={{ display: loading ? 'none' : 'block' }} className={`talent-tree-img-luchador  ${color}`} />
      {!loading && <div className="talent-tree-img-hover-text">{description1} <span>{description2}</span></div>}
      <div className='talent-tree-row'>
      <TalentTreeButtonComponent vertical  filled={"talent-tree-filled-ver"}  />
      <TalentTreeButtonComponent  empty  btnWidth={"40%"}/>
      <TalentTreeButtonComponent vertical  filled={"talent-tree-filled-ver"}/>
      </div>
    </div>
  );
};

export default TalentNavComponent;

import React, { useEffect, useState } from 'react';
import data from "../../data/map";

function MapScreen({tamaño}) {
  const [obs, setObs] = useState([]);
  useEffect(() => {
    setObs(data);
  }, []);

  const [images, setImages] = useState([]);

  useEffect(() => {
    const randomImages = Array(tamaño)
      .fill(null)
      .map(() => {
        const randomIndex = Math.floor(Math.random() * obs.length);
        return obs[randomIndex];
      });
    setImages(randomImages);
  }, [obs]);

  return (
    <div className='big-box-map'>
      <div>
        <img src={`${images[0]}`} alt={images[0]} />
        <img src={`${images[1]}`} alt={images[1]} />
        <img src={`${images[2]}`} alt={images[2]} />
        <img src={`${images[12]}`} alt={images[12]} />
      </div>
      <div>
        <img src={`${images[3]}`} alt={images[3]} />
        <img src={`${images[4]}`} alt={images[4]} />
        <img src={`${images[5]}`} alt={images[5]} />
        <img src={`${images[13]}`} alt={images[13]} />
      </div>
      <div>
        <img src={`${images[6]}`} alt={images[6]} />
        <img src={`${images[7]}`} alt={images[7]} />
        <img src={`${images[8]}`} alt={images[8]} />
        <img src={`${images[14]}`} alt={images[14]} />
      </div>
      <div>
      <img src={`${images[9]}`} alt={images[9]} />
      <img src={`${images[10]}`} alt={images[10]} />
      <img src={`${images[11]}`} alt={images[11]} />
      <img src={`${images[15]}`} alt={images[15]} />
      </div>
    </div>
  );
}

export default MapScreen;

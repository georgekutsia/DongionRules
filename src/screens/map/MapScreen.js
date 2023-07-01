import React, { useEffect, useState } from 'react';
import data from "../../data/map";

function MapScreen({tamaño, size}) {
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
  const [rotation, setRotation] = useState({
    'map-img0': 0,'map-img1': 0,'map-img2': 0,'map-img3': 0,'map-img4': 0,'map-img5': 0,'map-img6': 0,'map-img7': 0,
    'map-img8': 0,'map-img9': 0,'map-img10': 0,'map-img11': 0,'map-img12': 0,'map-img13': 0,'map-img14': 0,
    'map-img15': 0,'map-img16': 0,'map-img17': 0,'map-img18': 0,'map-img19': 0,'map-img20': 0,'map-img21': 0,
    'map-img22': 0,'map-img23': 0,'map-img24': 0,'map-img25': 0,'map-img26': 0,'map-img27': 0,'map-img28': 0,
    'map-img29': 0,'map-img30': 0,'map-img31': 0,'map-img32': 0,'map-img33': 0,'map-img34': 0,'map-img35': 0,
    'map-img36': 0,'map-img37': 0,'map-img38': 0,'map-img39': 0,'map-img40': 0,
  });
  const handleDoubleClick = (className) => {
    setRotation((prevRotation) => ({
      ...prevRotation, [className]: prevRotation[className] + 90,
    }));
  };
  return (
    <div className='big-box-map'>
      <div>
        <img className='map-img0' onDoubleClick={()=>handleDoubleClick('map-img0')} style={{ width:`calc(${size}px + 2vw)`,height:`calc(${size}px + 2vw)`, transform: `rotate(${rotation['map-img0']}deg)`}} src={`${images[0]}`} alt={images[0]} />
        <img className='map-img1' onDoubleClick={()=>handleDoubleClick('map-img1')} style={{width:`calc(${size}px + 2vw)`,height:`calc(${size}px + 2vw)`, transform: `rotate(${rotation['map-img1']}deg)`}} src={`${images[1]}`} alt={images[1]} />
        <img className='map-img2' onDoubleClick={()=>handleDoubleClick('map-img2')} style={{width:`calc(${size}px + 2vw)`,height:`calc(${size}px + 2vw)`, transform: `rotate(${rotation['map-img2']}deg)`}} src={`${images[2]}`} alt={images[2]} />
        {images[13] && <img className='map-img13' onDoubleClick={()=>handleDoubleClick('map-img13')} style={{width:`calc(${size}px + 2vw)`,height:`calc(${size}px + 2vw)`, transform: `rotate(${rotation['map-img13']}deg)`}} src={`${images[13]}`} alt={images[13]} />}
        {images[20] &&<img className='map-img20' onDoubleClick={()=>handleDoubleClick('map-img20')} style={{width:`calc(${size}px + 2vw)`,height:`calc(${size}px + 2vw)`, transform: `rotate(${rotation['map-img20']}deg)`}} src={`${images[20]}`} alt={images[20]} />}
      </div>
      <div>
        <img className='map-img3' onDoubleClick={()=>handleDoubleClick('map-img3')} style={{width:`calc(${size}px + 2vw)`,height:`calc(${size}px + 2vw)`, transform: `rotate(${rotation['map-img3']}deg)`}} src={`${images[3]}`} alt={images[3]} />
        <img className='map-img4' onDoubleClick={()=>handleDoubleClick('map-img4')} style={{width:`calc(${size}px + 2vw)`,height:`calc(${size}px + 2vw)`, transform: `rotate(${rotation['map-img4']}deg)`}} src={`${images[4]}`} alt={images[4]} />
        <img className='map-img5' onDoubleClick={()=>handleDoubleClick('map-img5')} style={{width:`calc(${size}px + 2vw)`,height:`calc(${size}px + 2vw)`, transform: `rotate(${rotation['map-img5']}deg)`}} src={`${images[5]}`} alt={images[5]} />
        {images[14] && <img className='map-img14' onDoubleClick={()=>handleDoubleClick('map-img14')} style={{width:`calc(${size}px + 2vw)`,height:`calc(${size}px + 2vw)`, transform: `rotate(${rotation['map-img14']}deg)`}} src={`${images[14]}`} alt={images[14]} />}
        {images[21] &&<img className='map-img21' onDoubleClick={()=>handleDoubleClick('map-img21')} style={{width:`calc(${size}px + 2vw)`,height:`calc(${size}px + 2vw)`, transform: `rotate(${rotation['map-img21']}deg)`}} src={`${images[21]}`} alt={images[21]} />}

      </div>
      <div>
        <img className='map-img6' onDoubleClick={()=>handleDoubleClick('map-img6')} style={{width:`calc(${size}px + 2vw)`,height:`calc(${size}px + 2vw)`, transform: `rotate(${rotation['map-img6']}deg)`}} src={`${images[6]}`} alt={images[6]} />
        <img className='map-img7' onDoubleClick={()=>handleDoubleClick('map-img7')} style={{width:`calc(${size}px + 2vw)`,height:`calc(${size}px + 2vw)`, transform: `rotate(${rotation['map-img7']}deg)`}} src={`${images[7]}`} alt={images[7]} />
        <img className='map-img8' onDoubleClick={()=>handleDoubleClick('map-img8')} style={{width:`calc(${size}px + 2vw)`,height:`calc(${size}px + 2vw)`, transform: `rotate(${rotation['map-img8']}deg)`}} src={`${images[8]}`} alt={images[8]} />
        {images[15] &&<img className='map-img15' onDoubleClick={()=>handleDoubleClick('map-img15')} style={{width:`calc(${size}px + 2vw)`,height:`calc(${size}px + 2vw)`, transform: `rotate(${rotation['map-img15']}deg)`}} src={`${images[15]}`} alt={images[15]} />}
        {images[22] &&<img className='map-img22' onDoubleClick={()=>handleDoubleClick('map-img22')} style={{width:`calc(${size}px + 2vw)`,height:`calc(${size}px + 2vw)`, transform: `rotate(${rotation['map-img22']}deg)`}} src={`${images[22]}`} alt={images[22]} />}
      </div>
      <div>
        {images[9] &&<img className='map-img9' onDoubleClick={()=>handleDoubleClick('map-img9')} style={{width:`calc(${size}px + 2vw)`,height:`calc(${size}px + 2vw)`, transform: `rotate(${rotation['map-img9']}deg)`}} src={`${images[9]}`} alt={images[9]} />}
        {images[10] &&<img className='map-img10' onDoubleClick={()=>handleDoubleClick('map-img10')} style={{width:`calc(${size}px + 2vw)`,height:`calc(${size}px + 2vw)`, transform: `rotate(${rotation['map-img10']}deg)`}} src={`${images[10]}`} alt={images[10]} />}
        {images[11] &&<img className='map-img11' onDoubleClick={()=>handleDoubleClick('map-img11')} style={{width:`calc(${size}px + 2vw)`,height:`calc(${size}px + 2vw)`, transform: `rotate(${rotation['map-img11']}deg)`}} src={`${images[11]}`} alt={images[11]} />}
        {images[12] &&<img className='map-img12' onDoubleClick={()=>handleDoubleClick('map-img12')} style={{width:`calc(${size}px + 2vw)`,height:`calc(${size}px + 2vw)`, transform: `rotate(${rotation['map-img12']}deg)`}} src={`${images[12]}`} alt={images[12]} />}
        {images[23] &&<img className='map-img23' onDoubleClick={()=>handleDoubleClick('map-img23')} style={{width:`calc(${size}px + 2vw)`,height:`calc(${size}px + 2vw)`, transform: `rotate(${rotation['map-img23']}deg)`}} src={`${images[23]}`} alt={images[23]} />}
      </div>
      <div>
        {images[16] &&<img className='map-img16' onDoubleClick={()=>handleDoubleClick('map-img16')} style={{width:`calc(${size}px + 2vw)`,height:`calc(${size}px + 2vw)`, transform: `rotate(${rotation['map-img16']}deg)`}} src={`${images[16]}`} alt={images[16]} />}
        {images[17] && <img className='map-img17' onDoubleClick={()=>handleDoubleClick('map-img17')} style={{width:`calc(${size}px + 2vw)`,height:`calc(${size}px + 2vw)`, transform: `rotate(${rotation['map-img17']}deg)`}} src={`${images[17]}`} alt={images[17]} />}
        {images[18] && <img className='map-img18' onDoubleClick={()=>handleDoubleClick('map-img18')} style={{width:`calc(${size}px + 2vw)`,height:`calc(${size}px + 2vw)`, transform: `rotate(${rotation['map-img18']}deg)`}} src={`${images[18]}`} alt={images[18]} />}
        {images[19] &&<img className='map-img19' onDoubleClick={()=>handleDoubleClick('map-img19')} style={{width:`calc(${size}px + 2vw)`,height:`calc(${size}px + 2vw)`, transform: `rotate(${rotation['map-img19']}deg)`}} src={`${images[19]}`} alt={images[19]} />}
        {images[24] &&<img className='map-img24' onDoubleClick={()=>handleDoubleClick('map-img24')} style={{width:`calc(${size}px + 2vw)`,height:`calc(${size}px + 2vw)`, transform: `rotate(${rotation['map-img24']}deg)`}} src={`${images[24]}`} alt={images[24]} />}
      </div>
    </div>
  );
}

export default MapScreen;

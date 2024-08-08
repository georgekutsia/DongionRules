import React, { useState, useEffect } from 'react';

function TalentTreeButtonComponent({marginVertical, horRightSpace, horLeftSpace, horLeftSpaceWidth, horRightSpaceWidth, horizontalMargin,horizontalWidth, hClick, activated, points, titulo, nombre, imgUrl, horLeft, horRight, btn, btnSize, btnMargin,verticalMargin,verticalHeight , verDown, verUp}) {
  const [selected, setSelected] = useState(points);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedState = localStorage.getItem(nombre);
    if (savedState !== null) {
      setSelected(JSON.parse(savedState));
    }
  }, [nombre]);

  const handleClick = () => {
    hClick(selected, setSelected, nombre);
    setSelected(!selected);
  };

  const handleImageLoad = () => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  };

  return (
    <>
      {horLeftSpace && <div style={{width:horLeftSpaceWidth}}></div>}
      {horLeft && <div style={{margin:horizontalMargin, width:horizontalWidth}}  className={activated || selected  ? `talent-tree-btn-line-hor talent-tree-filled-hor` : `talent-tree-btn-line-hor horAnimation`}></div>}
      {nombre  && 
      <div className="talent-tree-btn-hor-container" style={{margin:marginVertical}}> 
      {verUp && <div style={{width:"10px", margin:verticalMargin, height:verticalHeight}} className={activated || selected  ? `talent-tree-btn-line-ver talent-tree-filled-ver` : `talent-tree-btn-line-ver `}></div>}
        <button 
        style={{ minWidth: btnSize, minHeight: btnSize, margin: btnMargin, position: 'relative' }} onDoubleClick={handleClick} className={selected || activated ?  `talent-to-select talent-tree-btn ${btn}` : ` talent-tree-btn ${btn}` }>
        {selected && <div className='loader3' style={{zIndex:54, position:"absolute"}}></div>}     
          <img src={imgUrl} alt={nombre} style={{ display: loading ? 'none' : 'block' ,width: '100%', height: '100%' }} onLoad={handleImageLoad} onError={() => setLoading(false)} />
        {loading &&
          <div className='loaderTalentBtn'></div>
        }
        <div className="talent-tree-img-hover-text"> <header>{titulo}</header> {nombre} </div>
        </button>
      {verDown && <div style={{width:"10px", margin:verticalMargin, height:verticalHeight}} className={activated || selected  ? `talent-tree-btn-line-ver talent-tree-filled-ver` : `talent-tree-btn-line-ver verAnimation`}></div> } </div>}
      {horRight && <div style={{margin:horizontalMargin, width:horizontalWidth}} className={activated || selected  ? `talent-tree-btn-line-hor talent-tree-filled-hor` : `talent-tree-btn-line-hor horAnimation`}></div>}
      {horRightSpace && <div style={{width:horRightSpaceWidth}}></div>}
    </>
  );
}

export default TalentTreeButtonComponent;

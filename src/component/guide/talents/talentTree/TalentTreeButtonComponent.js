import React, { useState, useEffect } from 'react';

function TalentTreeButtonComponent({
  marginVertical, horRightSpace, horLeftSpace, horLeftSpaceWidth,
  horRightSpaceWidth, horizontalMargin, horizontalWidth, hClick,
  nombre, texto, imgUrl, horLeft, horRight, btn,
  btnSize, btnMargin, verticalMargin, verticalHeight, verDown, verUp, LS
}) {
  const [selected, setSelected] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedState = localStorage.getItem(LS);
    if (savedState !== null) {
      setSelected(JSON.parse(savedState));
    }
  }, [LS]);

  const handleClick = () => {
    hClick(selected, setSelected, LS);
    setSelected(!selected);
  };

  const handleImageLoad = () => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  };

  return (
    <>
    {/* horLeftSpace*/}
      {horLeftSpace && <div style={{ width: horLeftSpaceWidth }}></div>}

      {/* horLeft */}
      {horLeft && ( <div style={{ margin: horizontalMargin, width: horizontalWidth }} 
      className={ selected   ? `talent-tree-btn-line-hor talent-tree-filled-hor horLeft`:`talent-tree-btn-line-hor horAnimation horLeft`}></div>)}


      {texto && (
        <div className="talent-tree-btn-hor-container" style={{ margin: marginVertical }}>
        {/* verUp */}
          {verUp && ( <div style={{ width: "10px", margin: verticalMargin, height: verticalHeight }}   
          className={ selected     ? `talent-tree-btn-line-ver talent-tree-filled-ver`     : `talent-tree-btn-line-ver`}></div>)}
        {/* button */}
          <button style={{ minWidth: btnSize, minHeight: btnSize, margin: btnMargin, position: 'relative' }}
            onDoubleClick={handleClick} className={selected  ? `talent-to-select talent-tree-btn ${btn}` : `talent-tree-btn opacityImg ${btn}`} >
            {selected && ( <div className='loaderSelected' style={{ zIndex: 54, position: "absolute" }}></div> )}
            <img src={imgUrl} alt={texto} style={{ display: loading ? 'none' : 'block', width: '100%', height: '100%' }} onLoad={handleImageLoad} onError={() => setLoading(false)}/>
            {loading && <div className='loaderTalentBtn'></div>}
            <div className="talent-tree-img-hover-text"> <header>{nombre}</header> {texto}  </div>
          </button>
       {/* verDown */}
          {verDown && (
            <div style={{ width: "10px", margin: verticalMargin, height: verticalHeight }}
              className={ selected ? `talent-tree-btn-line-ver talent-tree-filled-ver` : `talent-tree-btn-line-ver verAnimation`} ></div>)}
        </div>
      )}
      {/* horRight */}
      {horRight && (
        <div style={{ margin: horizontalMargin, width: horizontalWidth }} 
        className={ selected   ? `talent-tree-btn-line-hor talent-tree-filled-hor horRight`   : `talent-tree-btn-line-hor horAnimation horRight` } ></div>)}
        {/* horRightSpace */}
      {horRightSpace && <div style={{ width: horRightSpaceWidth }}></div>}

    </>
  );
}

export default TalentTreeButtonComponent;

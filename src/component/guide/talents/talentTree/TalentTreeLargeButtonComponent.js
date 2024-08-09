import React, { useEffect, useState } from 'react'

function TalentTreeLargeButtonComponent({LS, hClick, btn, imgUrl, texto, nombre}) {
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
    <button 
    onDoubleClick={handleClick} className={selected  ? `talent-to-select talent-tree-btn-large ${btn}` : `talent-tree-btn-large ${btn}`} >
    {selected && ( <div className='loader3' style={{ zIndex: 54, position: "absolute" }}></div> )}
    <img src={imgUrl} alt={texto} style={{ display: loading ? 'none' : 'block', width: '100%', height: '100%' }} onLoad={handleImageLoad} onError={() => setLoading(false)}/>
    {loading && <div className='loaderTalentBtn'></div>}
    <div className="talent-tree-img-hover-text"> <header>{nombre}</header> {texto} </div>
  </button>
  )
}

export default TalentTreeLargeButtonComponent
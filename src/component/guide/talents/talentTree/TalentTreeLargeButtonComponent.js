import React, { useEffect, useState } from 'react'

function TalentTreeLargeButtonComponent({LS, hClick, btn, imgUrl, texto, texto1, nombre}) {
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
    onDoubleClick={handleClick} className={selected  ? `talent-to-select bg-select talent-tree-btn-large ${btn}` : `talent-tree-btn-large  opacityImg ${btn}`} >
    {selected && ( 
      <>
      <div className='bigLoaderAll loaderSelectedBig1'></div>
      <div className='bigLoaderAll loaderSelectedBig2'></div>
      <div className='bigLoaderAll loaderSelectedBig3'></div>
      <div className='bigLoaderAll loaderSelectedBig4'></div>
      <div className='bigLoaderAll loaderSelectedBig5'></div>
      <div className='bigLoaderAll loaderSelectedBig6'></div>
      <div className='bigLoaderAll loaderSelectedBig7'></div>
      <div className='bigLoaderAll loaderSelectedBig8'></div>
      <div className='bigLoaderAll loaderSelectedBig9'></div>
      <div className='bigLoaderAll loaderSelectedBig10'></div>
      <div className='bigLoaderAll loaderSelectedBig11'></div>
      <div className='bigLoaderAll loaderSelectedBig12'></div>
      <div className='bigLoaderAll loaderSelectedBig13'></div>
      <div className='bigLoaderAll loaderSelectedBig14'></div>
      <div className='bigLoaderAll loaderSelectedBig15'></div>
      <div className='bigLoaderAll loaderSelectedBig16'></div>

      </>
       )}
    <img src={imgUrl} alt={texto} style={{ display: loading ? 'none' : 'block', width: '100%', height: '100%' }} onLoad={handleImageLoad} onError={() => setLoading(false)}/>
    {loading && <div className='loaderTalentBtn'></div>}
    <div className="talent-tree-img-hover-text"> <header>{nombre}</header> {texto} <div>{texto1}</div></div>
  </button>
  )
}

export default TalentTreeLargeButtonComponent
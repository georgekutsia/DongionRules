import React from 'react';
import IntroImgsComponent from './IntroImgsComponent';
import PlansImgs from '../../PlansImgs';

function IntroComponents({ titulo, galeria1, galeria2, texto1, texto2, texto3, texto4, button1, handleButton1,}) {

  return (
    <div className='dongionsdetail-box-parts'>
      <h3 id='p-explico' className='dongionsdetail-title'>{titulo}</h3>
      <article>{texto1}</article>
      <article>{texto2}</article>
      {galeria1 && <IntroImgsComponent  gallery={galeria1} />}
      {galeria2 &&<PlansImgs  galeria={galeria2}/>}
      <article>{texto3}</article>
      {button1 && 
      <article className='button-intro-porque'>{texto4} <button className='btn-rules-toggle  nombre-concepto-blanco' onClick={handleButton1}>{button1}</button></article>
      }

    </div>
  );
}

export default IntroComponents;

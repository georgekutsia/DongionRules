import React, { useEffect, useState } from 'react';
import TalentTreeButtonComponent from '../TalentTreeButtonComponent';
import { dataTalentsTreePoints } from '../../../../../data/dataTalentTreePoints';

function TalentTreeAjaniLuchador({handleAmount, amountOfPoints}) {
  const [data, setData] = useState(dataTalentsTreePoints.ajani.luchador);
  const [img, setImg] = useState(dataTalentsTreePoints.ajani.luchadorImg);
  const [activatedNames, setActivatedNames] = useState({});

  const hClick = (sel, setSel, nam) => {
    const newState = !sel;
    setSel(newState);
    localStorage.setItem(nam, JSON.stringify(newState));
if(amountOfPoints>=1){
  (sel?  handleAmount(1): handleAmount(-1))
} else if(amountOfPoints === 0 && sel === true) {
  handleAmount(1);
  setSel(true);
}
    
    setActivatedNames(prevState => ({
      ...prevState,
      [nam]: newState
    }));
  };

  return (
    <div className='talent-tree-box'>
      <div className='talent-tree-row'>
        <TalentTreeButtonComponent verDown verticalHeight={"100px"} btn={"btn-luchador"}  hClick={hClick}  points={data[1]} imgUrl={img[0]}  nombre={"+2 en Esquiva"} btnMargin={"120px 0 0 0"}   />
        <TalentTreeButtonComponent  horLeft btn={"btn-luchador"}  hClick={hClick}  points={data[2]}  nombre={"+2 en Esquiva"} imgUrl={img[0]}   />
        <TalentTreeButtonComponent verDown verticalMargin={"-10px 0 -20px 15vw"}  btn={"btn-luchador"}  hClick={hClick}  points={data[3]}  nombre={"Tras recibir daño, tienes una acción adicional ese turno"} imgUrl={img[2]}  btnSize={"22vw"} btnMargin={"0 0 0 10vw"} 
        />
      </div>

      <div className='talent-tree-row'>
        <TalentTreeButtonComponent verDown  btn={"btn-luchador"}  hClick={hClick}   points={data[4]} nombre={`Tu "intervenir" obtienen doble de tu esquiva adicional`} imgUrl={img[3]}     />
        <TalentTreeButtonComponent  btn={"btn-luchador"}  hClick={hClick} points={data[5]} nombre={"+2 en acierto físico por la espalda"}   imgUrl={img[4]} />
        <TalentTreeButtonComponent  btn={"btn-luchador"}  hClick={hClick} points={data[0]} nombre={"+2 en daño físico por la espalda"}   imgUrl={img[5]} />
        <TalentTreeButtonComponent  btn={"btn-luchador"}  hClick={hClick} points={data[0]} nombre={"x"}  imgUrl={img[6]}  />
      </div>
      <div className='talent-tree-row'>
        <TalentTreeButtonComponent   btn={"btn-luchador"}  hClick={hClick}   points={data[4]} nombre={`Tu "intervenir" obtienen doble de tu esquiva adicional`} imgUrl={img[7]}     />
        <TalentTreeButtonComponent  btn={"btn-luchador"}  hClick={hClick} points={data[5]} nombre={"+2 en acierto físico por la espalda"}   imgUrl={img[8]} />
        <TalentTreeButtonComponent  btn={"btn-luchador"}  hClick={hClick} points={data[0]} nombre={"+2 en daño físico por la espalda"}   imgUrl={img[1]} />
        <TalentTreeButtonComponent  btn={"btn-luchador"}  hClick={hClick} points={data[0]} nombre={"x"}  imgUrl={img[0]}  />
      </div>


    </div>
  );
}

export default TalentTreeAjaniLuchador;

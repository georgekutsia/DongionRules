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
        <TalentTreeButtonComponent  btn={"btn-luchador"}  hClick={hClick}  points={data[1]} imgUrl={img[0]}  nombre={"+2 en Esquiva"}    />
        <TalentTreeButtonComponent  horLeft btn={"btn-luchador"}  hClick={hClick}  points={data[2]}  nombre={"+3 en Esquiva"} imgUrl={img[1]}  btnMargin={"0 12vw 0 0 "}     />
        <TalentTreeButtonComponent   btn={"btn-luchador"}  hClick={hClick}  points={data[3]}  nombre={"Tras recibir daño, tienes una acción adicional ese turno"} imgUrl={img[2]}   btnMargin={"0 6vw 0 0"}  btnSize={"180px"}   
        />
      </div>

      <div className='talent-tree-row'>
        <TalentTreeButtonComponent verUp btn={"btn-luchador"}  hClick={hClick}   points={data[4]} nombre={`Tu "intervenir" obtienen doble de tu esquiva adicional`} btnSize={"90px"}     />
        <TalentTreeButtonComponent verDown btn={"btn-luchador"}  hClick={hClick} points={data[5]} nombre={"+2 en acierto físico por la espalda"}   />
        <TalentTreeButtonComponent  btn={"btn-luchador"}  hClick={hClick} points={data[0]} nombre={"+2 en daño físico por la espalda"}   />
        <TalentTreeButtonComponent  verUp btn={"btn-luchador"}  hClick={hClick} points={data[0]} nombre={"x"}   />
      </div>

      <div className='talent-tree-row'>
        <TalentTreeButtonComponent  btn={"btn-luchador"}  hClick={hClick} points={data[0]} nombre={"x"}  activated={activatedNames["x"]} />
        <TalentTreeButtonComponent  btn={"btn-luchador"}  hClick={hClick} points={data[0]} nombre={"x"}  activated={activatedNames["x"]}/>
        <TalentTreeButtonComponent  btn={"btn-luchador"}  hClick={hClick} points={data[0]} nombre={"x"}  activated={activatedNames["x"]}/>
      </div>
    </div>
  );
}

export default TalentTreeAjaniLuchador;

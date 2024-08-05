import React, { useEffect, useState } from 'react';
import TalentTreeButtonComponent from '../TalentTreeButtonComponent';
import { dataTalentsTreePoints } from '../../../../../data/dataTalentTreePoints';
import TalentTreeListComponent from '../../TalentTreeListComponent';

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
  console.log(data)

  return (
    <div className='talent-tree-box'>
     {/* <TalentTreeListComponent  data={img}/> */}
      <div className='talent-tree-row'>
        <TalentTreeButtonComponent verDown btn={"btn-luchador talent-tree-btn-left"}  hClick={hClick}  points={data[1]} imgUrl={img[0]}  titulo={"Reflejos Felinos"} nombre={"+2 en Esquiva"}  />
        <TalentTreeButtonComponent  horRightSpace  horLeft horRightSpaceWidth={"40px"} horizontalMargin={"0 0 9vw 0"}  btn={"btn-luchador"}  hClick={hClick}  points={data[2]} titulo={"Reflejos Felinos"} nombre={"+2 en Esquiva"} imgUrl={img[0]}    />
        <TalentTreeButtonComponent verDown  btn={"btn-luchador talent-tree-btn-right"}  hClick={hClick}  points={data[3]} titulo={"Fuerza Natural"} nombre={"+2 en tu daño básico cuerpo a cuerpo"} imgUrl={img[2]}   
        />
      </div>

      <div className='talent-tree-row'>
        <TalentTreeButtonComponent verDown  btn={"btn-luchador talent-tree-btn-left"}  hClick={hClick}   points={data[4]} titulo={"Leal y dispuesto"} nombre={`Tu "intervenir" obtienen doble de tu esquiva adicional`} imgUrl={img[6]}     />
        <TalentTreeButtonComponent  horRight  horLeftSpace horizontalMargin={" 0 0  9vw 0"}  btn={"btn-luchador"}  hClick={hClick} points={data[0]} titulo={"Caza de la presa"} nombre={"Tu primer ataque en combate tiene un D6 adicional por nivel"}   imgUrl={img[5]} />
        <TalentTreeButtonComponent  verDown btn={"btn-luchador talent-tree-btn-right"}  hClick={hClick} points={data[0]} titulo={"Fuerza Natural"} nombre={"+2 en tu daño básico cuerpo a cuerpo"}  imgUrl={img[2]}  />
      </div>
      <div className='talent-tree-row'>
        <TalentTreeButtonComponent btnSize={"55px"} btnMargin={"3vw 0 0 0 "}  btn={"btn-luchador talent-tree-btn-left"}  hClick={hClick}   points={data[4]} nombre={`Tu "intervenir" obtienen doble de tu esquiva adicional`} imgUrl={img[0]}     />
        <TalentTreeButtonComponent btnSize={"55px"} btnMargin={"3vw 0 0 0 "} horLeft  horizontalMargin={"0 0 4vw 0"}   btn={"btn-luchador"}  hClick={hClick} points={data[5]} nombre={"+2 en acierto físico por la espalda"}   imgUrl={img[8 ]} />
        <TalentTreeButtonComponent btnSize={"55px"} btnMargin={"3vw 0 0 0 "} horLeftSpace horLeftSpaceWidth={"20px"} btn={"btn-luchador"}  hClick={hClick} points={data[0]} nombre={"+2 en daño físico por la espalda"}   imgUrl={img[3]} />
        <TalentTreeButtonComponent btnSize={"55px"} btnMargin={"3vw 0 0 0 "} horLeft  horizontalMargin={"0 0 4vw 0"}  btn={"btn-luchador talent-tree-btn-right"}  hClick={hClick} points={data[0]} nombre={"Al atacar o ser atacado de frente, tienes una acción adicinal esa ronda. Esta habilidad ocurre solo una vez por nivel y combate."}  imgUrl={img[1]}  />
      </div>
      <div className='talent-tree-row'>
        <TalentTreeButtonComponent   btn={"btn-luchador talent-tree-btn-left"}  hClick={hClick}   points={data[4]} nombre={`Tu "intervenir" obtienen doble de tu esquiva adicional`} imgUrl={img[7]}     />
        <TalentTreeButtonComponent  btn={"btn-luchador"}  hClick={hClick} points={data[5]} nombre={"+2 en acierto físico por la espalda"}   imgUrl={img[8 ]} />
        <TalentTreeButtonComponent  btn={"btn-luchador"}  hClick={hClick} points={data[0]} nombre={"+2 en daño físico por la espalda"}   imgUrl={img[1]} />
        <TalentTreeButtonComponent  btn={"btn-luchador talent-tree-btn-right"}  hClick={hClick} points={data[0]} nombre={"x"}  imgUrl={img[0]}  />
      </div>


    </div>
  );
}

export default TalentTreeAjaniLuchador;

import React, { useEffect, useState } from 'react';
import TalentTreeButtonComponent from '../TalentTreeButtonComponent';
import { dataTalentsTreePoints } from '../../../../../data/dataTalentTreePoints';
import TalentTreeListComponent from '../../TalentTreeListComponent';
import TalentTreeLargeButtonComponent from '../TalentTreeLargeButtonComponent';

function TalentTreeAjaniLuchador({handleAmount, amountOfPoints}) {
  const [data, setData] = useState(dataTalentsTreePoints.ajani.luchador);
  const [img, setImg] = useState(dataTalentsTreePoints.ajani.luchadorImg);
  const [activatedNames, setActivatedNames] = useState({});
  const [usedIndex, setUsedIndex] = useState([0,1,2, 5, 6,16, 30, 40, 42, 31,49]);

  const hClick = (sel, setSel, nam) => {
    const newState = !sel;
    setSel(newState);
    localStorage.setItem(nam, JSON.stringify(newState));
    
    if(amountOfPoints >= 1) {
      sel ? handleAmount(1) : handleAmount(-1);
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
      {/* <TalentTreeListComponent data={img} indexes={usedIndex} /> */}
      <div className='talent-tree-row'>
        <TalentTreeButtonComponent verDown btn={"btn-luchador talent-tree-btn-left"} hClick={hClick}  nombre={"Esquiva Mejorada"} texto={"+2 en Esquiva"} imgUrl={img[0]} LS={"ajluuno"}/>
        <TalentTreeButtonComponent horRightSpace horLeft horRightSpaceWidth={"40px"} horizontalMargin={"0 0 9vw 0"} btn={"btn-luchador"} hClick={hClick} nombre={"Esquiva Mejorada"} texto={"+2 en Esquiva"} imgUrl={img[0]} LS={"ajludos"} />
        <TalentTreeButtonComponent verDown btn={"btn-luchador talent-tree-btn-right"} hClick={hClick} nombre={"Daño mejorado"} texto={"+2 en tu daño cuerpo a cuerpo"} imgUrl={img[2]} LS={"ajlutres"} />
      </div>

      <div className='talent-tree-row' >

        <TalentTreeButtonComponent verDown btn={"btn-luchador talent-tree-btn-left"} hClick={hClick} nombre={"Leal y dispuesto"} texto={`Tu "intervenir" obtienen doble de tu esquiva adicional`} imgUrl={img[6]} LS={"ajlucuatro"} />
        <TalentTreeButtonComponent horLeftSpace btn={"btn-luchador"} hClick={hClick} nombre={"Cazando la presa"} texto={"Tu primer ataque en combate tiene un D6 adicional por nivel"} imgUrl={img[5]} LS={"ajlucinco"} />
        <TalentTreeButtonComponent horLeft horizontalMargin={"0 0 9vw 0"} verDown btn={"btn-luchador talent-tree-btn-right"} hClick={hClick} nombre={"Daño mejorado"} texto={"+2 en tu daño cuerpo a cuerpo"} imgUrl={img[2]} LS={"ajluseis"} />
      </div>

      <div className='talent-tree-row' >

        <TalentTreeButtonComponent btnSize={"55px"} horRight horizontalMargin={"0 0 8vw 0"} btn={"btn-luchador talent-tree-btn-left"} hClick={hClick} nombre={"Acierto mejorado"} texto={`+2 en acierto cuerpo a cuerpo`} imgUrl={img[40]} LS={"ajlusiete"} />
        <TalentTreeButtonComponent verDown verticalMargin={"0 0 0 5vw"} btnSize={"55px"} horizontalMargin={"0 0 4vw 0"} btn={"btn-luchador"} hClick={hClick} nombre={"Acierto mejorado"} texto={`+2 en acierto cuerpo a cuerpo`} imgUrl={img[40]} LS={"ajluocho"} />
        <TalentTreeButtonComponent verDown verticalMargin={"0 5vw 0 0"} btnSize={"55px"} horLeftSpace horLeftSpaceWidth={"20px"} btn={"btn-luchador"} hClick={hClick} nombre={"Propulsión poderosa"} texto={"Puedes usar tu ataque físico en medio del salto con D4 adicional de daño por nivel."} imgUrl={img[16]} LS={"ajlunueve"} />
        <TalentTreeButtonComponent btnSize={"55px"} horLeft horizontalMargin={"0 0 8vw 0"} btn={"btn-luchador talent-tree-btn-right"} hClick={hClick} nombre={"Ataque felino"} texto={"Si fallas un ataque físico concentrado, recuperas una acción"} imgUrl={img[1]} LS={"ajludiez"} />
      </div>

      <div className='talent-tree-row' >
        <TalentTreeButtonComponent btn={"btn-luchador talent-tree-btn-left"} hClick={hClick} nombre={"Fuerza mejorada"} texto={`+3 en tu capacidad de carga y +1 en tu daño cuerpo a cuerpo`} imgUrl={img[42]} LS={"ajluonce"} />
        <TalentTreeButtonComponent horRight horLeft verDown btnSize={"175px"} btn={"btn-luchador talent-tree-btn big-img"} hClick={hClick} nombre={"Presteza natural"} texto={`+3 en Esquiva y +2 en Movimiento`} imgUrl={img[30]} LS={"ajludoce"} />
        <TalentTreeButtonComponent btn={"btn-luchador talent-tree-btn-right"} hClick={hClick} nombre={"Precisión mejorada"} texto={"+1 en precisión con armas cuerpo a cuerpo"} imgUrl={img[31]} LS={"ajlutrece"} />
      </div>
      <div className='talent-tree-row-large' >
        <TalentTreeLargeButtonComponent LS={"ajlugrande1"}  hClick={hClick}  btn={"btn-luchador"}  imgUrl={img[49]} nombre={"Maetría felina"} texto={"+1 en Cinestesia."} texto1={"Obtienes D6 en daño cuerpo a cuerpo sobre cada criatura que aún no te ha hecho daño"}/>
      </div>
      
    </div>
  );
}

export default TalentTreeAjaniLuchador;

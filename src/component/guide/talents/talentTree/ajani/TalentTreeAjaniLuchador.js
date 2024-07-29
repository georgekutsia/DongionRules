import React, { useEffect, useState } from 'react';
import TalentTreeButtonComponent from '../TalentTreeButtonComponent';
import { dataTalentsTreePoints } from '../../../../../data/dataTalentTreePoints';

function TalentTreeAjaniLuchador() {
  const [pointsData, setPointsData] = useState(dataTalentsTreePoints);
  const [activated, setActivated] = useState(false)

  const handleActivate = () =>{
    setActivated(!activated)
  }

  return (
    <div className='talent-tree-box'>
      <div className='talent-tree-row'>
        <TalentTreeButtonComponent points={pointsData.ajani.luchador[1]} nombre={"+2 en Esquiva"}  btnHeight={"40px"} btn={"btn-luchador"} talentToSelect={"talent-to-select"} />
        <TalentTreeButtonComponent points={pointsData.ajani.luchador[1]} horizontal nombre={"+3 en Esquiva"} />
        <TalentTreeButtonComponent points={pointsData.ajani.luchador[2]} nombre={"+3 en Esquiva"}  btnHeight={"40px"} btn={"btn-luchador"} btnMargin={"0px 100px 0px 0px"} talentToSelect={"talent-to-select"} />
        <TalentTreeButtonComponent points={pointsData.ajani.luchador[3]} nombre={"Al fin veces seguidas a un jugador, te come el culo"} btnMargin={"0px 100px 0px 0px"}   btn={"btn-luchador"} talentToSelect={"talent-to-select"} />
      </div>

      <div className='talent-tree-row'>
        <TalentTreeButtonComponent points={pointsData.ajani.luchador[1]}  vertical nombre={"+2 en Esquiva"} />

        <TalentTreeButtonComponent points={pointsData.ajani.luchador[2]} vertical   nombre={"Al fin veces seguidas a un jugador, te come el culo"}  />
      </div>

      <div className='talent-tree-row'>
        <TalentTreeButtonComponent points={pointsData.ajani.luchador[0]} nombre={"Ha"} />
        <TalentTreeButtonComponent points={pointsData.ajani.luchador[0]} vertical />
        <TalentTreeButtonComponent points={pointsData.ajani.luchador[0]} nombre={"hihi"} />
        <TalentTreeButtonComponent points={pointsData.ajani.luchador[0]} nombre={"hay"} />
      </div>
      <div className='talent-tree-row'>
        <TalentTreeButtonComponent points={pointsData.ajani.luchador[0]} nombre={"Ha"} />
        <TalentTreeButtonComponent points={pointsData.ajani.luchador[0]} vertical />
        <TalentTreeButtonComponent points={pointsData.ajani.luchador[0]} nombre={"hihi"} />
        <TalentTreeButtonComponent points={pointsData.ajani.luchador[0]} nombre={"hay"} />
      </div>
      <div className='talent-tree-row'>
        <TalentTreeButtonComponent points={pointsData.ajani.luchador[0]} nombre={"Ha"} />
        <TalentTreeButtonComponent points={pointsData.ajani.luchador[0]} vertical />
        <TalentTreeButtonComponent points={pointsData.ajani.luchador[0]} nombre={"hihi"} />
        <TalentTreeButtonComponent points={pointsData.ajani.luchador[0]} nombre={"hay"} />
      </div>
    </div>
  );
}

export default TalentTreeAjaniLuchador;

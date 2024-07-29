import React, { useEffect, useState } from 'react';
import TalentTreeButtonComponent from '../TalentTreeButtonComponent';
import { dataTalentsTreePoints } from '../../../../../data/dataTalentTreePoints';

function TalentTreeAjaniLuchador() {
  const [pointsData, setPointsData] = useState(dataTalentsTreePoints);

  return (
    <div className='talent-tree-box'>
      <div className='talent-tree-row'>
        <TalentTreeButtonComponent empty btnWidth={"15%"} />
        <TalentTreeButtonComponent points={pointsData.ajani.luchador[1]} nombre={"+2 en Esquiva"} btnWidth={"550px"} btnHeight={"40px"} btn={"btn-luchador"} talentToSelect={"talent-to-select"} />
        <TalentTreeButtonComponent points={pointsData.ajani.luchador[1]} horizontal nombre={"+3 en Esquiva"} />
        <TalentTreeButtonComponent points={pointsData.ajani.luchador[2]} nombre={"+3 en Esquiva"} btnWidth={"550px"} btnHeight={"40px"} btn={"btn-luchador"} talentToSelect={"talent-to-select"} />
        <TalentTreeButtonComponent empty btnWidth={"10%"} />
        <TalentTreeButtonComponent points={pointsData.ajani.luchador[3]} nombre={"Si dañas dos veces seguidas a un jugador, te come el culo"} btnWidth={"1200px"} btnHeight={"60px"} btn={"btn-luchador"} talentToSelect={"talent-to-select"} />
        <TalentTreeButtonComponent empty btnWidth={"40%"} />
      </div>

      <div className='talent-tree-row'>
        <TalentTreeButtonComponent points={pointsData.ajani.luchador[1]} vertical nombre={"+2 en Esquiva"} />
        <TalentTreeButtonComponent empty />
        <TalentTreeButtonComponent points={pointsData.ajani.luchador[2]} vertical />
      </div>

      <div className='talent-tree-row'>
        <TalentTreeButtonComponent points={pointsData.ajani.luchador[0]} nombre={"Ha"} />
        <TalentTreeButtonComponent points={pointsData.ajani.luchador[0]} vertical />
        <TalentTreeButtonComponent points={pointsData.ajani.luchador[0]} nombre={"hihi"} />
        <TalentTreeButtonComponent points={pointsData.ajani.luchador[0]} empty />
        <TalentTreeButtonComponent points={pointsData.ajani.luchador[0]} empty />
        <TalentTreeButtonComponent points={pointsData.ajani.luchador[0]} nombre={"hay"} />
      </div>
    </div>
  );
}

export default TalentTreeAjaniLuchador;

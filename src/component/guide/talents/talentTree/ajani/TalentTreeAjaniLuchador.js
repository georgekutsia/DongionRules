import React, { useEffect, useState } from 'react';
import TalentTreeButtonComponent from '../TalentTreeButtonComponent';
import { dataTalentsTreePoints } from '../../../../../data/dataTalentTreePoints';

function TalentTreeAjaniLuchador() {
  const [pointsData, setPointsData] = useState(dataTalentsTreePoints);
  const [activatedNames, setActivatedNames] = useState({});

  const handleClick = (sel, setSel, nam) => {
    const newState = !sel;
    setSel(newState);
    localStorage.setItem(nam, JSON.stringify(newState));

    // Actualiza el estado global de activación por nombre
    setActivatedNames(prevState => ({
      ...prevState,
      [nam]: newState
    }));
  };

  return (
    <div className='talent-tree-box'>
      <div className='talent-tree-row'>
        <TalentTreeButtonComponent  actionHand={handleClick}  points={pointsData.ajani.luchador[1]}  nombre={"+2 en Esquiva"}  btnMargin={"0px 0px 0px 3vw"}  btn={"btn-luchador"}  talentToSelect={"talent-to-select"}  activated={activatedNames["+2 en Esquiva"]} 
        />
        <TalentTreeButtonComponent  points={pointsData.ajani.luchador[1]}  horizontal  nombre={"+3 en Esquiva"}  activated={activatedNames["+3 en Esquiva"]} 
        />
        <TalentTreeButtonComponent  actionHand={handleClick}  points={pointsData.ajani.luchador[2]}  nombre={"+3 en Esquiva"}   btn={"btn-luchador"}  btnMargin={"0px 3vw 0px 0px "}  talentToSelect={"talent-to-select"}  activated={activatedNames["+3 en Esquiva"]} 
        />
        <TalentTreeButtonComponent  actionHand={handleClick}  points={pointsData.ajani.luchador[3]}  nombre={"blablabal seguidas a un jugador, te come el culo"}  btnMargin={"0px 10vw 0px 0px"}   btnWidth={"320px"}   btn={"btn-luchador"}  talentToSelect={"talent-to-select"}  activated={activatedNames["blablabal seguidas a un jugador, te come el culo"]} 
        />
      </div>

      <div className='talent-tree-row'>
        <TalentTreeButtonComponent  points={pointsData.ajani.luchador[1]}   vertical  nombre={"+2 en Esquiva"}  activated={activatedNames["+2 en Esquiva"]} 
        />
        <TalentTreeButtonComponent  points={pointsData.ajani.luchador[2]}  vertical    nombre={"blablabal seguidas a un jugador, te come el culo"}  activated={activatedNames["blablabal seguidas a un jugador, te come el culo"]} 
        />
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

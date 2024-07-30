import React, { useEffect, useState } from 'react';
import TalentTreeButtonComponent from '../TalentTreeButtonComponent';
import { dataTalentsTreePoints } from '../../../../../data/dataTalentTreePoints';

function TalentTreeAjaniLuchador({handleAmount, amountOfPoints}) {
  const [data, setData] = useState(dataTalentsTreePoints.ajani.luchador);
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
        <TalentTreeButtonComponent   btn={"btn-luchador"}  hClick={hClick}  points={data[1]}  nombre={"+2 en Esquiva"}    activated={activatedNames["+2 en Esquiva"]} 
        />
        <TalentTreeButtonComponent   points={data[1]}  horizontal  nombre={"+3 en Esquiva"}  activated={activatedNames["+3 en Esquiva"] } 
        />
        <TalentTreeButtonComponent   btn={"btn-luchador"}  hClick={hClick}  points={data[2]}  nombre={"+3 en Esquiva"}   btnMargin={"0 3vw 0 0 "}    activated={activatedNames["+3 en Esquiva"]} 
        />
        <TalentTreeButtonComponent   btn={"btn-luchador"}  hClick={hClick}  points={data[3]}  nombre={"Tras recibir daño, tienes una acción adicional ese turno"}  btnMargin={"0 4vw 0 0"}   btnWidth={"380px"}    activated={activatedNames["Tras recibir daño, tienes una acción adicional ese turno"]} 
        />
      </div>

      <div className='talent-tree-row'>
        <TalentTreeButtonComponent   points={data[1]}   vertical  nombre={"+2 en Esquiva"}  activated={activatedNames["+2 en Esquiva"]} btnMargin={"0 25vw 0 0 "} 
        />
        <TalentTreeButtonComponent   points={data[2]}  vertical    nombre={"Tras recibir daño, tienes una acción adicional ese turno"}  activated={activatedNames["Tras recibir daño, tienes una acción adicional ese turno"]} btnMargin={"0 15vw -30px 0"} btnHeight={"120px"}
        />
      </div>

      <div className='talent-tree-row'>
        <TalentTreeButtonComponent  btn={"btn-luchador"}  hClick={hClick}   points={data[4]} nombre={`Tu "intervenir" obtienen doble de tu esquiva adicional`} btnHeight={"90px"}    activated={activatedNames[`Tu "intervenir" obtienen doble de tu esquiva adicional`]} />
        <TalentTreeButtonComponent  points={data[4]}  horizontal  nombre={`Tu "intervenir" obtienen doble de tu esquiva adicional`}  activated={activatedNames[`Tu "intervenir" obtienen doble de tu esquiva adicional`] } />
        <TalentTreeButtonComponent  btn={"btn-luchador"}  hClick={hClick} points={data[5]} nombre={"+2 en acierto físico por la espalda"}  activated={activatedNames["+2 en acierto físico por la espalda"]} />
        <TalentTreeButtonComponent  points={data[5]}  horizontal nombre={"+2 en acierto físico por la espalda"}  activated={activatedNames["+2 en acierto físico por la espalda"]}  />
        <TalentTreeButtonComponent  btn={"btn-luchador"}  hClick={hClick} points={data[0]} nombre={"+2 en daño físico por la espalda"}  activated={activatedNames["+2 en daño físico por la espalda"]} />
        <TalentTreeButtonComponent  points={data[0]} horizontal nombre={"+2 en daño físico por la espalda"}  activated={activatedNames["+2 en daño físico por la espalda"]}  />

        <TalentTreeButtonComponent   btn={"btn-luchador"}  hClick={hClick} points={data[0]} nombre={"x"}  activated={activatedNames["x"]} />
      </div>
      <div className='talent-tree-row'>
        <TalentTreeButtonComponent  points={data[4]}  vertical  nombre={`Tu "intervenir" obtienen doble de tu esquiva adicional`}  activated={activatedNames[`Tu "intervenir" obtienen doble de tu esquiva adicional`] }  btnMargin={"0 0 0 -5vw"}  />
        <TalentTreeButtonComponent  points={data[5]}  vertical nombre={"+2 en acierto físico por la espalda"}  activated={activatedNames["+2 en acierto físico por la espalda"]}  btnMargin={"-30px 0 -30px 2vw"} btnHeight={"120px"} />
        <TalentTreeButtonComponent  points={data[0]} vertical nombre={"+2 en daño físico por la espalda"}  activated={activatedNames["+2 en daño físico por la espalda"]} btnMargin={"-30px 0 -30px 0"} btnHeight={"120px"}  />
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

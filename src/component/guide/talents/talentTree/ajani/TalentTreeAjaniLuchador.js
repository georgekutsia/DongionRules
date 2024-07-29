import React from 'react'
import TalentTreeButtonComponent from '../TalentTreeButtonComponent'




// nombre => texto del hechizo
// nombre === empty  => crea cuadrícula vacía
// nombre vacío creará una lína 
// btn => color de los botones para saber de qué rama es
// lineHor y lineVer para hacer lineaa verticales y horizontales entre botones

function TalentTreeAjaniLuchador({}) {
  return (
      <div  className='talent-tree-box'>
      <div className='talent-tree-row'>
        <TalentTreeButtonComponent nombre={"empty"}  btnWidth={"100%"}/>
        <TalentTreeButtonComponent nombre={"+2 en Esquiva"} btnHeight={"60px"} btn={"btn-luchador"} talentToSelect={"talent-to-select "}/>
        <TalentTreeButtonComponent nombre={"lineHor"}  />
        <TalentTreeButtonComponent nombre={"+2 en Esquiva"} btnHeight={"60px"} btn={"btn-luchador"} talentToSelect={"talent-to-select "}/>
        <TalentTreeButtonComponent nombre={"empty"}   btnWidth={"10%"}/>
        <TalentTreeButtonComponent nombre={"Si dañas dos veces seguidas a un jugador, te come el culo"} 
        btnWidth={"450%"} btnHeight={"80px"} btn={"btn-luchador"} talentToSelect={"talent-to-select "}/>
      <TalentTreeButtonComponent nombre={"empty"}  btnWidth={"40%"}/>

      </div>

      <div className='talent-tree-row'>
        <TalentTreeButtonComponent nombre={"lineVer"}  />
        <TalentTreeButtonComponent nombre={"empty"} />
        <TalentTreeButtonComponent nombre={"lineVer"}  />
      </div>
  
      <div className='talent-tree-row'>
        <TalentTreeButtonComponent nombre={"Ha"} />
        <TalentTreeButtonComponent nombre={"lineVer"} />
        <TalentTreeButtonComponent nombre={"hihi"} />
        <TalentTreeButtonComponent nombre={"empty"} />
        <TalentTreeButtonComponent nombre={"empty"} />
        <TalentTreeButtonComponent nombre={"hay"} />
      </div>
      <div className='talent-tree-row'>
        <TalentTreeButtonComponent nombre={"hay"} />
        <TalentTreeButtonComponent nombre={"hay"} />
        <TalentTreeButtonComponent nombre={"hay"} />
      </div>
      <div className='talent-tree-row'>
        <TalentTreeButtonComponent nombre={"hay"} />
        <TalentTreeButtonComponent nombre={"hay"} />
        <TalentTreeButtonComponent nombre={"hay"} />
      </div>
      </div>
    )
  }
  

export default TalentTreeAjaniLuchador
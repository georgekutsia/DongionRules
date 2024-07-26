import React from 'react'
import TalentTreeButtonComponent from '../TalentTreeButtonComponent'

function TalentTreeAjaniLuchador({}) {
  return (
      <div  className='talent-tree-box'>
      <h3>luchador</h3>
      
      <div className='talent-tree-row'>
      <TalentTreeButtonComponent nombre={"hay"} btnWidth={"70%"} btnHeight={"60px"} btn={"btn-luchador"}/>
      </div>


      <div className='talent-tree-row'>
      <TalentTreeButtonComponent  />
      <TalentTreeButtonComponent />
      <TalentTreeButtonComponent  />
      </div>
  
      <div className='talent-tree-row'>
      <TalentTreeButtonComponent nombre={"bulala"} />
      <TalentTreeButtonComponent nombre={"hay"} />
      <TalentTreeButtonComponent nombre={"bulala"} />
      <TalentTreeButtonComponent nombre={"bulala"} />
      <TalentTreeButtonComponent nombre={"bulala"} />
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
import React, { useEffect, useState } from 'react'
import { SwordsBall } from '../../component'
import data from "../../data/dataPresentación"
function SpecialScreens() {
  const [obs, setObs] = useState([])
  useEffect(() => {
    setObs(data)
  },[])
  return (
    <div align="center" >
        <SwordsBall  ballDiv={"sky-sword"} ballImgs={"special-special"}/>
        <h5 className='title-shop' >Objetos Especiales</h5>
          <div align="center" >
            <div>
                <div style={{borderColor:"maroon"}} className='scrolling-space m-1'>
                      <div className="scrolling-wrapper">
                          {obs.map((ob) =>( 
                            <div key={ob.capa} ><h2><img className='img-card-single' src={ob.special} alt="En fabricación" /></h2>
                            </div>))}
                      </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SpecialScreens
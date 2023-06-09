import React, { useEffect, useState } from 'react'
import { SwordsBall } from '../../component'
import data from "../../data/dataPresentación"

function ArmeriaScreen() {
  const [obs, setObs] = useState([])
  useEffect(() => {
    setObs(data)
  },[])
  return (
    <div align="center" >
        <SwordsBall  ballDiv={"sky-sword"} ballImgs={"sword-sword"}/>
        <SwordsBall  ballDiv={"sky-sword-1"} ballImgs={"sword-sword-1"}/>
        <SwordsBall  ballDiv={"sky-sword-2"} ballImgs={"sword-sword-2"}/>
        <h5 className='title-shop' >Armas y armaduras básicas</h5>
          <div align="center">
              <div style={{borderColor:"teal", height:"700px"}} className='scrolling-space m-1'>
                    <div className="scrolling-wrapper" style={{height:"700px"}}>
                        {obs.map((ob) =>( 
                            <div key={ob.capa}  className="mx-2"><h2><img className='img-card-single' src={ob.armbasic} alt="En fabricación"/> <img className='img-card-single' src={ob.armbasic1} alt="En fabricación"/></h2>
                            </div>))}
                    </div>
              </div>
          </div>
        <div >
          <h5 className='title-shop'>Capas Hechizadas</h5>
          <div align="center">
            <div>
                <div style={{borderColor:"maroon"}} className='scrolling-space m-1'>
                      <div className="scrolling-wrapper">
                          {obs.map((ob) =>( 
                              <div key={ob.capa}  className="mx-2"><h2><img className='img-card-single' src={ob.capa} alt="En fabricación" /></h2>
                              </div>))}
                      </div>
                </div>
            </div>
        </div>
          </div>
          <h5 className='title-shop' >Botas y Cinturones Mágicos</h5>
          <div align="center">
              <div style={{borderColor:"olive"}} className='scrolling-space m-1'>
                    <div className="scrolling-wrapper">
                        {obs.map((ob) =>( 
                            <div key={ob.capa} ><h2><img className='img-card' width="405px" src={ob.botas} alt="En fabricación" /></h2>
                            </div>))}
                    </div>
              </div>
          </div>
          <h5 className='title-shop'>Artilugios</h5>
          <div align="center">
              <div style={{borderColor:"teal", height:"700px"}} className='scrolling-space m-1'>
                    <div className="scrolling-wrapper" style={{height:"700px"}}>
                        {obs.map((ob) =>( 
                            <div key={ob.capa}  className="mx-2"><h2><img className='img-card-single' src={ob.random} alt="En fabricación"/> <img className='img-card-single' src={ob.random1} alt="En fabricación"/></h2>
                            </div>))}
                    </div>
              </div>
          </div>
          <h5 className='title-shop'>Cascos Poderosos </h5>
          <div align="center">
            <div style={{borderColor:"cadetblue"}} className='scrolling-space m-1'>
                  <div className="scrolling-wrapper">
                      {obs.map((ob) =>( 
                        <div key={ob.capa}  className="mx-2"><h2>  <img className='img-card-single' src={ob.casco} alt="En fabricación"/> </h2>
                        </div>))}
                  </div>
            </div>
        </div>
    </div>
  )
}

export default ArmeriaScreen
import React, { useContext, useEffect, useState } from 'react'
import { StatsSalud, StatsPlusFight, StatsDam, StatsDefence, StatsChar} from "../../component";
import FadeInOut from "../../component/FadeInOut";
import { Link } from 'react-router-dom';

function PjScreen({counterForMonster}) {


  const [showPage, setShowPage] = useState(true)
  const [showPlusStats, setShowPlusStats] = useState(false)
  const [char, setChar] = useState(true)
  const [back, setBack] = useState(false)


  const toggleStatsMejoradas = () => {
    setShowPlusStats(!showPlusStats);
  };
  const toggleChar = () => {
    setChar(!char);
  };


  useEffect(() => {
    setShowPage(true)
    setTimeout(() => {
    }, 8000)
  }, [])
  return (
    <FadeInOut show={showPage} duration={800}>
        <div className={back ? "moving-background-scenary" : "moving-background-part"} id='profile-size-box'>
            <FadeInOut show={showPage} duration={1200}>
              <div align="center">
                  <div className='inner-box-stats' >
                  <Link className='button-mostrar-mejoradas' onClick={toggleStatsMejoradas}>{showPlusStats ? "Ocultar Estadísticas Mejoradas -" : "Mostrar Estadísticas Mejoradas -"}</Link>
                  <Link className='button-mostrar-mejoradas' onClick={toggleChar}>{char ? "Ocultar Carácter" : "Mostrar Carácter"}</Link>
                        <div style={{  display: showPlusStats ? "flex" : "none" }}> 
                          <FadeInOut show={showPage} duration={400}>
                            <StatsPlusFight/>
                          </FadeInOut>
                        </div>
                        <div style={{  display: char ? "flex" : "none" }}> 
                          <FadeInOut show={char} duration={400}>
                            <StatsChar/>
                          </FadeInOut>
                        </div>
                        <StatsSalud/>
                        <StatsDam />
                        <StatsDefence/>
                  </div>
              </div>
            {/* <h5>Lugar {info.pj.place}</h5> */}
              </FadeInOut>
            </div>
        </FadeInOut>
  )
}

export default PjScreen
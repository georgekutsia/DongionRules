import React, { useContext, useEffect, useState } from 'react'
import { StatsSalud, StatsPlusFight, StatsDam, StatsDefence, StatsChar} from "../../component";
import FadeInOut from "../../component/FadeInOut";
import { Link } from 'react-router-dom';

function PjScreen() {


  const [showPage, setShowPage] = useState(true)
  const [showPlusStats, setShowPlusStats] = useState(false)
  const [char, setChar] = useState(false)
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
              <div className='big-stats-box'  align="center">
                  <div className='inner-box-stats' >
                    <div>
                    <Link className='button-mostrar-mejoradas' onClick={toggleStatsMejoradas}>{showPlusStats ? <i className="fa-regular fa-hand-back-fist"></i> : <i className="fa-solid fa-hand-back-fist"></i>}</Link>
                    <Link className='button-mostrar-mejoradas' onClick={toggleChar}>{char ? <i className="fa-solid fa-user"></i> :<i className="fa-solid fa-user-secret"></i>}</Link>
                    </div>
                        <div style={{  display: showPlusStats ? "block" : "none" }}> 
                          <FadeInOut show={showPage} duration={400}>
                            <StatsPlusFight/>
                          </FadeInOut>
                        </div>
                        <div style={{  display: char ? "block" : "none" }}> 
                          <FadeInOut show={char} duration={400}>
                            <StatsChar/>
                          </FadeInOut>
                        </div>
                          <StatsSalud/>
                          <StatsDam />
                          <StatsDefence/>
                  </div>
              </div>
              </FadeInOut>
            </div>
        </FadeInOut>
  )
}

export default PjScreen




import React, { useContext, useEffect, useState } from 'react'
import { StatsSalud, StatsPlusFight, StatsDam, StatsDefence, StatsChar} from "../../component";
import FadeInOut from "../../component/FadeInOut";
import { Link } from 'react-router-dom';

function PjScreen({counterForMonster}) {


  const [showPage, setShowPage] = useState(true)
  const [showPlusStats, setShowPlusStats] = useState(false)
  const [char, setChar] = useState(false)
  const [dispStats, setDispStats] = useState(true)
  const [back, setBack] = useState(false)
  const [dude, setDude] = useState(true)
  const [showMonster1, setShowMonster1] = useState(true)
  const [chest, setChest] = useState(false)
  const [smoller, setSmoller] = useState(true)
  const [background, setBackground] = useState(false)
  const [showBigMonster, setShowBigMonster] = useState(false)
  const [showMonster, setShowMonster] = useState(false)
  const [sideBar, setSideBar] = useState(false)

  useEffect(() => {
    setShowPage(true)
    setDude(true)
    setTimeout(() => {
      setDude(false)
    }, 8000)
  }, [])
  return (
    <FadeInOut show={showPage} duration={800}>
        <div className={back ? "moving-background-scenary" : "moving-background-part"} id='profile-size-box'>
            <FadeInOut show={showPage} duration={1200}>
              <div align="center">
                  <div className='inner-box-stats' >
                        <Link onClick={() => setShowPlusStats(!showPlusStats)} className='button-mostrar-mejoradas mx-4'>Estadísticas Mejoradas</Link>
                        <Link onClick={() => setChar(!char)} className='button-mostrar-mejoradas'>Carácter</Link>
                        {showPlusStats && 
                          <FadeInOut show={showPage} duration={1000}>
                            <StatsPlusFight/>
                          </FadeInOut>
                        }
                        {char && 
                          <FadeInOut show={char} duration={1000}>
                            <StatsChar/>
                          </FadeInOut>
                        }
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
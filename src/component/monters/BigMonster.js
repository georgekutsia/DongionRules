import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ButtonMonstersCount from './ButtonMonstersCount'
import FadeInOut from "../../component/FadeInOut";




function BigMonster({ r, g, b, position}) {
  const [showMonster1, setShowMonster1] = useState(true)


  return (
    <div className='big-monster-scroller'>
        <div align="center"  style={{borderRadius:"5px", backgroundColor: `rgb(${r}, ${g}, ${b})`, margin:"2px", }}>
            <Link className='link-name-monster' onClick={()=> setShowMonster1(!showMonster1)}>Monstraco {position}</Link>
              {showMonster1 &&
              <FadeInOut show={showMonster1} duration={1000}>
                <ButtonMonstersCount  dead="fa-skull"  colorDead="grey" colorText={"rgb(238, 173, 173)"} cTurn={0} tu0={"fa-hourglass"}/>
            </FadeInOut>
          }
        </div>
    </div>
  )
}

export default BigMonster 
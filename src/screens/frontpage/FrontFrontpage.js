import React from 'react'
import { Link } from 'react-router-dom'
import { BackgroundFloatingBuble } from '../../component';
import Creador from '../../component/creador/Creador'
import FadeInOut from "../../component/FadeInOut";

function FrontFrontpage() {
  return (
    <div align="center" className='frontfront-dongions'>
            <BackgroundFloatingBuble floatingBalls=
    {"url(https://res.cloudinary.com/dfrda73uc/image/upload/v1665619992/donGions%20imgs/backgroundEffects/pngwing.com_69_bljsta.png)"} 
    widthBall={"5px"} heigthBall={"5px"} radiusBall={"50%"} idFlow={"square-flow"}/>
        <div align="center" style={{width:"500px"}}  id="text" className='div-neon frontfront-dongions'>
            <Link  style={{textDecoration:"none"}} to="/rules"> <h1 className='h1-neon'><span id='donset'> Don </span><span id="offset">Gio </span>ns</h1></Link>
        </div>
        <FadeInOut show duration={2000}>
          <Creador/>
        </FadeInOut>
    </div>
  )
}

export default FrontFrontpage
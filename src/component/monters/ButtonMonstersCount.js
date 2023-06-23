import React, { useState } from 'react'

function ButtonCounts({ dead, colorDead, colorText, tu0}) {
  const [count, setCount] = useState(0);
  const[turns, setTurns] = useState(0)
  const[something, setSomething] = useState(0)
  const [monsterName, setMonsterName] = useState('');

  const handleMonsterNameChange = (event) => {
    setMonsterName(event.target.value);
  };
  
  let words = "Sin Dañar"
  let borderCount = null
  let widthCount = "53px"
  if(count >= 1){
    widthCount = "63px"
    words = "¡Dañado!"

  } 
  if(count >= 2){
    widthCount = "63px"
    words = "Daño mínimo"

  } 
    if(count >= 30){
      colorText = "rgb(244, 128, 128)"
      borderCount = ""
      words = "Daño notable"
    } 
    if (count >= 60){
      colorText = "rgb(243, 73, 73)"
      borderCount = "2px dotted red"
      words = "¡Brutal!"

    }
    if(count >= 80) {
      colorText = "rgb(243, 13, 13)"
      borderCount = "3px solid red"
      words = "¡Colosal!"

    }
    if(count >= 100){
      colorText="rgb(243, 0, 0)"
      borderCount = "4px double red"
      widthCount = "83px"
      words = "¡Desmesurado!"
    }
    if(count >= 120){
      colorText="rgb(243, 0, 0)"
      borderCount = "4px double red"
      widthCount = "83px"
      words = "¡¡Sin piedad!!"
    }
    if(count >= 160){
      colorText="rgb(243, 0, 0)"
      borderCount = "4px double red"
      widthCount = "83px"
      words = "¡¿Es inmortal?!"
    }
  const reset = () => setCount(0);
  const countUp = () => setCount((countPrev) => countPrev < 200 ? countPrev + 5 : countPrev);
  const countUpH = () => setCount((countPrev) => countPrev < 200 ? countPrev + 1 : countPrev);
  const countDown = () => setCount((countPrev) => countPrev > 4.5 ? countPrev - 5 : countPrev);
  const countDownH = () => setCount((countPrev) => countPrev > 0.4 ? countPrev - 1 : countPrev);

  const resetTurn = () => setTurns(0);
  const countTurnsUp = () => setTurns((countPrev) => countPrev < 200 ? countPrev + 1 : countPrev);
  const countTurnsDown = () => setTurns((countPrev) => countPrev > 0 ? countPrev - 1 : countPrev);
  
  const resetSomthing = () => setSomething(0);
  const countSomethingUp = () => setSomething((countPrev) => countPrev < 200 ? countPrev + 1 : countPrev);
  const countSomethingDown = () => setSomething((countPrev) => countPrev > 0 ? countPrev - 1 : countPrev);
  

  return (
    <div align="center" className='button-monster-size'>
        <div>
            <h5>{words}</h5>
        <input className='input-monster-name' placeholder='Escribe el nombre...' type="text" value={monsterName} onChange={handleMonsterNameChange} />
      </div>
        <div>
            <div>
              <button style={{scale:"1.2", marginRight:"15px"}} className="btn-rest-stats" onClick={countUp} disabled={count === 200}><i className="fa-solid fa-plus">5</i></button>
              <button  className="btn-rest-stats" onClick={countUpH} disabled={count === 200}><i className="fa-solid fa-plus">1</i></button>
            </div>
                <button style={{color:`${colorText}`, border:`${borderCount}`, width:`${widthCount}`,height:`56px`, padding:"2px"}} className="btn-reset-stats" onClick={reset}><h1> {count !==0  ? count :<i style={{color:`${colorDead}`}} className={`fa-solid ${dead}`}></i>}</h1></button>
            <div>
              <button className="btn-rest-stats" onClick={countDownH} disabled={count === 0}><i className="fa-solid fa-minus">1</i></button>
              <button style={{scale:"1.2", marginRight:"5px", marginLeft:"20px"}} className="btn-rest-stats" onClick={countDown} disabled={count === 0}><i className="fa-solid fa-minus"></i>5</button>
            </div>
        <div className='bulala'>
        </div>
          <div> 
              <button style={{scale:"0.8", marginRight:"-15px", marginLeft:"-8px"}} className="btn-rest-stats" onClick={countTurnsDown} disabled={turns === 0}><i className="fa-solid fa-minus"></i>1</button>
              <button style={{color:`${colorText}`, scale:"0.9", marginLeft:"4px"}} className="btn-reset-stats-time" onClick={resetTurn}><h1> {turns !==0  ? turns :<i style={{color:`${colorDead}`}} className={`fa-solid ${tu0}`}></i>}</h1></button>
              <button style={{scale:"0.8", marginRight:"-10px", marginLeft:"-10px"}} className="btn-rest-stats" onClick={countTurnsUp} disabled={turns === 200}><i className="fa-solid fa-plus">1</i></button>
          </div>  
        </div>
    </div>
  )
}
ButtonCounts.defaultProps = {
  max: 20,
  stat: 0,
  dead: 0,
  colorDead: "grey",
  colorText:"white"
}

export default ButtonCounts
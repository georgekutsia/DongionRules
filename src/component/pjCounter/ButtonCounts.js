import React, { useState } from 'react'


function ButtonCounts({ stat, dead, colorDead, colorText}) {
  const [count, setCount] = useState(stat);

  const reset = () => setCount(stat);
  const countUp = () => setCount((countPrev) =>  stat ? countPrev + 1 : countPrev);
  const countUpH = () => setCount((countPrev) => stat ? countPrev + 0.5 : countPrev);

  const countDown = () => setCount((countPrev) => countPrev > 0.5 ? countPrev - 1 : countPrev);
  const countDownH = () => setCount((countPrev) => countPrev > 0.4 ? countPrev - 0.5 : countPrev);

  return (
    <div align="center" className='d-flex'>
        <button style={{transform: "scale(0.5)", margin:"0px -10px 0px -20px"}} className="btn-rest-stats" onClick={countDownH} disabled={count === 0}><i className="fa-solid fa-minus"></i></button>
        <button className="btn-rest-stats" onClick={countDown} disabled={count === 0}><i className="fa-solid fa-minus"></i></button>
        <button style={{color:`${colorText}`}} className="btn-reset-stats" onClick={reset}><h1> {count !==0  ? count :<i style={{color:`${colorDead}`}} className={`fa-solid ${dead}`}></i>}</h1></button>
        <button  className="btn-rest-stats" onClick={countUp} disabled={count === 50}><i className="fa-solid fa-plus"></i></button>
        <button style={{transform: "scale(0.5)", margin:"0px -20px 0px -10px"}}  className="btn-rest-stats" onClick={countUpH} disabled={count === stat}><i className="fa-solid fa-plus"></i></button>
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
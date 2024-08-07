import React, { useState, useEffect } from 'react';

function ButtonCounts({ stat, dead, colorDead, colorText, statName }) {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem(statName);
    return saved !== null ? JSON.parse(saved) : stat;
  });

  useEffect(() => {
    localStorage.setItem(statName, JSON.stringify(count));
  }, [count, statName]);

  const reset = () => setCount(stat);
  const countUp = () => setCount((countPrev) => stat ? countPrev + 1 : countPrev);
  const countUpH = () => setCount((countPrev) => stat ? countPrev + 0.5 : countPrev);

  const countDown = () => setCount((countPrev) => countPrev > 0.5 ? countPrev - 1 : countPrev);
  const countDownH = () => setCount((countPrev) => countPrev > 0.4 ? countPrev - 0.5 : countPrev);

  return (
    <div className='d-flex button-align'>
      <div>
        <button style={{transform: "scale(0.6)", margin:"-10px 0px 0px -15px"}} className="btn-rest-stats d-block" onClick={countDownH} disabled={count === 0}><i className="fa-solid fa-minus"></i></button>
        <button style={{margin:"-10px 0px 0px -10px"}} className="btn-rest-stats d-block" onClick={countDown} disabled={count === 0}><i className="fa-solid fa-minus"></i></button>
      </div>
      <div>
        <button style={{color:`${colorText}`}} className="btn-reset-stats" onClick={reset}><h1> {count !==0  ? count :<i style={{color:`${colorDead}`}} className={`fa-solid ${dead}`}></i>}</h1></button>
      </div>
      <div>
        <button style={{transform: "scale(0.6)", margin:"-10px -15px 0px 0px"}}  className="btn-rest-stats d-block" onClick={countUpH} disabled={count === stat}><i className="fa-solid fa-plus"></i></button>
        <button style={{margin:"-10px -10px 0px 0px"}} className="btn-rest-stats d-block" onClick={countUp} disabled={count === 50}><i className="fa-solid fa-plus"></i></button>
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

export default ButtonCounts;

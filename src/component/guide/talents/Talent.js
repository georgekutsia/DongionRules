import React, { useState } from 'react'
function Talent({handleLuchador,  handleHechicero, handleCazador, talFirstOne, talFirstTwo,talFirstThree}) {

  const [first, setfirst] = useState(true)
  const [second, setsecond] = useState(false)
  const [third, setthird] = useState(false)


  const handleFirst = () => {
    handleLuchador()
    setfirst(!first)
    setsecond(false)
    setthird(false)

  };
  const handleSecond = () => {
    handleHechicero()
    setsecond(!second)
    setfirst(false)
    setthird(false)
  };
  const handleThird = () => {
    handleCazador()
    setthird(!third)
    setfirst(false)
    setsecond(false)
  };

  return (
    <div className='talent-div'>
    {/* {talFirstOne && <LineConect positioningLine={positionLine1} colorLine={colorLine1} heightLine={heightLine1} widthLine={widthLine1}/>} */}
      <div className='talent-first'>
          <button onClick={handleFirst} className={first ? "talent-first-selected talent-items":'talent-first-1 talent-items'}>Luchador</button>
          <button onClick={handleSecond} className={second ? "talent-second-selected talent-items":'talent-first-2 talent-items' }>Hechicero</button>
          <button onClick={handleThird} className={third ? "talent-third-selected talent-items":'talent-first-3 talent-items'}>Cazador</button>
      </div>
        
      </div>
  )
}

export default Talent
import React from 'react'
function Talent({handleLuchador,handleHechicero, handleCazador, talFirstOne, talFirstTwo,talFirstThree}) {
 
  return (
    <div className='talent-div'>
    {/* {talFirstOne && <LineConect positioningLine={positionLine1} colorLine={colorLine1} heightLine={heightLine1} widthLine={widthLine1}/>} */}
      <div className='talent-first'>
          <button onClick={handleLuchador} className={talFirstOne ? "talent-first-selected talent-items":'talent-first-1 talent-items'}>Luchador</button>
          <button onClick={handleHechicero} className={talFirstTwo ? "talent-second-selected talent-items":'talent-first-2 talent-items' }>Hechicero</button>
          <button onClick={handleCazador} className={talFirstThree ? "talent-third-selected talent-items":'talent-first-3 talent-items'}>Cazador</button>
      </div>
        
      </div>
  )
}

export default Talent
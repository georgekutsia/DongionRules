import React from 'react'

function Luck() {
  return (
    <div style={{backgroundColor:"rgb(16, 4, 14)"}} className='background-rule-info' data-aos="fade-in">
      <h1 id="s-suerte" align="center" className='texto-resaltado-suerte'>Suerte</h1> 
      <img className='character-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682202306/donGions%20imgs/characters/luck_fvyffm.png" alt="Charisma"/>
    <div className='d-flex justify-content-evenly'>
      <div><h4 style={{color: "rgb(76, 8, 131)"}} className='rules-show-shadow'>1-11 - <span>Común</span></h4> </div>
      <div><h4 style={{color: "rgb(104, 24, 170)"}} className='rules-show-shadow'>12-16 -<span>Poco Común</span></h4> </div>
      <div><h4 style={{color: "rgb(141, 37, 227)"}} className='rules-show-shadow'>17-19 -<span>Raro</span></h4> </div>
      <div><h4 style={{color: "rgb(182, 95, 253)"}} className='rules-show-shadow'>20+ -<span>Muy Raro</span></h4> </div>

    </div>
        <article  align="center" className='background-list-actions'>
        &nbsp;&nbsp;&nbsp; La suerte puede cambiar por completo tus probabilidades de supervivencia y calidad de combate, 
        además de añadir más recompensas para tu equipo y convertirte en el primero en iniciar las acciones. A veces usarás dado de 20 para poner a prueba tu suerte.
        </article>
        <ul>
          <li><i className="fa-solid fa-dice"></i> &nbsp;Añade +2 por cada punto de suerte a tus tiradas de suerte</li>
          <li><i className="fa-solid fa-dice"></i>&nbsp;	Tantas veces por combate como suerte tengas, puedes repetir una tirada de dados en la que hayas sacado 1. Con suerte +2 se puede usar el mismo efecto con tiradas de dado con resultado 2 y con suerte +3 con resultado 3 etc.</li>
          <li><i className="fa-solid fa-dice"></i>&nbsp;	Si un jugador encuentra un objeto cuyo valor se desconoce, dependerá de su suerte que el objeto sea valioso o no. </li>
          <li><i className="fa-solid fa-dice"></i>&nbsp;	Las pruebas que requierean tiempo obtienen 10% por cada punto de suerte adicional de tiempo</li>
          <li><i className="fa-solid fa-dice"></i>&nbsp;	Algunos cofres contienen una cantidad de objeto que se determina con una tirada de dados. Cada punto de suerte te da un objeto adicional del tipo.</li>
          <li></li>
          <li></li>
        </ul>
    </div>
  )
}

export default Luck
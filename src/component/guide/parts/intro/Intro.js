import React from 'react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {PlansImgs, PlansBast, PlansRing, PlansBrazal, PlansRama} from "../../../../component"


function Intro() {
  const [navLateral, setNavLateral] = useState(false)
  return (
    <div  className='dongionsdetail-box'>
      <div align="center">
        <div id='link-a-partes-intro'>
          <Link className='folder-link' style={{color:"lightblue", fontSize:"calc(16px + 0.5vw)"}} onClick={()=>setNavLateral(!navLateral)} >{navLateral? <i className="fa-solid fa-folder-open"></i> : <i className="fa-solid fa-folder"></i>}</Link>
          {navLateral && 
          <>
          <a href="#p-explico">Lo básico</a>
          <a href="#p-personajes">Personajes Jugables</a>
          <a href="#p-porque">Qué tiene de especial</a>
          <a href="#p-comunicarse">Comunicarse con los Guías</a>
          <a href="#p-canalizar">Canalizar la Magia</a>
          <a href="#p-misiones">Misiones únicas</a>
          </>
          }
        </div>
        <h2  className='dongionsdetail-box-title'>¡Al fín estás por aqui!</h2>
      </div>
      <div className='dongionsdetail-box-parts'>
        <h3 id='p-explico' className='dongionsdetail-title'>Te explico...</h3>
          <article>Estás entrando en un mundo retorcido, complejo y lleno de posibilidades fruto de años de esfuerzo, reflexión y trabajo personal. El primer mundo o plano sobre el que he trabajado se llama Beleron
          y el juego se desarolla en sus vastos reinos, variopintos pueblos, sin fin de clanes, personajes imponentes e historias enrevesadas, en las que las cosas no son lo que parecen, menos cuando son tanto lo que parecen
          que no podrían ser otra cosa. Básicamente me gusta sorprender a los jugadores.</article>
          <article> <span>    Beleron es un cruce entre muchos planos, donde realidades han llegado a estrellarse hace siglos, así que contiene partes de otros planos y criaturas de otros mundos.</span></article>
          <article>Me gusta empezar todas las partidas con los jugadores sin recordar cómo han llegado allí o qué estan haciendo, sea cual sea la situación y que una <span> parte del juego sea averiguar
          qué ha pasado e intentar recuperar los recuerdos y reconstruir su pasado.</span></article>
      </div>
      <div className='dongionsdetail-box-parts'>
        <h3 id='p-porque' className='dongionsdetail-title'>¿Por qué DonGions y no otros...?</h3>
        <article>Me gusta tomar algo que funciona y hacerlo mejor, encontrando las maneras de hacerlo más divertido, entretenido o desafiante. Más justo y equilibrado. Que sea diferente cada partida, pero
        que consistentemente puedas disfrutar de las partes que te gustan del juego. <span>En este juego cualquier decisión, tirada de dados, apertura de cofres, resolver acertijos etc quería que fuera una 
        experiencia especial para mis jugadores.</span></article>
        <article>Le he dado mucha vuelta al combate, intentando hacerlo diferente y a la vez intuitivo para los que ya saben jugar. He creado mecánicas y objetos que no he visto en otros juegos y mejorado lo que no me gustaba
          de mi experiencia con los juegos de rol en general. El sistema de lanzamiento de dados, las frases inspiradoras, páginas malditas, los sellos, descubrimiento de cofres, pruebas y acertijos y alguna que otra cosa más, 
          hacen de este juego algo diferente. No presumo de que sea bueno, pero es diferente...</article>
      </div>
      <div className='dongionsdetail-box-parts'>
        <h3 id='p-personajes' className='dongionsdetail-title'>¿Y los personajes jugables?</h3>
          <article>En este juego tu eres tú mismo, transportado a un mundo lleno de magia, violencia, desafíos y posibilidades. El personaje con el que jugarás eres tú mismo, pero podrás elegir "guias" que serán los Planeswalkers
          que te enseñen y guíen para alcanzar tu potencial.</article>
          <h5>Estos son los guías jugables hasta ahora. Ten en cuenta que a parte de sus habilidades pasivas, disponen de habilidades y hechizos únicos y una rama de talentos adaptada a cada uno:</h5>
          <PlansImgs/>
      </div>
      <div className='dongionsdetail-box-parts'>
        <h3 id='p-comunicarse' className='dongionsdetail-title'>¿Cómo comunicarte con tu guía? Buena pregunta...</h3>
          <article>Normalmente en la primera o segunda partida los jugadores consiguen un objeto que les comunica con los guías. Aunque al principio en posesión del objeto tengan solo trazas de sus recuerdos y oigan
          poco más que susurros y palabras sueltas, al avanzar en el juego, en la rama de talentos y al subir de habilidades, podrán conectar mejor.</article>
          <article>En mis partidas suelo llevarlos hasta los bastones que pertenecieron a los planeswalkers y sólo por estar en su posesión, ya pueden beneficiar al grupo. Esto hace que según qué o cuantos jugadores
          estén presentes en la partida, el sistema varie ligeramente.</article>
          <div className='img-plans-intro'>
      <PlansBast/>
          </div>
      </div>
        <div className='dongionsdetail-box-parts'>
          <h3 id='p-canalizar' className='dongionsdetail-title'>¿Cómo se canaliza la magia?</h3>
            <article> En Beleron existen gemas y piedras preciosas que ayudan a canalizar la magia. Generalmente utilizados en anillos, los niños empiezan a practicar con su hechizo básico desde muy temprano.
            Los jugadores podrán adquirir el anillo si lo desean, comprándolo o consiguiéndolo en una misión, pero por su naturaleza, cada jugador podrá lanzar un tipo de hechizo básico que tiene efecto único.</article>
            <h5>Los anillos ayudan a conseguir esencias y acumularlos mejor y no cuenta para la cantidad de anillos mágicos que puedes tener por nivel</h5>
            <div className='img-plans-intro'>
        <PlansRing/>
            </div>
        </div>
        <div className='dongionsdetail-box-parts'>
          <h3 id='p-misiones' className='dongionsdetail-title'>Misiones de Planeswalker</h3>
            <article> Hay varias misiones por jugador que pueden cumplir en partidas sueltas para conseguir objetos únicos, avanzar en la rama de talentos, desbloquear información para las próximas partidas etc.</article>
            <h5>Estos brazaletes sólo se pueden conseguir en misiones concretas y potencian los hechizos básicos de cada jugador</h5>
            <div className='img-plans-intro'>
        <PlansBrazal/>
            </div>
        </div>
    </div>
  )
}

export default Intro
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {IntroComponents} from "../../../../component"
import {dataIntroAll} from '../../../../data/dataIntroAll'

function Intro() {
  const [navLateral, setNavLateral] = useState(false)
  const [lanzar, setLanzar] = useState(false)

  const [dataIntro, setDataIntro] = useState(dataIntroAll);

  const handleButton1  = (ting, setting) => {
    setting(!ting)
  }
  return (
    <div  className='dongionsdetail-box' data-aos="fade-in">
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
        <h2 data-aos="fade-in"  className='dongionsdetail-box-title'>¡Al fín estás por aqui!</h2>
      </div>
      <IntroComponents
        titulo="Te explico..."
        galeria1={dataIntro.paisajes}
        texto1="Estás entrando en un mundo retorcido, complejo y lleno de posibilidades fruto de años de esfuerzo, reflexión y trabajo personal. El primer mundo o plano sobre el que he trabajado se llama BELERON y el juego se desarrolla en sus vastos reinos, variopintos pueblos, sin fin de clanes, personajes imponentes e historias enrevesadas, en las que las cosas no son lo que parecen, menos cuando son tanto lo que parecen que no podrían ser otra cosa. Básicamente me gusta sorprender a los jugadores."
        texto2="Tengo varias versiones del plano de BELERON para dar una explicación a todos los acontecimientos, criaturas y lugares extraños con los que tendrán que lidiar los jugadores."
        texto3="Me gusta empezar todas las partidas con los jugadores sin recordar cómo han llegado allí o qué están haciendo, sea cual sea la situación y que una parte del juego sea averiguar qué ha pasado e intentar recuperar los recuerdos y reconstruir su pasado."
      />
      <IntroComponents titulo={"¿Por qué DonGions y no otros...?"} 
        texto1={"Me gusta tomar algo que funciona y hacerlo mejor, encontrando las maneras de hacerlo más divertido, entretenido o desafiante. Más justo y equilibrado. Que sea diferente cada partida, pero que consistentemente puedas disfrutar de las partes que te gustan del juego."}
        texto3={"Le he dado mucha vuelta al combate, intentando hacerlo diferente y a la vez intuitivo para los que ya saben jugar. He creado mecánicas y objetos que no he visto en otros juegos y mejorado lo que no me gustaba de mi experiencia con los juegos de rol en general. El sistema de lanzamiento de dados, las frases inspiradoras, páginas malditas, los sellos, descubrimiento de cofres, pruebas y acertijos y alguna que otra cosa más, hacen de este juego algo diferente. No presumo de que sea bueno, pero es diferente..."}     
        texto4={"He intentado hacer que las tiradas de dados, aperturas de cofres, resolver acertijos, abrir cerraduras, obtener loot etc fuera una experiencia especial"}
        button1={"Ver qué hay de diferente..."}
        handleButton1={ () => handleButton1(lanzar, setLanzar)}
      />
        <div>
        {lanzar &&  
          <div className='lanzamiento-intro-expl'>
            <img src="https://res.cloudinary.com/dfrda73uc/image/upload/v1687823075/donGions%20imgs/Tablero_dongions_izg2k2.png" alt="Tablero" />
            <article> Quería hacer que lanzar dados implicara algo de habilidad, por lo pequeña que fuera y también hubiera algún riesgo por no tener cuidado. Este tablero está diseñado
            para que el dado se coloce en la base, sobre una plataforma y sobre ella se coloque el dado a lanzar. Se puede usar el dedo o un golpe seco para hacer rodar el dado sobre el tablero y se obtienen
            beneficios adicionales o penalización por hacerlo. <span>Este tablero sólo pueden usarlo jugadores con Percepción, Cinestesia o Suerte</span> </article>
          </div>}
        </div>
        <IntroComponents titulo={"¿Y los personajes jugables?"} 
        galeria2={dataIntro.personajes}
        texto1={`En este juego tu eres tú mismo, transportado a un mundo lleno de magia, violencia, desafíos y posibilidades. El personaje con el que jugarás eres tú mismo, pero podrás elegir "Guias" que serán los Planeswalkers que te enseñen y guíen para alcanzar tu potencial.`}
        texto2={"Estos son los guías jugables hasta ahora. Tienen un Dominio que les diferencia ampliamente de los demás personajes que es como una habilidad pasiva y una Especialidad que manejado correctamente, puede hacer la experiencia del juego muy entretenida y poderosa."}     
        handleButton1={ () => handleButton1(lanzar, setLanzar)}
      />

<IntroComponents titulo={"¿Cómo comunicarte con tu guía? Buena pregunta..."} 
        galeria2={dataIntro.bastones}
        texto1={`Normalmente en la primera o segunda partida los jugadores consiguen un objeto que les comunica con los guías. Aunque al principio en posesión del objeto tengan solo trazas de sus recuerdos y oigan poco más que susurros y palabras sueltas, al avanzar en el juego, en la rama de talentos y al subir de habilidades, podrán conectar mejor.`}
        texto2={"En mis partidas suelo llevarlos hasta los bastones que pertenecieron a los planeswalkers y sólo por estar en su posesión, ya pueden beneficiar al grupo. Esto hace que según qué o cuantos jugadores estén presentes en la partida, el juego varie ligeramente."}     
      />
<IntroComponents titulo={"¿Cómo se canaliza la magia?"} 
        galeria2={dataIntro.anillos}
        texto1={`En Beleron existen gemas y piedras preciosas que ayudan a canalizar la magia. Generalmente utilizados en anillos, los niños empiezan a practicar con su hechizo básico desde muy temprano. Los jugadores podrán adquirir el anillo si lo desean, comprándolo o consiguiéndolo en una misión, pero por su naturaleza, cada jugador podrá lanzar un tipo de hechizo básico que tiene efecto único.`}
        texto2={"Los anillos ayudan a conseguir esencias y acumularlos mejor y no cuenta para la cantidad de anillos mágicos que puedes tener por nivel."}     
      />
<IntroComponents titulo={"Misiones de Planeswalker"} 
        galeria2={dataIntro.brazal}
        texto1={`Hay varias misiones por jugador que pueden cumplir en partidas sueltas para conseguir objetos únicos, avanzar en la rama de talentos, desbloquear información para las próximas partidas etc.`}
        texto2={"Estos brazaletes sólo se pueden conseguir en misiones concretas y potencian los hechizos básicos de cada jugador."}     
      />

    </div>
  )
}

export default Intro
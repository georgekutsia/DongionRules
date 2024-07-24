import React from 'react'
import CombatComponent from './CombatComponent'
import CombatTitleComponent from './CombatTitleComponent'

function Combat() {
  return (
    <div data-aos="fade-in">
    <div className='combat-images-top'>
      <img className='combat-top-img' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1686322667/donGions%20imgs/ruleImages/combate-izquierda_jtjuow.png" alt="" />
        <h1 id="combat" align="center" className='texto-resaltado-combate'> Combate</h1>
      <img className='combat-top-img' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1686322666/donGions%20imgs/ruleImages/combate-derecha_f5rlbi.png" alt="" />
    </div>
      <h1 id="s-tiempo" align="center" className='texto-resaltado-combate-tiempo'> Tiempo de combate</h1>
      <article className="definicion-concepto">  Cuando el grupo ataque o sea atacado, empieza el combate, las rondas y las cuentas.
            Cada comienzo de combate reinicia los ataques, hechizos, habilidades etc que tengan usos limitados por combate. Mientras haya transcurrido suficiente tiempo
            entre un combate y otro, se reinician las mismas de nuevo, aunque haya pasado poco tiempo. 
            <div>
                 Los combates se componen de cualquier cantidad de rondas que hagan 
            falta hasta que haya alguna resolución. Las<span style={{color:"saddlebrown"}}> Rondas</span> se componen de 2 <span style={{color:"chocolate"}}> Turnos</span>: el turno de los jugadores y el turno de los PNJ. 
            Dependiendo de cómo empiece el combate, se determina quien va primero de los dos. Los jugadores pueden planificar su turno como prefieran, 
            jugando en el orden que mejor venga para su estrategia. Cada comienzo de turno de los jugadores los personajes reinician sus <span style={{color:"sandybrown"}}> Acciones</span> 
            y también recuperan un punto de maná. Cada personaje recupera la cantidad de <span style={{color:"sandybrown"}}> Acciones</span> que le corresponda, generalmente 5, y puede gastarlas como 
            prefiera durante toda la ronda, tanto en su turno como en el de los PNJ. Si se quiren usar acciones de defensa, hay que dejar algunas acciones para el turno de defensa
            <div align="center" className='texto-resaltado-degradado'>Los jugadores sólo pueden usar 2 acciones seguidas (concentración no cuenta). 
             Esto se ve afectado por Velocidad de Movimiento.</div>
            </div>
            <div>
               En resumen: Combate consiste de<span style={{color:"saddlebrown"}}> x Rondas</span> Cada Ronda tiene <span style={{color:"chocolate"}}>2 Turnos</span>: de los jugadores o de los PNJ. 
            Cada comienzo de Ronda se recuperan todas las acciones y maná. No se acumulan. 
            Cada turno tiene <span style={{color:"sandybrown"}}>5 Acciones</span>. Las acciones se reparten entre los 2 turnos como se desee.
            </div>
        </article>
        <CombatTitleComponent titulo={"Ataques básicos"} texto={"Se lanza un dado de 20 caras y se debe superar el acierto para que el daño impacte "}  descriptionColor={"red"}/>
        <div className='componente-ataque'>
            <article className="definicion-concepto">
            <div className='combat-separation'>
              <CombatComponent textColor={"red"} nombre={"Ataque físico"} foto={"https://res.cloudinary.com/dfrda73uc/image/upload/v1682263734/donGions%20imgs/ruleImages/ataque_fisico_tlsnmn.jpg"} 
                texto={"El daño básico de la estadística del personaje más cualquier modificador del arma, habilidad, hechizo, aura etc. Puede ser también sin armas(desarmado), pudiendo pelear con cualquier parte del cuerpo. <br />	Todas las armas de dos manos se pueden sujetar con una, pero disminuye el acierto total en 1 por cada carga de cada arma y todos los golpes fallidos cuentan como contundentes"}/>
              
              <CombatComponent textColor={"red"} nombre={"Ataque a distancia:"} foto={"https://res.cloudinary.com/dfrda73uc/image/upload/v1682263462/donGions%20imgs/ruleImages/ataque_distancia_ene3hc.jpg"} 
                texto={"con armas arrojadizas o armas a distancia. Tienen una carga determinada de munición que obtienes al entrar en combate. Se puede disparar a una distancia mayor que la que indican las estadísticas del personaje, pero cada casilla adicional disminuye el acierto en 3. Lanzar el arma es un ataque a distancia."}/>

              <CombatComponent textColor={"red"} nombre={"Ataque con hechizos:"} foto={"https://res.cloudinary.com/dfrda73uc/image/upload/v1682263462/donGions%20imgs/ruleImages/hechizos_p2nupz.jpg"}   texto={" Necesitas objetos mágicos que te permitan lanzar tu hechizo básico o puedes usar cartas de hechizos. Los hechizos que no son básicos tienen acierto incrementado en 10."}/>

              <div className='ataque-potenciado'>
                <h1 id="s-potenciados" align="center" className='texto-resaltado-ataques-potenciados'> Ataques básicos potenciados:</h1>
              <CombatComponent textColor={"red"} nombre={"Precisión:"} foto={"https://res.cloudinary.com/dfrda73uc/image/upload/v1682325507/donGions%20imgs/ruleImages/precision_oig57o.jpg"}   texto={"La cantidad de dados que se lanzan para el acierto. Con precisión +2 se lanzan 3 dados de 20 para el acierto y se elige el resultado que más conveniene para la situación"}/>
              <CombatComponent textColor={"red"} nombre={"Velocidad:"} foto={"https://res.cloudinary.com/dfrda73uc/image/upload/v1682325242/donGions%20imgs/ruleImages/velocidad_npwsxf.jpg"}   texto={"La cantidad de dados que cuentan para el daño en el acierto. De nada sirve ser rápido si no tienes precisión en los ataques. Si un jugador tiene 3 en precisión y 2 en velocidad, de los 4 dados que se lancen para el acierto, puede elegir hasta 2 adicionales que le contarán como daño acertado."}/>
              <CombatComponent textColor={"red"} nombre={"Marcialidad:"} foto={"https://res.cloudinary.com/dfrda73uc/image/upload/v1682324910/donGions%20imgs/ruleImages/marcialidad_cu2yvy.jpg"}   texto={"Al luchar desarmado, obtienes Instinto +1 y un D4 para incrementar la esquiva. D6 en el nivel 2. D8 en el 3. Tras una esquiva crítica o por encima de 23, puedes usar un contraataque físico gratuito."}/>
              </div>
            </div>
            </article>
        </div>
        <div className='componente-defensa'>
            <article className="definicion-concepto">
            <div className='combat-separation'>
              <CombatTitleComponent  titulo={"Defensas básicas"} texto={"Se lanza un dado de 20 caras y se debe superar el defensa correspondiente para defenderte con éxito"} descriptionColor={"green"}/>
              <CombatComponent textColor={"green"} nombre={"Esquiva:"} foto={"https://res.cloudinary.com/dfrda73uc/image/upload/v1682286161/donGions%20imgs/ruleImages/esquiva_btlgi3.png"}   texto={" Eludes completamente el daño. Con esquiva crítica puedes empujar un aliado cercano. Tras usar la esquiva (en caso de que falles) puedes usar una habilidad de parada, resistencia o bloqueo con acierto penalizado en 3"}/>
              <CombatComponent textColor={"green"}  nombre={"Bloqueo:"} foto={"https://res.cloudinary.com/dfrda73uc/image/upload/v1682324649/donGions%20imgs/ruleImages/bloqueo_hafq0a.jpg"}   texto={"Con escudos. Reduce el daño físico o de armas a distancia recibidoen porcentaje, indicado sobre los escudos. Si no está indicado, reduce 60% del daño. En bloqueo crítico reduce el daño otro 40%. El bloqueo que mitiga daño por encima del 100%, devuelve el daño extra mitigado a la criatura. No puedes bloquear por la espalda sin  Cinestesia"}/>
              <CombatComponent textColor={"green"} nombre={"Parada:"} foto={"https://res.cloudinary.com/dfrda73uc/image/upload/v1682285953/donGions%20imgs/ruleImages/parada_drexs7.jpg"}   texto={" sólo con armas cuerpo a cuerpo. Paras el ataque de un arma a distancia o cuerpo a cuerpo y reduces el daño en el porcentaje indicado sobre el arma. "}/>
              <CombatComponent textColor={"green"} nombre={"Resistencia:"} foto={"https://res.cloudinary.com/dfrda73uc/image/upload/v1682286156/donGions%20imgs/ruleImages/resistencia_hp4imw.jpg"}   texto={"requiere capa o casco que otorgue la habilidad. Mitiga daño mágico equivalente a tu daño mágico y disminuye tu acierto en la siguiente tirada en proporción al daño resistido. Algunos ataques mágicos se pueden esquivar."}/>
            <div className='ataque-potenciado'>

                <h1 id="s-potenciados" align="center" className='texto-resaltado-defensas-potenciados'> Defensas básicas potenciadas:</h1>
                <CombatComponent textColor={"green"} nombre={"Reflejos:"} foto={"https://res.cloudinary.com/dfrda73uc/image/upload/v1682325901/donGions%20imgs/ruleImages/reflejos_mnk9g8.jpg"}   texto={"La cantidad de dados que se tiran por esquiva y tus habilidades de movimiento. "}/>
                <CombatComponent textColor={"green"} nombre={"Firmeza:"} foto={"https://res.cloudinary.com/dfrda73uc/image/upload/v1682325904/donGions%20imgs/ruleImages/firmeza_bfhmxe.jpg"}   texto={"La cantidad de dados que se tiran por bloqueo y parada y algunas habilidades de armas y escudos."}/>
                <CombatComponent textColor={"green"} nombre={"Temple:"} foto={"https://res.cloudinary.com/dfrda73uc/image/upload/v1682325901/donGions%20imgs/ruleImages/temple_ynn3nt.jpg"}   texto={"La cantidad de dados que se tiran por resistencia y el efecto aumentado que tienen"}/>
              </div>
            </div>
            </article>
        </div>
    </div>
  )
}

export default Combat
import React from 'react'
import { useState } from 'react'
import FadeInOut from '../../../FadeInOut'

function Inspi() {
  const [ins1, setins1] = useState(false)
  const [ins2, setins2] = useState(false)
  const [ins3, setins3] = useState(false)
  const [ins4, setins4] = useState(false)
  const [ins5, setins5] = useState(false)
  const [ins6, setins6] = useState(false)
  const [ins7, setins7] = useState(false)
  const [ins8, setins8] = useState(false)
  const [ins9, setins9] = useState(false)
  return (
    <div className='inspirate'>
      <div className='ins1'>
        <h4 onClick={()=>setins1(!ins1)} style={{color:"#0037ff"}} className={ins1 ? "inspi-titulo-click":"inspi-titulo"}> Ducho con armas </h4>
        <img onClick={()=>setins1(!ins1)} className={ins1 ? "inspi-img":"inspi-img-click"} src="https://res.cloudinary.com/dfrda73uc/image/upload/v1687874175/donGions%20imgs/rules%2B/espadachin_rqw3jg.png" alt="Inspi" />
        {ins1 && 
          <>
            <article className='artins1'> ¿Te gusta coleccionar armas poderosas? ¿Te flipa usar poderes y habilidades únicas de los objetos? ¿Quieres hacer ataque específicos y espectaculares, perfectos para cada situación
            que básicamente arreglan vuestros problemas a base de violencia habilidosa? Entonces lo tienes fácil... Hazte un luchador y ármate hasta los dientes.</article>
            <article className='artins1'> Mejora tu Umbral Crítico y ponte algo de enfoque, para empezar. Cada hostia bien dada será una herida. Si subes Precisión y Velocidad, no necesitarás más que un ataque para destrozar hasta al enemigo más poderoso.</article>
          </>
        }
      </div>
      <div>
        <h4 onClick={()=>setins2(!ins2)} style={{color:"#ff0000"}} className={ins2 ? "inspi-titulo-click":"inspi-titulo"}> Hechicero supremo </h4>
        <img onClick={()=>setins2(!ins2)} className={ins2 ? "inspi-img":"inspi-img-click"} src="https://res.cloudinary.com/dfrda73uc/image/upload/v1687874175/donGions%20imgs/rules%2B/hechicero_zfk6ts.png" alt="Inspi" />
          {ins2 && 
          <>
            <article className='artins2'> No solo posees una enorme selección de hechizos de tu guía, si no que hay abundante cantidad de hechizos a encontrar en casi todos los lugares que puedan contener 
            algo de magia. Alguien hábil y con suficiente maná, no necesitaría ni acercarse a sus anemigos hasta tener que despojarlos de sus posesiones postmortem.</article>
            <article className='artins2'> Puedes desahogarte lanzanto meteoritos al que más rabia te de mientras el resto está congelado, convertido en oveja, luchando contra ilusiones o aprendiendo a coordinar de nuevo brazos y piernas. Mi imaginación es tu límite...</article>
          </>
        }
      </div>
      <div>
        <h4 onClick={()=>setins3(!ins3)} style={{color:"#b700ff"}} className={ins3 ? "inspi-titulo-click":"inspi-titulo"}> Cazador Implacable</h4>
      <img onClick={()=>setins3(!ins3)} className={ins3 ? "inspi-img":"inspi-img-click"} src="https://res.cloudinary.com/dfrda73uc/image/upload/v1687874175/donGions%20imgs/rules%2B/distancia_uc1qyu.png" alt="Inspi" />
              {ins3 && 
              <>
                <article className='artins3'> Hay tal variedad de armas a distancia y tipos de munición que suplen con creces el uso de hechizos. Ya sea un arquero que lanza 3 flechas de una o un pistolero con Gatillo rápido que puede volver una roca en arena en un pestañeo, 
                los luchadores a distancia siempre encuentran cubiertas sus necesidades especiales.</article>
                <article className='artins3'> Imagina el combo que puedes hacer con tus compañeros si acribillas a un enemigo con flechas de metal y luego alguien crea una descarga eléctrica que aumenta según la cantidad de metal en la criatura. ¡El daño es inconmensurable!</article>
              </>
        }
      </div>
      <div>
        <h4 onClick={()=>setins4(!ins4)} style={{color:"#ff8000"}} className={ins4 ? "inspi-titulo-click":"inspi-titulo"}> Defensor ofensivo</h4>
        <img onClick={()=>setins4(!ins4)} className={ins4 ? "inspi-img":"inspi-img-click"} src="https://res.cloudinary.com/dfrda73uc/image/upload/v1687874174/donGions%20imgs/rules%2B/meledoble_fc7j6p.png" alt="Inspi" />
              {ins4 && 
                <>
                  <article className='artins4'> Un secreto que el gremio de los Defensores supo descubrir, es que un luchador que mitiga todo el bloqueo, puede devolver incluso el daño al atacante y con dos escudos encantados para beneficiarse entre sí, usar armas de filo es un capricho.
                  Un equipo pesado, dos escudos grandes y apego a la inmortalidad te volverá un tanque devastador  </article>
                  <article className='artins4'> Usa habilidades de los escudos para devastar al enemigo a nivel físico y moral, si quieres arrójalos y destuye Golems gigantescos con un solo lanzamiento. ¿Quién necesita sanadores o luchadores siendo un arma indestructible?</article>
                </>
              }
      </div>
      <div>
        <h4 onClick={()=>setins5(!ins5)} style={{color:"#585656"}} className={ins5 ? "inspi-titulo-click":"inspi-titulo"}> Brutalidad Desbordante</h4>
      <img onClick={()=>setins5(!ins5)} className={ins5 ? "inspi-img":"inspi-img-click"} src="https://res.cloudinary.com/dfrda73uc/image/upload/v1687874174/donGions%20imgs/rules%2B/bruto_q7jffm.png" alt="Inspi" />
              {ins5 && 
                <>
                <article className='artins5'> En este mundo vasto y generoso se pueden conseguir armas sin dificultad, asi que lánzalos sin miramientos. Vuelve tus armas irrompibles con la rotura disminuída a 1. Al reequiparte, tienes ataque físico gratuito, así que lanza esas armas a cualquier cosa que se mueva que no debería moverse. </article>
                <article> Imagina una arpía volando, inalcanzable con armas… ¡pues se las lanzas! El destrozo será inesperado, bajará de altura, lo que puedes aprovechar para sacar una maza y meterle una toña que la estampe a una pared. Luego puedes lanzarle la misma maza, corres y la empalas con una lanza. </article>
                </>
              }
      </div>
      <div>
        <h4 onClick={()=>setins6(!ins6)} style={{color:"#51ff00"}} className={ins6 ? "inspi-titulo-click":"inspi-titulo"}> Aparatero Cachivaches</h4>
      <img onClick={()=>setins6(!ins6)} className={ins6 ? "inspi-img":"inspi-img-click"} src="https://res.cloudinary.com/dfrda73uc/image/upload/v1687874174/donGions%20imgs/rules%2B/cachivaches_omz3wx.png" alt="Inspi" />
              {ins6 && 
              <>
                <article className='artins6'> Hay una cantidad de aparatos y cachivaches brutal que hacen todo tipo de cosas. <span style={{fontStyle:"italic", color:"green"}}> "Brazo radial", "Alas aerodinámicas", "Batería de Rayos", "Catapultador Magnetoeléctrico", "Brazalete Imantado", "Detonador Químico" o "Detonador Eléctrico", "Taza de cosas locas al azar dentro…" </span>¡¿Quién rayos necesita magia teniendo las ventajas de la tecnología!?  </article>
                <article className='artins6'> Tras activar un aparato, necesitarás esperar que se enfríe, pero para eso puedes estar armado hasta los dientes <span style={{fontStyle:"italic"}}> (hasta parecer un cíborg)</span> de todo para ¡todo tipo de situaciones! </article>
              </>
            }
      </div>
      <div>
        <h4 onClick={()=>setins7(!ins7)} style={{color:"#29caf3"}} className={ins7 ? "inspi-titulo-click":"inspi-titulo"}> Consumidor Empedernido</h4>
      <img onClick={()=>setins7(!ins7)} className={ins7 ? "inspi-img":"inspi-img-click"} src="https://res.cloudinary.com/dfrda73uc/image/upload/v1687874174/donGions%20imgs/rules%2B/medico_xtvl7d.png" alt="Inspi" />
              {ins7 && 
              <>
                <article className='artins7'> Hay tantas pociones de todo tipo en Beleron como Explosivos. ¿No quieres depender de un sanador? <span style={{color:"yellow"}}>Pociones...</span> ¿Quires pasarte el día reventando grupos de enemigos como entretenimiento? <span style={{color:"chocolate"}}>Explosivos...</span>  Suministros ilimitados y fáciles de usar. </article>
                <article className='artins7'> Las pociones pueden darte un chute temporal de habilidades físicas extraordinarias y los explosivos mantenerte en movimiento, generando daño en área. ¿Sabías que hay formas de crear pociones que al lanzar crean efectos explosivos en área y crear explosivos que generen incluso agujeros de gusano o desmaterialicen materia orgánica? </article>
              </>
        }
      </div>
      <div>
        <h4 onClick={()=>setins8(!ins8)} style={{color:"#ddff00"}} className={ins8 ? "inspi-titulo-click":"inspi-titulo"}> Físico Imbatible</h4>
      <img onClick={()=>setins8(!ins8)} className={ins8 ? "inspi-img":"inspi-img-click"} src="https://res.cloudinary.com/dfrda73uc/image/upload/v1687874174/donGions%20imgs/rules%2B/desarmado_u3xrgr.png" alt="Inspi" />
              {ins8 && 
              <>
                <article className='artins8'> Si te parece demasiado fácil zanjar problemas con armas y prefieres usar las manos para dejar algunas cosas claras, Cinestesia es lo tuyo. Marcialidad te da un dado extra para esquivar y con esquivas críticas, puedes contraatacar. </article>
                <article className='artins8'> Imagina cebarte con alguien que no entiende cómo está siendo derrotado a pase de puñetazos y patadas. ¿Te esquiva un puñetazo? Sigue rápidamente con una patada. ¿La bloquea? Derríbalo y quítale las armas. Con botas y guantes específicos para combate desarmado, serás temido y admirado al mismo tiempo</article>
              </>
        }
      </div>
      <div>
        <h4 onClick={()=>setins9(!ins9)} style={{color:"#0095ff"}} className={ins9 ? "inspi-titulo-click":"inspi-titulo"}> Picaro Pendenciero</h4>
      <img onClick={()=>setins9(!ins9)} className={ins9 ? "inspi-img":"inspi-img-click"} src="https://res.cloudinary.com/dfrda73uc/image/upload/v1687874174/donGions%20imgs/rules%2B/ninja_vzbzkj.png" alt="Inspi" />
              {ins9 && 
                <article className='artins9'>Si quieres además, optar por ser apoyo de tu grupo usando Frases inspiradoras que tienen efectos devastadores, tanto de ayuda como detrimento, el mundo está lleno de páginas que invocarán todo tipo de hechizos.</article>
        }
      </div>
      <div>
        <h4 onClick={()=>setins9(!ins9)} style={{color:"#0095ff"}} className={ins9 ? "inspi-titulo-click":"inspi-titulo"}> Picaro Pendenciero</h4>
      <img onClick={()=>setins9(!ins9)} className={ins9 ? "inspi-img":"inspi-img-click"} src="https://res.cloudinary.com/dfrda73uc/image/upload/v1687998914/donGions%20imgs/rules%2B/mutar_m8kt1q.png" alt="Inspi" />
              {ins9 && 
                <article className='artins9'>Si quieres además, optar por ser apoyo de tu grupo usando Frases inspiradoras que tienen efectos devastadores, tanto de ayuda como detrimento, el mundo está lleno de páginas que invocarán todo tipo de hechizos.</article>
        }
      </div>
      <div>
        <h4 onClick={()=>setins9(!ins9)} style={{color:"#0095ff"}} className={ins9 ? "inspi-titulo-click":"inspi-titulo"}> Picaro Pendenciero</h4>
      <img onClick={()=>setins9(!ins9)} className={ins9 ? "inspi-img":"inspi-img-click"} src="https://res.cloudinary.com/dfrda73uc/image/upload/v1687999082/donGions%20imgs/rules%2B/libros1_lec8o4.png" alt="Inspi" />
              {ins9 && 
                <article className='artins9'>Si quieres además, optar por ser apoyo de tu grupo usando Frases inspiradoras que tienen efectos devastadores, tanto de ayuda como detrimento, el mundo está lleno de páginas que invocarán todo tipo de hechizos.</article>
        }
      </div>
      <div>
        <h4 onClick={()=>setins9(!ins9)} style={{color:"#0095ff"}} className={ins9 ? "inspi-titulo-click":"inspi-titulo"}> Picaro Pendenciero</h4>
      <img onClick={()=>setins9(!ins9)} className={ins9 ? "inspi-img":"inspi-img-click"} src="https://res.cloudinary.com/dfrda73uc/image/upload/v1687998914/donGions%20imgs/rules%2B/barddo_xzjg6s.png" alt="Inspi" />
              {ins9 && 
                <article className='artins9'>Si quieres además, optar por ser apoyo de tu grupo usando Frases inspiradoras que tienen efectos devastadores, tanto de ayuda como detrimento, el mundo está lleno de páginas que invocarán todo tipo de hechizos.</article>
        }
      </div>
    </div>
  )
}

export default Inspi
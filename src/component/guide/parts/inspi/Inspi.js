import React from 'react'
import { useState } from 'react'

function Inspi() {
  const [ins1, setins1] = useState(true)
  const [ins2, setins2] = useState(true)
  const [ins3, setins3] = useState(true)
  const [ins4, setins4] = useState(true)
  const [ins5, setins5] = useState(true)
  const [ins6, setins6] = useState(true)
  const [ins7, setins7] = useState(true)
  const [ins8, setins8] = useState(true)
  const [ins9, setins9] = useState(true)
  return (
    <div className='inspirate'>
      <div>
        <h4 onClick={()=>setins1(!ins1)} className={ins1 ? "inspi-titulo":"inspi-titulo-click"}> Ducho con armas </h4>
        <img onClick={()=>setins1(!ins1)} className={ins1 ? "inspi-img":"inspi-img-click"} src="https://res.cloudinary.com/dfrda73uc/image/upload/v1687874175/donGions%20imgs/rules%2B/espadachin_rqw3jg.png" alt="Inspi" />
        {ins1 && 
        <article> Bulala </article>
        }
      </div>
      <div>
        <h4 onClick={()=>setins2(!ins2)} className={ins2 ? "inspi-titulo":"inspi-titulo-click"}> Hechicero supremo </h4>
        <img onClick={()=>setins2(!ins2)} className={ins2 ? "inspi-img":"inspi-img-click"} src="https://res.cloudinary.com/dfrda73uc/image/upload/v1687874175/donGions%20imgs/rules%2B/hechicero_zfk6ts.png" alt="Inspi" />
                {ins2 && 
        <article> Bulala </article>
        }
      </div>
      <div>
        <h4 onClick={()=>setins3(!ins3)} className={ins3 ? "inspi-titulo":"inspi-titulo-click"}> Cazador Implacable</h4>
      <img onClick={()=>setins3(!ins3)} className={ins3 ? "inspi-img":"inspi-img-click"} src="https://res.cloudinary.com/dfrda73uc/image/upload/v1687874175/donGions%20imgs/rules%2B/distancia_uc1qyu.png" alt="Inspi" />
              {ins3 && 
        <article> Bulala </article>
        }
      </div>
      <div>
        <h4 onClick={()=>setins4(!ins4)} className={ins4 ? "inspi-titulo":"inspi-titulo-click"}> Defensor ofensivo</h4>
      <img onClick={()=>setins4(!ins4)} className={ins4 ? "inspi-img":"inspi-img-click"} src="https://res.cloudinary.com/dfrda73uc/image/upload/v1687874174/donGions%20imgs/rules%2B/meledoble_fc7j6p.png" alt="Inspi" />
              {ins4 && 
        <article> Bulala </article>
        }
      </div>
      <div>
        <h4 onClick={()=>setins5(!ins5)} className={ins5 ? "inspi-titulo":"inspi-titulo-click"}> Brutalidad Desbordante</h4>
      <img onClick={()=>setins5(!ins5)} className={ins5 ? "inspi-img":"inspi-img-click"} src="https://res.cloudinary.com/dfrda73uc/image/upload/v1687874174/donGions%20imgs/rules%2B/bruto_q7jffm.png" alt="Inspi" />
              {ins5 && 
        <article> Bulala </article>
        }
      </div>
      <div>
        <h4 onClick={()=>setins6(!ins6)} className={ins6 ? "inspi-titulo":"inspi-titulo-click"}> Aparatero Cachivaches</h4>
      <img onClick={()=>setins6(!ins6)} className={ins6 ? "inspi-img":"inspi-img-click"} src="https://res.cloudinary.com/dfrda73uc/image/upload/v1687874174/donGions%20imgs/rules%2B/cachivaches_omz3wx.png" alt="Inspi" />
              {ins6 && 
        <article> Bulala </article>
        }
      </div>
      <div>
        <h4 onClick={()=>setins7(!ins7)} className={ins7 ? "inspi-titulo":"inspi-titulo-click"}> Sanador Inmortal</h4>
      <img onClick={()=>setins7(!ins7)} className={ins7 ? "inspi-img":"inspi-img-click"} src="https://res.cloudinary.com/dfrda73uc/image/upload/v1687874174/donGions%20imgs/rules%2B/medico_xtvl7d.png" alt="Inspi" />
              {ins7 && 
        <article> Bulala </article>
        }
      </div>
      <div>
        <h4 onClick={()=>setins8(!ins8)} className={ins8 ? "inspi-titulo":"inspi-titulo-click"}> Físico Imbatible</h4>
      <img onClick={()=>setins8(!ins8)} className={ins8 ? "inspi-img":"inspi-img-click"} src="https://res.cloudinary.com/dfrda73uc/image/upload/v1687874174/donGions%20imgs/rules%2B/desarmado_u3xrgr.png" alt="Inspi" />
              {ins8 && 
        <article> Bulala </article>
        }
      </div>
      <div>
        <h4 onClick={()=>setins9(!ins9)} className={ins9 ? "inspi-titulo":"inspi-titulo-click"}> Picaro Pendenciero</h4>
      <img onClick={()=>setins9(!ins9)} className={ins9 ? "inspi-img":"inspi-img-click"} src="https://res.cloudinary.com/dfrda73uc/image/upload/v1687874174/donGions%20imgs/rules%2B/ninja_vzbzkj.png" alt="Inspi" />
              {ins9 && 
        <article> Bulala </article>
        }
      </div>
    </div>
  )
}

export default Inspi
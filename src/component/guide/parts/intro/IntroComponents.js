import React from 'react'
import IntroImgsComponent from './IntroImgsComponent'

function IntroComponents({titulo, texto1, texto2, texto3}) {
  const galleryBeleron1=[
"https://res.cloudinary.com/dfrda73uc/image/upload/v1687816894/donGions%20imgs/paisajes/DALL_E_2023-06-26_22.54.05_-_Paisaje_de_fantasi%CC%81a._castillos_y_pueblos._realista._vista_desde_lejos_yupxuo.png",
"https://res.cloudinary.com/dfrda73uc/image/upload/v1687816894/donGions%20imgs/paisajes/DALL_E_2023-06-26_22.52.24_-_Paisaje_de_fantasi%CC%81a._realista_ndysyt.png",
"https://res.cloudinary.com/dfrda73uc/image/upload/v1687816894/donGions%20imgs/paisajes/DALL_E_2023-06-26_22.55.34_-_Paisaje_de_fantasi%CC%81a._castillos_y_pueblos._realista._vista_desde_lejos_rjwhts.png",
"https://res.cloudinary.com/dfrda73uc/image/upload/v1687816894/donGions%20imgs/paisajes/DALL_E_2023-06-26_22.53.27_-_Paisaje_de_fantasi%CC%81a._castillos_y_pueblos._realista_xwbnmb.png",
"https://res.cloudinary.com/dfrda73uc/image/upload/v1687816894/donGions%20imgs/paisajes/DALL_E_2023-06-26_22.51.07_-_Mundo_de_fantasia_con_lagos_y_rios_visto_desde_muy_lejos_con_pa%CC%81jaros_volando_castillos_y_montan%CC%83as._realista_avdkpr.png",
"https://res.cloudinary.com/dfrda73uc/image/upload/v1687816893/donGions%20imgs/paisajes/DALL_E_2023-06-26_22.52.49_-_Paisaje_de_fantasi%CC%81a._realista_nhz7w5.png",
  ]
  return (
    <div className='dongionsdetail-box-parts'>
    <h3 id='p-explico' className='dongionsdetail-title'>{titulo}.</h3>
      <article>{texto1}</article>
      <IntroImgsComponent gallery={galleryBeleron1}/>
      <article> {texto2}</article>
      <article> {texto3}</article>
  </div>
  )
}

export default IntroComponents
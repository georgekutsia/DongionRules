import React from 'react'

function IntroImgsComponent({gallery}) {
  return (

    <div className='intro-img-paisaje'>
            {gallery.map((gal) =>( 
              <img key={gal.capa}  
              className='im1' 
              src={gal} alt="Paisaje Beleron" 
              />
            ))}
      </div>
  )
}

export default IntroImgsComponent
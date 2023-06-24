import React from 'react'


function Infos({text1, text2, text3}) {
  return (
    <div className='text-on-hover-box'>
        <div> {text1}</div>
        <div> {text2}</div>
        <div> {text3}</div>
    </div>
  )
}

export default Infos
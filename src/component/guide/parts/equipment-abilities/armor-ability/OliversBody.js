import React from 'react'
import { NavLink } from 'react-router-dom'

export default function OliversBody() {
  return (
    <div style={{backgroundColor:"white", color:"black", width:"80%", border:"12px solid olive"}}>
    <div style={{display:"flex", backgroundColor:"lightgrey", height:"100px"}}>
    <select className="form-select" size="3" aria-label="Size 2 select example" style={{width:"140px", marginBottom:"25px"}}>
      <option  disabled>Elegir persona</option>
      <option value="1" >Mamá</option>
      <option value="2" selected>Oscar</option>
      <option value="3">Papá</option>
      <option value="3">Abuelas</option>
      <option value="3">Abuelos</option>
      <option value="3">Tios</option>
    </select>
    {/* <select style={{width:200, float: "left"}} className="form-select form-select-lg mb-3" aria-label="Large select example"> */}
    <div style={{color:"black"}}>
       
    </div>
    <div style={{marginLeft:"-100px"}} >
      <ul style={{display:"flex", fontSize:"30px", marginLeft:"60px", marginTop:"10px"}}>
        <li style={{marginLeft:"35px", backgroundColor:"silver", padding:"5px 10px", borderRadius:"10px", borderBottom:"2px solid yellow", color:"blue",}} >Jugar</li>
        <li style={{marginLeft:"35px", padding:"5px 10px", borderRadius:"10px", borderBottom:"5px double yellow", color:"red",}} >Comer</li>
        <li style={{marginLeft:"35px", padding:"5px 10px", borderRadius:"10px", borderBottom:"5px double yellow", color:"purple",}} >Dormir </li>
        <li style={{marginLeft:"35px", padding:"5px 10px", borderRadius:"10px", borderBottom:"5px double yellow", color:"green",}} >Gritar</li>
        <li style={{marginLeft:"35px", padding:"5px 10px", borderRadius:"10px", borderBottom:"5px double yellow", color:"orange",}} >Reír</li>
      </ul>
      <ul style={{display:"flex", color:"grey", fontSize:"10px", marginTop:"-15px"}}>
        <li style={{marginLeft:"115px"}} >Default Oscar</li>
        <li style={{marginLeft:"65px"}} >Default Nani</li>
        <li style={{marginLeft:"80px"}} >Default Mamá </li>
        <li style={{marginLeft:"70px"}} >Default Babu</li>
        <li style={{marginLeft:"55px"}} >Default Papá</li>
      </ul>
    </div>
    <div style={{ margin:"10px 0 0 10px"}}>
    En caso de emergencia ir a:
    <div style={{display:"flex"}}>
          <NavLink style={{height:"30px", marginLeft:"10px"}}>Cagar</NavLink>
          <NavLink style={{height:"30px", marginLeft:"10px"}}>Mear</NavLink>
          <NavLink style={{height:"30px", marginLeft:"10px"}}>Llorar</NavLink>
          <NavLink style={{height:"30px", marginLeft:"10px"}}>Pánico</NavLink>
    </div>
    </div>
    </div>
    <div style={{border:"2px solid black", margin:"5px", height:"400px", borderRadius:"15px"}}>
      <div style={{border:"2px solid lightblue", borderRadius:"50%", width:"20px", height:"20px", position:"absolute", left:"700px", top:"500px"}}></div>
      <div style={{border:"2px solid lightblue", borderRadius:"50%", width:"40px", height:"40px", position:"absolute", left:"740px", top:"550px"}}></div>
      <div style={{border:"2px solid lightblue", borderRadius:"50%", width:"660px", height:"380px", position:"absolute", left:"800px", top:"420px"}}></div>
      <img src="bebñe.png" width="300px" style={{marginRight:"800px"}}/>
      <img src="foto.png" width="900px" style={{position:"absolute", left:"660px", top:"250px"}}/>
    </div>
        <h1 style={{marginTop:"40px", textShadow:"2px 2px  red", color:"orange"}}>Para una carcajada:</h1>
        <div>
        <button style={{fontSize:"30px", backgroundColor:"LightSalmon	", marginTop:"40px", borderRadius:"10px", marginRight:"50px"}}>Tocar Aquí</button>
        <button style={{fontSize:"30px", backgroundColor:"Lime", marginTop:"40px", borderRadius:"10px", marginRight:"50px"}}>Morder Aquí</button>
        <button style={{fontSize:"30px", backgroundColor:"Aqua", marginTop:"40px", borderRadius:"10px", marginRight:"50px"}}>También Aquí</button>
        <button style={{fontSize:"30px", backgroundColor:"Teal", marginTop:"40px", borderRadius:"10px", marginRight:"50px"}}>Cosquillas Aquí</button>
        </div>
        <div>
        <button style={{fontSize:"30px", backgroundColor:"Fuchsia", marginTop:"40px", borderRadius:"10px", marginRight:"50px"}}>Besar Aquí</button>
        <button style={{fontSize:"30px", backgroundColor:"Yellow", marginTop:"40px", borderRadius:"10px", marginRight:"50px"}}>Incluso Aquí</button>
        <button style={{fontSize:"30px", backgroundColor:"Silver", marginTop:"40px", borderRadius:"10px", marginRight:"50px"}}>Pedorretas Aquí</button>
        </div>
        <div style={{marginTop:"50px", backgroundColor:"lightgrey", display:"flex", justifyContent:"space-evenly", padding:"10px", fontSize:"30px"}}>
        <i className="fa-solid fa-volleyball"></i>
        <i className="fa-solid fa-hand-lizard"></i>
        <i className="fa-solid fa-dice"></i>
        <i className="fa-solid fa-wand-sparkles"></i>
        <i className="fa-solid fa-football"></i>
        <i className="fa-solid fa-table-tennis-paddle-ball"></i>
        <i className="fa-regular fa-chess-knight"></i>
        <i className="fa-solid fa-torii-gate"></i>
        </div>
    </div>

  )
}

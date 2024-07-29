import React, { useEffect, useState } from "react";
import Talent from "../Talent";
import TalentTreeAjaniLuchador from "../talentTree/ajani/TalentTreeAjaniLuchador";
import TalentTreeAjaniHechicero from "../talentTree/ajani/TalentTreeAjaniHechicero";
import TalentTreeAjaniCazador from "../talentTree/ajani/TalentTreeAjaniCazador";
import TalentNavComponent from "../talentTree/TalentNavComponent";
import {dataTalentTreeAll} from "../../../../data/dataTalentTreeAll"

function AjaniGoldmane() {
const [showLuchador, setShowLuchador] = useState(true)
const [showHechicero, setShowHechicero] = useState(false)
const [showCazador, setShowCazador] = useState(false)
const [dataTalentTree, setDataTalentTree] = useState(dataTalentTreeAll)


const handleCloseAll = ()=>{
  setShowLuchador(false); setShowHechicero(false); setShowCazador(false); 
}
  const handleLuchador = ()=>{
    handleCloseAll();
    setShowLuchador(!showLuchador)
  }
  const handleHechicero = ()=>{
    handleCloseAll();
    setShowHechicero(!showHechicero)

  }
  const handleCazador = ()=>{
    handleCloseAll();
    setShowCazador(!showCazador)

  }

  return (
    <>
      <Talent  handleLuchador={()=>handleLuchador()}  handleHechicero={()=>handleHechicero()}  handleCazador={()=>handleCazador()}   />
      {showLuchador && 
      <>
      <TalentNavComponent img={`${dataTalentTree.talentsNavbar[0]}`} color={"luchador-color"} description1={`${dataTalentTree.talentsNavbarDecription[0]}`} description2={`${dataTalentTree.talentsNavbarDecription[1]}`}/>
      <TalentTreeAjaniLuchador />
      </>
      }

      {showHechicero && 
        <>
      <TalentNavComponent img={`${dataTalentTree.talentsNavbar[1]}`} color={"hechicero-color"}  description1={`${dataTalentTree.talentsNavbarDecription[2]}`} description2={`${dataTalentTree.talentsNavbarDecription[3]}`}/>
      <TalentTreeAjaniHechicero  />
      </>
      
      }

      {showCazador && 
    <>
      <TalentNavComponent img={`${dataTalentTree.talentsNavbar[2]}`}  color={"cazador-color"} description1={`${dataTalentTree.talentsNavbarDecription[4]}`} description2={`${dataTalentTree.talentsNavbarDecription[5]}`}/>
      <TalentTreeAjaniCazador />
    </>
      
      }
    </>
  );
}

export default AjaniGoldmane;

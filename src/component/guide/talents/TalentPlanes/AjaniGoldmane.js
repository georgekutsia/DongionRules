import React, { useState } from "react";
import Talent from "../Talent";
import TalentTreeAjaniLuchador from "../talentTree/ajani/TalentTreeAjaniLuchador";
import TalentTreeAjaniHechicero from "../talentTree/ajani/TalentTreeAjaniHechicero";
import TalentTreeAjaniCazador from "../talentTree/ajani/TalentTreeAjaniCazador";
import TalentNavComponent from "../talentTree/TalentNavComponent";


function AjaniGoldmane() {
const [showLuchador, setShowLuchador] = useState(true)
const [showHechicero, setShowHechicero] = useState(false)
const [showCazador, setShowCazador] = useState(false)

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
      <TalentNavComponent img={"https://res.cloudinary.com/dfrda73uc/image/upload/v1722158137/donGions%20imgs/talentTreeImages/DALL_E_2024-07-12_19.04.33_-_A_video_game-style_image_featuring_a_sword_and_a_mace._The_sword_has_a_sleek_shiny_blade_with_intricate_engravings_and_a_jeweled_hilt_while_the_mace_kfaieq.webp"}/>
      <TalentTreeAjaniLuchador />
      </>
      }

      {showHechicero && 
        <>
        <TalentNavComponent img={"https://res.cloudinary.com/dfrda73uc/image/upload/v1722158137/donGions%20imgs/talentTreeImages/DALL_E_2024-07-12_19.04.37_-_A_video_game-style_image_featuring_a_magical_staff_and_a_spellbook._The_magical_staff_has_an_ornate_design_with_glowing_runes_and_a_crystal_at_the_top_xllctv.webp"}/>
      <TalentTreeAjaniHechicero  />
      </>
      
      }

      {showCazador && 
    <>
    <TalentNavComponent img={"https://res.cloudinary.com/dfrda73uc/image/upload/v1722158137/donGions%20imgs/talentTreeImages/DALL_E_2024-07-12_19.04.46_-_A_video_game-style_image_featuring_a_pistol_and_a_bow._The_pistol_has_a_sleek_modern_design_with_intricate_engravings_while_the_bow_is_elegantly_cra_b8tgxk.webp"}/>
      <TalentTreeAjaniCazador />
    </>
      
      }
    </>
  );
}

export default AjaniGoldmane;

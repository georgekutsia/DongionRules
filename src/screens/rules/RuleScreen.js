import React, { useEffect, useState } from 'react'
import { BackgroundFloatingBuble, Characters, Charisma, Creator, NonSpecific, Kinesthesia, Luck, NavbarVertical, Perception, Presence, Effort, Combat, Npc, Dice, Dungeon, Talents, SorinMarkov, Intro } from '../../component'
import { EquipmentScreen, ArmorScreen } from '../index';
import Rules from '../../component/guide/EstadisticasPj'
import FadeInOut from "../../component/FadeInOut";
import { Link } from 'react-router-dom';
import JaceBeleren from '../../component/guide/talents/TalentPlanes/JaceBeleren';
import AjaniGoldmane from '../../component/guide/talents/TalentPlanes/AjaniGoldmane';
import TeferiAkosa from '../../component/guide/talents/TalentPlanes/TeferiAkosa';

function RuleScreen() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showPage, setShowPage] = useState(false)
  useEffect(() => {
      setShowPage(true)
      setTimeout(() => {
        setDude(false)
      }, 5000)
  }, [])
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); 
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const [dude, setDude] = useState(false)
  const [rDice, setRDice] =useState(false)

  const [intro, setIntro] = useState(true)
  const [basic, setBasic] = useState(false)
  const [char, setChar] = useState(false)
  

  const [rPre, setrPre] = useState(false)
  const [rCha, setrCha] = useState(false)
  const [rLu, setrLu] = useState(false)
  const [rPer, setrPer] = useState(false)
  const [rKi, setrKi] = useState(false)

  const [rEffort, setREffort] = useState(false)
  const [rCombat, setRCombat] = useState(false)
  const [rNonSpecific, setRNonSpecific] = useState(false)
  const [rNpc, setRNpc] = useState(false)
  const [rEquipment, setREquipment] = useState(false)
  const [rArmor, setRArmor] = useState(false)
  const [rDungeon, setRDungeon] = useState(false)
  const [rTalent, setRTalent] = useState(false)

  const stats = () => setBasic(true)
  const presence = () => setrPre(true)
  const charisma = () => setrCha(true)
  const luck = () => setrLu(true)
  const perception = () => setrPer(true)
  const kinesthesia = () => setrKi(true)
  const effort = () =>setREffort(true)
  const combat = () =>setRCombat(true)

  const [onMark, setOnMark] = useState(true)
  const [onJace, setOnJace] = useState(false)
  const [onTeferi, setOnTeferi] = useState(false)
  const [onAjani, setOnAjani] = useState(false)
  const [onGideon, setOnGideon] = useState(false)
  const [onElspeth, setOnElspeth] = useState(false)
  const [onNissa, setOnNissa] = useState(false)
  const [onSarkhan, setOnSarkhan] = useState(false)
  const [onChandra, setOnChandra] = useState(false)
  const [onRal, setOnRal] = useState(false)
  const [onLiliana, setOnLiliana] = useState(false)


const handlePlansOn = ()=>{
  setOnAjani(false); setOnJace(false);setOnMark(false); setOnTeferi(false); setOnChandra(false); setOnElspeth(false); setOnGideon(false); setOnLiliana(false); setOnNissa(false);setOnRal(false); setOnSarkhan(false)}

const handleingOn = () =>{
  setBasic(true);setIntro(true); setChar(true);setrPre(true); setrCha(true); setrLu(true); setrPer(true); setrKi(true); setREffort(true); setRCombat(true);setRNonSpecific(true);setRNpc(true); setREquipment(true); setRArmor(true); setRDice(true); setRDungeon(true); setRTalent(true)
}
const handleingOff = () =>{
  setBasic(false); setIntro(false); setChar(false);setrPre(false); setrCha(false); setrLu(false); setrPer(false); setrKi(false); setREffort(false); setRCombat(false);setRNonSpecific(false);setRNpc(false); setREquipment(false); setRArmor(false); setRDice(false); setRDungeon(false); setRTalent(false)
}
  return (
    <div className='margin-rules-borrom'>
        <FadeInOut show={showPage} duration={5000}>
        <NavbarVertical 
            statistics={stats} 
            stpresence={presence} 
            stcharisma={charisma} 
            stluck={luck}
            stperception={perception} 
            stkinesthesia={kinesthesia}
        />
        </FadeInOut>
        <BackgroundFloatingBuble floatingBalls=
    {"url(https://res.cloudinary.com/dfrda73uc/image/upload/v1666134847/donGions%20imgs/backgroundEffects/pngwing.com_-_2022-10-19T011351.446_eeqfuh.png)"} 
    widthBall={"15px"} heigthBall={"22px"} radiusBall={"2px"} idFlow={"square-flow"}/>
      <div align="center" className='container'>
      <FadeInOut show={showPage} duration={1000}>
        <div className='titulo-pagina'> Manual de instrucciones del juego</div>
        <div style={{width:"10%"}}> 
            <Link   onClick={()=> setDude(!dude)}>
            {dude ?  
              <FadeInOut show={showPage} duration={200}>
                <i   className="button-show-dude-up fa-solid fa-user-tie fa-spin" ></i> 
                </FadeInOut>
                : 
                <FadeInOut show={showPage} duration={200}>
                <i className="button-show-dude-down fa-solid fa-user-tie fa-fade"></i> 
              </FadeInOut>
                }
            </Link>
        </div>
        {dude &&  
      <FadeInOut show={showPage} duration={400}>
        <div className='bubble-text-manual '>
          <img className="img-shop-info-manual" alt="Dude" />
          <div> Si algo no está escrito aquí, es que no lo has encontrado</div>
          <div>Tienes una barra de navegación a la izquierda con la que encontrar cosas más concretas. Información es poder! Y poder es dinero!</div>
        </div>
        </FadeInOut>
        }
          <div className={isSmallScreen? '':'nav-show-stats-rules'}> 
            <div>
              <button className='btn-rules-toggle' style={{color:"violet", fontSize:"calc(14px + 0.3vw)"}} 
              onClick={()=>{handleingOn()}}>
                    <span></span><span></span><span></span><span></span><i className="fa-regular fa-folder-open"></i>  
              </button>
              <button className='btn-rules-toggle' style={{color:"blue", fontSize:"calc(14px + 0.3vw)"}} 
              onClick={()=>{handleingOff()}}>
                    <span></span><span></span><span></span><span></span><i className="fa-solid fa-folder-closed"></i>
              </button>
            </div>
            <div>
                    <button className={intro ? 'btn-rules-on' : 'btn-rules-toggle'} style={{color:"grey"}} onClick={()=>{handleingOff(); setIntro(!intro)}}>
                        <span></span><span></span><span></span><span></span><i className="fa-solid fa-signs-post"></i>Intro
                    </button>
                    <button className={basic ? 'btn-rules-on' : 'btn-rules-toggle'} style={{color:"grey"}} onClick={()=>{handleingOff(); setBasic(!basic)}}>
                        <span></span><span></span><span></span><span></span><i className="fa-solid fa-list"></i>Básico
                    </button>
                    <button className={rCombat ? 'btn-rules-on' : 'btn-rules-toggle'} style={{color:"grey"}} onClick={()=>{handleingOff(); setRCombat(!rCombat)}}>
                        <span></span><span></span><span></span><span></span><i className="fa-solid fa-people-arrows"></i>Combate
                    </button>
                    <button className={rEquipment ? 'btn-rules-on' : 'btn-rules-toggle'} style={{color:"grey"}} onClick={()=>{handleingOff(); setREquipment(!rEquipment)}}>
                        <span></span><span></span><span></span><span></span><i className="fa-solid fa-group-arrows-rotate"></i>Armas
                    </button>
                    <button className={rArmor ? 'btn-rules-on' : 'btn-rules-toggle'} style={{color:"grey"}} onClick={()=>{handleingOff(); setRArmor(!rArmor)}}>
                        <span></span><span></span><span></span><span></span><i className="fa-solid fa-shirt"></i>Armaduras
                    </button>
                    <button className={char ? 'btn-rules-on' : 'btn-rules-toggle'} style={{color:"grey"}} onClick={()=>{handleingOff(); setChar(!char)}}>
                        <span></span><span></span><span></span><span></span><i className="fa-solid fa-hurricane"></i>Carácter
                    </button>
                    <button className={rNpc ? 'btn-rules-on' : 'btn-rules-toggle'} style={{color:"grey"}} onClick={()=>{handleingOff(); setRNpc(!rNpc)}}>
                        <span></span><span></span><span></span><span></span><i className="fa-solid fa-people-group"></i>NPC
                    </button>

                    <button className={rEffort ? 'btn-rules-on' : 'btn-rules-toggle'} style={{color:"grey"}} onClick={()=>{handleingOff(); setREffort(!rEffort)}}>
                        <span></span><span></span><span></span><span></span><i className="fa-solid fa-child-reaching"></i>Esfuerzo
                    </button>
                    <button className={rNonSpecific ? 'btn-rules-on' : 'btn-rules-toggle'} style={{color:"grey"}} onClick={()=>{handleingOff(); setRNonSpecific(!rNonSpecific)}}>
                        <span></span><span></span><span></span><span></span><i className="fa-solid fa-hands-asl-interpreting"></i>Conceptos
                    </button>
                    <button className={rDungeon ? 'btn-rules-on' : 'btn-rules-toggle'} style={{color:"grey"}} onClick={()=>{handleingOff(); setRDungeon(!rDungeon)}}>
                        <span></span><span></span><span></span><span></span><i className="fa-solid fa-archway"></i>Mazmorras
                    </button>
                    <button className={rDice ? 'btn-rules-on' : 'btn-rules-toggle'} style={{color:"grey"}} onClick={()=>{handleingOff(); setRDice(!rDice)}}>
                        <span></span><span></span><span></span><span></span><i className="fa-solid fa-dice"></i>Dados
                    </button>
                    <button className={rTalent ? 'btn-rules-on' : 'btn-rules-toggle'} style={{color:"grey"}} onClick={()=>{handleingOff(); setRTalent(!rTalent)}}>
                        <span></span><span></span><span></span><span></span><i className="iconoir-3d-arc-center-pt"></i>Ramas
                    </button>
                    <button className={ 'btn-rules-toggle'} style={{color:"grey"}} >
                        <span></span><span></span><span></span><span></span><i className="fa-regular fa-lightbulb"></i><i className="fa-sharp fa-solid fa-raygun"></i>Inspírate
                    </button>
                    <button className={'btn-rules-toggle'} style={{color:"grey"}}>
                        <span></span><span></span><span></span><span></span><i className="fa-solid fa-bag-shopping"></i>Objetos
                    </button>
              </div>
            </div>
        <div className='below-rules-space'>
      <FadeInOut show={intro} duration={400}>
              {intro && <Intro/>}
        </FadeInOut>
      <FadeInOut show={basic} duration={400}>
              {basic && <Rules/>}
        </FadeInOut>
      <FadeInOut show={rCombat} duration={400}>
              {rCombat && <Combat/>}
        </FadeInOut>
      <FadeInOut show={rEquipment} duration={400}>
              {rEquipment && <EquipmentScreen/>}
        </FadeInOut>
      <FadeInOut show={rArmor} duration={400}>
              {rArmor && <ArmorScreen/>}
        </FadeInOut>
      <FadeInOut show={rEffort} duration={400}>
              {rEffort && <Effort/>}
        </FadeInOut>
      <FadeInOut show={rNpc} duration={400}>
              {rNpc && <Npc/>}
        </FadeInOut>
      <FadeInOut show={char} duration={400}>
              {char && <Characters/>}
        </FadeInOut>
      <FadeInOut show={rLu} duration={400}>
              {rLu && <Luck/>}
        </FadeInOut>
      <FadeInOut show={rCha} duration={400}>
              {rCha && <Charisma/>}
        </FadeInOut>
      <FadeInOut show={rKi} duration={400}>
              {rKi && <Kinesthesia/>}
        </FadeInOut>
      <FadeInOut show={rPer} duration={400}>
              {rPer && <Perception/>}
        </FadeInOut>
      <FadeInOut show={rPre} duration={400}>
              {rPre && <Presence/>}
        </FadeInOut>
      <FadeInOut show={rDungeon} duration={400}>
              {rDungeon && <Dungeon/>}
        </FadeInOut>
      <FadeInOut show={rNonSpecific} duration={400}>
              {rNonSpecific && <NonSpecific/>}
        </FadeInOut>
      <FadeInOut show={rDice} duration={400}>
              {rDice && <Dice/>}
        </FadeInOut>
      <FadeInOut show={rTalent} duration={400}>
      <div >
      <div>
        <button onClick={()=>{handlePlansOn();setOnMark(!onMark)}} style={{color:"maroon"}} className={onMark? 'talent-name-selected':'talent-name'}>Sorin Markov</button>
        <button onClick={()=>{handlePlansOn();setOnTeferi(!onTeferi)}} style={{color:"moccasin"}} className={onTeferi? 'talent-name-selected':'talent-name'}>Teferi Akosa</button>
        <button onClick={()=>{handlePlansOn();setOnJace(!onJace)}} style={{color:"blue"}} className={onJace? 'talent-name-selected':'talent-name'}>Jace Beleren</button>
        <button onClick={()=>{handlePlansOn();setOnAjani(!onAjani)}} style={{color:"yellow"}} className={onAjani? 'talent-name-selected':'talent-name'}>Ajani Goldmane</button>
        <button onClick={()=>{handlePlansOn();setOnGideon(!onGideon)}} style={{color:"white"}} className={onGideon? 'talent-name-selected':'talent-name'}>Gideon Jura</button>
        <button onClick={()=>{handlePlansOn();setOnElspeth(!onElspeth)}} style={{color:"dimgrey"}} className={onElspeth? 'talent-name-selected':'talent-name'}>Elspeth Tirel</button>
        <button onClick={()=>{handlePlansOn();setOnNissa(!onNissa)}} style={{color:"green"}} className={onNissa? 'talent-name-selected':'talent-name'}>Nissa Revane</button>
        <button onClick={()=>{handlePlansOn();setOnSarkhan(!onSarkhan)}} style={{color:"mediumOrchid"}} className={onSarkhan? 'talent-name-selected':'talent-name'}>Sarkhan Vol</button>
        <button onClick={()=>{handlePlansOn();setOnChandra(!onChandra)}} style={{color:"red"}} className={onChandra? 'talent-name-selected':'talent-name'}>Chandra Nalaar</button>
        <button onClick={()=>{handlePlansOn();setOnRal(!onRal)}} style={{color:"aqua"}} className={onRal? 'talent-name-selected':'talent-name'}>Ral Zarek</button>
        <button onClick={()=>{handlePlansOn();setOnLiliana(!onLiliana)}} style={{color:"blueviolet"}} className={onLiliana? 'talent-name-selected':'talent-name'}>Liliana Vess</button>
      </div>
      <FadeInOut show={onMark} duration={400}>
              {onMark && <SorinMarkov/> }
        </FadeInOut>
        <FadeInOut show={onTeferi} duration={400}>
              {onTeferi && <TeferiAkosa/> }
        </FadeInOut>
        <FadeInOut show={onJace} duration={400}>
              {onJace && <JaceBeleren/> }
        </FadeInOut>
        <FadeInOut show={onAjani} duration={400}>
              {onAjani && <AjaniGoldmane/> }
        </FadeInOut>
        <FadeInOut show={onGideon} duration={400}>
              {onGideon && <AjaniGoldmane/> }
        </FadeInOut>
        <FadeInOut show={onElspeth} duration={400}>
              {onElspeth && <AjaniGoldmane/> }
        </FadeInOut>
        <FadeInOut show={onNissa} duration={400}>
              {onNissa && <AjaniGoldmane/> }
        </FadeInOut>
        <FadeInOut show={onSarkhan} duration={400}>
              {onSarkhan && <AjaniGoldmane/> }
        </FadeInOut>
        <FadeInOut show={onChandra} duration={400}>
              {onChandra && <AjaniGoldmane/> }
        </FadeInOut>
        <FadeInOut show={onRal} duration={400}>
              {onRal && <AjaniGoldmane/> }
        </FadeInOut>
        <FadeInOut show={onLiliana} duration={400}>
              {onLiliana && <AjaniGoldmane/> }
        </FadeInOut>
      </div>
        </FadeInOut>
      </div>
        </FadeInOut>
      </div>
      <FadeInOut show="buttons" duration={6000}>
              <Creator/>
        </FadeInOut>
    </div>
  )
}

export default RuleScreen
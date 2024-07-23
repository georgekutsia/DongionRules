import AOS from 'aos';
import 'aos/dist/aos.css'; 
import React, { useEffect, useState } from 'react';
import Tooltip from 'react-bootstrap/Tooltip';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { BackgroundFloatingBuble, Characters, Charisma, Creator, NonSpecific, Kinesthesia, Luck, NavbarVertical, Perception, Presence, Effort, Combat, Npc, Dice, Dungeon, 
  SorinMarkov,JaceBeleren, AjaniGoldmane, TeferiAkosa, Intro, Inspi, GideonJura, ElspethTIrel, NissaRevane, SarkhanVol, ChandraNalaar, RalZarek, LilianaVess,
  Nav2buttonComponent, } from '../../component'
import { EquipmentScreen, ArmorScreen } from '../index';
import Rules from '../../component/guide/EstadisticasPj'
import { Link } from 'react-router-dom';

function RuleScreen() {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>
  );
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

  const [inspi, setInspi] = useState(false)

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

  const handlePlansOn = () => {
    setOnAjani(false); setOnJace(false); setOnMark(false); setOnTeferi(false); setOnChandra(false); setOnElspeth(false); setOnGideon(false); setOnLiliana(false); setOnNissa(false); setOnRal(false); setOnSarkhan(false)
  }

  const handleingOn = () => {
    setBasic(true); setIntro(true); setInspi(true); setChar(true); setrPre(true); setrCha(true); setrLu(true); setrPer(true); setrKi(true); setREffort(true); setRCombat(true); setRNonSpecific(true); setRNpc(true); setREquipment(true); setRArmor(true); setRDice(true); setRDungeon(true); setRTalent(true)
  }

  const handleingOff = () => {
    setBasic(false); setIntro(false); setInspi(false); setChar(false); setrPre(false); setrCha(false); setrLu(false); setrPer(false); setrKi(false); setREffort(false); setRCombat(false); setRNonSpecific(false); setRNpc(false); setREquipment(false); setRArmor(false); setRDice(false); setRDungeon(false); setRTalent(false)
  }

  return (
    <div className='margin-rules-borrom'>
        <NavbarVertical  statistics={stats}  stpresence={presence}  stcharisma={charisma}  stluck={luck} stperception={perception}  stkinesthesia={kinesthesia}/>
  
      <div align="center" className='container'>
        <div className='titulo-pagina'> Manual de instrucciones del juego</div>
        <div style={{width:"10%"}}> 
            <Link onClick={()=> setDude(!dude)}>
            {dude ?  
                <i className="button-show-dude-up fa-solid fa-user-tie fa-spin" ></i> 
                : 
                <i className="button-show-dude-down fa-solid fa-user-tie fa-fade"></i> 
            }
            </Link>
        </div>
        {dude &&  
          <div className='bubble-text-manual '>
            <img className="img-shop-info-manual" alt="Dude" />
            <div> Si algo no está escrito aquí, es que no lo has encontrado</div>
            <div>Tienes una barra de navegación a la izquierda con la que encontrar cosas más concretas. Información es poder! Y poder es dinero!</div>
          </div>
        }
          <div className={isSmallScreen? '':'nav-show-stats-rules'}> 
            <div>
              <button className='btn-rules-toggle' style={{color:"violet", fontSize:"calc(14px + 0.3vw)"}}  onClick={()=>{handleingOn()}}>
                    <span></span><span></span><span></span><span></span><i className="fa-regular fa-folder-open"></i>  
              </button>
              <button className='btn-rules-toggle' style={{color:"blue", fontSize:"calc(14px + 0.3vw)"}}  onClick={()=>{handleingOff()}}>
                    <span></span><span></span><span></span><span></span><i className="fa-solid fa-folder-closed"></i>
              </button>
            </div>
            <div className='btn-rules'>
                    <Nav2buttonComponent  info={intro}  setInfo={setIntro} handleingOff={handleingOff} tooltipMessage={"Introducción"} delay={50} icon={"fa-solid fa-signs-post"}  />
                    <Nav2buttonComponent  info={basic}  setInfo={setBasic} handleingOff={handleingOff} tooltipMessage={"Conceptos básicos"} delay={100} icon={"fa-solid fa-list"}  />
                    <Nav2buttonComponent  info={rCombat}  setInfo={setRCombat} handleingOff={handleingOff} tooltipMessage={"Combate"} delay={150} icon={"fa-solid fa-people-arrows"}  />
                    <Nav2buttonComponent  info={rEquipment}  setInfo={setREquipment} handleingOff={handleingOff} tooltipMessage={"Armas"} delay={200} icon={"fa-solid fa-group-arrows-rotate"}  />
                    <Nav2buttonComponent  info={rArmor}  setInfo={setRArmor} handleingOff={handleingOff} tooltipMessage={"Armaduras"} delay={250} icon={"fa-solid fa-shirt"}  />
                    <Nav2buttonComponent  info={char}  setInfo={setChar} handleingOff={handleingOff} tooltipMessage={"Carácter"} delay={300} icon={"fa-solid fa-hurricane"}  />
                    <Nav2buttonComponent  info={rNpc}  setInfo={setRNpc} handleingOff={handleingOff} tooltipMessage={"NPC"} delay={350} icon={"fa-solid fa-people-group"}  />
                    <Nav2buttonComponent  info={rEffort}  setInfo={setREffort} handleingOff={handleingOff} tooltipMessage={"Esfuerzo"} delay={400} icon={"fa-solid fa-child-reaching"}  />
                    <Nav2buttonComponent  info={rNonSpecific}  setInfo={setRNonSpecific} handleingOff={handleingOff} tooltipMessage={"Conceptos"} delay={450} icon={"fa-solid fa-hands-asl-interpreting"}  />
                    <Nav2buttonComponent  info={rDungeon}  setInfo={setRDungeon} handleingOff={handleingOff} tooltipMessage={"Mazmorras"} delay={500} icon={"fa-solid fa-archway"}  />
                    <Nav2buttonComponent  info={rDice}  setInfo={setRDice} handleingOff={handleingOff} tooltipMessage={"Dados"} delay={550} icon={"fa-solid fa-dice"}  />
                    <Nav2buttonComponent  info={rTalent}  setInfo={setRTalent} handleingOff={handleingOff} tooltipMessage={"Ramas"} delay={600} icon={"fa-solid fa-tree"}  />
                    <Nav2buttonComponent  info={inspi}  setInfo={setInspi} handleingOff={handleingOff} tooltipMessage={"Inspírate"} delay={750} icon={"fa-regular fa-lightbulb"}  />
                    <Nav2buttonComponent  info={inspi}  setInfo={setInspi} handleingOff={handleingOff} tooltipMessage={"Objetos"} delay={800} icon={"fa-solid fa-bag-shopping"}  />

              </div>
            </div>
        <div className='below-rules-space'>
          {intro && <Intro/>}
          {basic && <Rules/>}
          {rCombat && <Combat/>}
          {rEquipment && <EquipmentScreen/>}
          {rArmor && <ArmorScreen/>}
          {rEffort && <Effort/>}
          {rNpc && <Npc/>}
          {char && <Characters/>}
          {rLu && <Luck/>}
          {rCha && <Charisma/>}
          {rKi && <Kinesthesia/>}
          {rPer && <Perception/>}
          {rPre && <Presence/>}
          {rDungeon && <Dungeon/>}
          {rNonSpecific && <NonSpecific/>}
          {rDice && <Dice/>}
          {inspi && <Inspi/>}
          {rTalent && (
            <div>
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
              {onMark && <SorinMarkov/> }
              {onTeferi && <TeferiAkosa/> }
              {onJace && <JaceBeleren/> }
              {onAjani && <AjaniGoldmane/> }
              {onGideon && <GideonJura/> }
              {onElspeth && <ElspethTIrel/> }
              {onNissa && <NissaRevane/> }
              {onSarkhan && <SarkhanVol/> }
              {onChandra && <ChandraNalaar/> }
              {onRal && <RalZarek/> }
              {onLiliana && <LilianaVess/> }
            </div>
          )}
        </div>
      </div>
        <Creator/>
    </div>
  )
}

export default RuleScreen;

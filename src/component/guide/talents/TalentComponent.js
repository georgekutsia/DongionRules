import React, { useState, useEffect } from 'react';
import { SorinMarkov, JaceBeleren, AjaniGoldmane, TeferiAkosa, GideonJura, ElspethTIrel, NissaRevane, SarkhanVol, ChandraNalaar, RalZarek, LilianaVess, ButtonTalentComponent } from '../../../component';

function TalentComponent() {
  const [password, setPassword] = useState('');
  const [onMark, setOnMark] = useState(false);
  const [onJace, setOnJace] = useState(false);
  const [onTeferi, setOnTeferi] = useState(false);
  const [onAjani, setOnAjani] = useState(true);
  const [onGideon, setOnGideon] = useState(false);
  const [onElspeth, setOnElspeth] = useState(false);
  const [onNissa, setOnNissa] = useState(false);
  const [onSarkhan, setOnSarkhan] = useState(false);
  const [onChandra, setOnChandra] = useState(false);
  const [onRal, setOnRal] = useState(false);
  const [onLiliana, setOnLiliana] = useState(false);
  const [points, setPoints] = useState(() => {
    const savedPoints = localStorage.getItem("amountOfPoints");
    return savedPoints !== null ? JSON.parse(savedPoints) : 1;
  });

  useEffect(() => {
    localStorage.setItem("amountOfPoints", JSON.stringify(points));
  }, [points]);

  const handlePlansOn = () => {
    setOnAjani(false);
    setOnJace(false);
    setOnMark(false);
    setOnTeferi(false);
    setOnChandra(false);
    setOnElspeth(false);
    setOnGideon(false);
    setOnLiliana(false);
    setOnNissa(false);
    setOnRal(false);
    setOnSarkhan(false);
  };

  const handleInputChange = (event) => {
    const enteredPassword = event.target.value;

    if (enteredPassword.startsWith("add")) {
      const numberPart = parseInt(enteredPassword.slice(3), 10);
      if (!isNaN(numberPart)) {
        setPoints((prevPoints) => {
          const newPoints = prevPoints + numberPart;
          localStorage.setItem("amountOfPoints", JSON.stringify(newPoints));
          return newPoints;
        });
        setPassword(''); 
      } else {
        setPassword(enteredPassword); 
      }
    } else {
      setPassword(enteredPassword);
    }
  };

  return (
    <div>
      <div>
        <ButtonTalentComponent handle={() => { handlePlansOn(); setOnMark(!onMark) }} color={"maroon"} plan={onMark} name={"Sorin Markov"} />
        <ButtonTalentComponent handle={() => { handlePlansOn(); setOnTeferi(!onTeferi) }} color={"moccasin"} plan={onTeferi} name={"Teferi Akosa"} />
        <ButtonTalentComponent handle={() => { handlePlansOn(); setOnJace(!onJace) }} color={"blue"} plan={onJace} name={"Jace Beleren"} />
        <ButtonTalentComponent handle={() => { handlePlansOn(); setOnAjani(!onAjani) }} color={"yellow"} plan={onAjani} name={"Ajani Goldmane"} />
        <ButtonTalentComponent handle={() => { handlePlansOn(); setOnGideon(!onGideon) }} color={"white"} plan={onGideon} name={"Gideon Jura"} />
        <ButtonTalentComponent handle={() => { handlePlansOn(); setOnElspeth(!onElspeth) }} color={"dimgrey"} plan={onElspeth} name={"Elspeth Tirel"} />
        <ButtonTalentComponent handle={() => { handlePlansOn(); setOnNissa(!onNissa) }} color={"green"} plan={onNissa} name={"Nissa Revane"} />
        <ButtonTalentComponent handle={() => { handlePlansOn(); setOnSarkhan(!onSarkhan) }} color={"mediumOrchid"} plan={onSarkhan} name={"Sarkhan Vol"} />
        <ButtonTalentComponent handle={() => { handlePlansOn(); setOnChandra(!onChandra) }} color={"red"} plan={onChandra} name={"Chandra Nalaar"} />
        <ButtonTalentComponent handle={() => { handlePlansOn(); setOnRal(!onRal) }} color={"aqua"} plan={onRal} name={"Ral Zarek"} />
        <ButtonTalentComponent handle={() => { handlePlansOn(); setOnLiliana(!onLiliana) }} color={"blueviolet"} plan={onLiliana} name={"Liliana Vess"} />
      </div>

      <div>
        <input
          className="contraseña-dungeon"
          type='password'
          text="password"
          value={password}
          onChange={handleInputChange}
          placeholder="Suma..."
        />
      </div>
      {onMark && <SorinMarkov />}
      {onTeferi && <TeferiAkosa />}
      {onJace && <JaceBeleren />}
      {onAjani && <AjaniGoldmane points={points} setPoints={setPoints} />}
      {onGideon && <GideonJura points={points} setPoints={setPoints} />}
      {onElspeth && <ElspethTIrel />}
      {onNissa && <NissaRevane />}
      {onSarkhan && <SarkhanVol />}
      {onChandra && <ChandraNalaar />}
      {onRal && <RalZarek />}
      {onLiliana && <LilianaVess />}
    </div>
  );
}

export default TalentComponent;

import React, { useEffect, useState } from "react";
import OliversBody from "./OliversBody";
export default function Oliver() {
  const miFamilia = ["Mamá", "Papá", "Hermano", "Abuelas", "Abuelos", "Tios"];
  const [cuerpo, setCuerpo] = useState([]);
  const [habilidades, setHabilidades] = useState([null]);
  const [feliz, setFeliz] = useState([]);
  const [pensamientos, setPensamientos] = useState([]);
  useEffect(() => {
    setCuerpo([
      {duración: 1, tamaño: "gordito" }
    ])
    setHabilidades([
      { gatear: "maestro", caminar: "principante", hablar: "cavernícola" }
    ]);
    setFeliz([
      { sonrisa: true, sonido: "au au", gesto: "brazos agitados" }
    ]);
    setPensamientos([
{ comer: true, jugar: true, dormir: undefined, perrito: "guau guau", familia: [...feliz, ...miFamilia]}
    ]);
  }, [pensamientos]);

  
    const carcajada = () => {
      const nuevaListaFeliz = [...feliz, { carcajada: true, respiración:false }];
      setFeliz(nuevaListaFeliz);
    };
  return (
    <>
      {/* <OliversBody reir={carcajada} cuerpo={cuerpo} habilidades={habilidades} pensamientos={pensamientos}/> */}
    </>
  );
}








import React, { useState } from "react";
import { Link } from "react-router-dom";


function NavbarVertical({ statistics, stkinesthesia,stperception, stluck, stcharisma, stpresence,stconcentracion}) {
  const [nav, setNav] = useState(false)

  return (
      <div className="iconBar">
        <Link onClick={() => setNav(!nav)} className="active" >
        <i className={!nav ? "fa-solid fa-folder-tree":"fa-solid fa-folder-minus"}></i>
        </Link>
            {nav &&
                <>
                  <a onClick={statistics} href="#s-acciones"> Acciones</a>
                  <a onClick={statistics} href="#s-salud"> Salud</a>
                  <a onClick={stpresence} href="#s-presencia"> Presencia</a>
                  <a onClick={stcharisma} href="#s-carisma"> Carisma</a>
                  <a onClick={stluck} href="#s-suerte"> Suerte</a>
                  <a onClick={stperception} href="#s-percepcion"> Percepción</a>
                  <a onClick={stkinesthesia} href="#s-cinestesia"> Cinestesia</a>
                  <a onClick={statistics} href="#s-concentracion"> Concentración</a>
                </>
            }
      </div>
  );
}

export default NavbarVertical;

import React from "react";
import { useState } from "react";
import Talent from "../Talent";
import LineConect from './../../../extra/buttons/LineConect'


function TeferiAkosa() {
  return (
    <div data-aos="flip-left">
    <h3 className="mt-5">En desarrollo</h3>
    <div className="talents-rama-imgs">
      <img src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688333106/donGions%20imgs/rama/Teferi_PDF-1_rngsnh.jpg" alt="Ajani Img" />
      <img src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688333106/donGions%20imgs/rama/Teferi_PDF-2_u14gyr.jpg" alt="Ajani Img" />
    </div>
      <Talent
        talentfirst1={"Luchador"}
        talentfirst2={"Hechicero"}
        talentfirst3={"Cazador"}

      />
    </div>
  );
}

export default TeferiAkosa;

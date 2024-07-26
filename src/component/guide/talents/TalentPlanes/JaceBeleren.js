import React from "react";
import Talent from "../Talent";


function JaceBeleren() {
  return (
    <div>
    <h3 className="mt-5">En desarrollo</h3>
    <div className="talents-rama-imgs">
      <img src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688333120/donGions%20imgs/rama/Jace_PDF-1_wa7rfp.jpg" alt="jace Img" />
      <img src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688333120/donGions%20imgs/rama/Jace_PDF-2_jhejmo.jpg" alt="jace Img" />
    </div>
      <Talent
        talentfirst1={"Luchador"}
        talentfirst2={"Hechicero"}
        talentfirst3={"Cazador"}

      />
    </div>
  );
}

export default JaceBeleren;

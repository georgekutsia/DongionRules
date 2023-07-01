import React, { useState } from 'react';
import {Dungeon1, Dungeon2} from './../../component/index'

function Dungeons() {
  const [password, setPassword] = useState('');
  const [dun1, setSetDun1] = useState(false);


  const handleInputChange = (event) => {
    const enteredPassword = event.target.value;
    setPassword(enteredPassword);
    if (enteredPassword === 'vorovoro') {
      setSetDun1(true);
    } else {
      setSetDun1(false);
    }
  };

  return (
    <div className='m-5 dungeons-big-box'>
    <div>
        {!dun1 &&
          <div >
              <div className=''>
                  <img width={"100px"} src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688249262/donGions%20imgs/dungeons/Voro/voro_vacohg.jpg" alt="bla" />
              </div>
                <input className="contraseña-dungeon" text="password" value={password} onChange={handleInputChange}  placeholder="Voro..." />
            </div>
        }
    </div>
        {dun1 && <Dungeon1/>}
    </div>
  );
}

export default Dungeons;

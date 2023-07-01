import React, { useState } from 'react';
import {Dungeon1, Dungeon2} from './../../component/index'

function Dungeons() {
  const [password, setPassword] = useState('');
  const [dun1, setSetDun1] = useState(false);


  const handleInputChange = (event) => {
    const enteredPassword = event.target.value;
    setPassword(enteredPassword);
    if (enteredPassword === 'bulala') {
      setSetDun1(true);
    } else {
      setSetDun1(false);
    }
  };

  return (
    <div className='dungeons-big-box'>
        
        {!dun1 &&
          <div className='d-flex'>
              <img width={"100px"} src="https://res.cloudinary.com/dfrda73uc/image/upload/v1668768772/donGions%20imgs/kisspng-bible-psalms-book-of-nehemiah-magic-books-5a8e7c5aab8528.7528172415192873867026_ns0hm4.png" alt="" />
              <input className="contraseña-dungeon" text="password" value={password} onChange={handleInputChange}  placeholder="Volgagria..." />
          </div>
        }
        {dun1 && <Dungeon1/>}
    </div>
  );
}

export default Dungeons;

import React, { useState } from 'react';

function Dungeon1() {
  const [opacity, setOpacity] = useState({
    'dungeon-img1': 0,
    'dungeon-img2': 0,
    'dungeon-img3': 0,
    'dungeon-img4': 0,
    'dungeon-img5': 0,
    'dungeon-img6': 0,
    'dungeon-img7': 0,
    'dungeon-img8': 0,
    'dungeon-img9': 0,
    'dungeon-img10': 0,
    'dungeon-img11': 0,
    'dungeon-img12': 0,
    'dungeon-img13': 0,
    'dungeon-img14': 0,
    'dungeon-img15': 0,
    'dungeon-img16': 0,
    'dungeon-img17': 0,
    'dungeon-img18': 0,
    'dungeon-img19': 0,
    'dungeon-img20': 0,
  });

  const handleClick = (className) => {
    setOpacity((prevState) => ({ ...prevState, [className]: prevState[className] === 0 ? 1 : 0,
    }));
  };

  return (
    <div className='dungeon-big-box'>
      <div className='dungeons-box1'>
        <img className='dungeon-img1' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688174842/donGions%20imgs/dungeons/dung1/bc31da64699e07bd32c987a4c7d48895_koyf9s.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img1'] }} onClick={() => handleClick('dungeon-img1')}/>
        <img className='dungeon-img2' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688174842/donGions%20imgs/dungeons/dung1/bc31da64699e07bd32c987a4c7d48895_koyf9s.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img2'] }} onClick={() => handleClick('dungeon-img2')}/>
        <img className='dungeon-img3' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688174842/donGions%20imgs/dungeons/dung1/bc31da64699e07bd32c987a4c7d48895_koyf9s.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img3'] }} onClick={() => handleClick('dungeon-img3')}/>
        <img className='dungeon-img4' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688174842/donGions%20imgs/dungeons/dung1/bc31da64699e07bd32c987a4c7d48895_koyf9s.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img4'] }} onClick={() => handleClick('dungeon-img4')}/>
        <img className='dungeon-img5' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688174842/donGions%20imgs/dungeons/dung1/bc31da64699e07bd32c987a4c7d48895_koyf9s.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img5'] }} onClick={() => handleClick('dungeon-img5')}/>
      </div>
      <div className='dungeons-box2'>
        <img className='dungeon-img6' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688174842/donGions%20imgs/dungeons/dung1/bc31da64699e07bd32c987a4c7d48895_koyf9s.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img6'] }} onClick={() => handleClick('dungeon-img6')}/>
        <img className='dungeon-img7' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688174842/donGions%20imgs/dungeons/dung1/bc31da64699e07bd32c987a4c7d48895_koyf9s.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img7'] }} onClick={() => handleClick('dungeon-img7')}/>
        <img className='dungeon-img8' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688174842/donGions%20imgs/dungeons/dung1/bc31da64699e07bd32c987a4c7d48895_koyf9s.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img8'] }} onClick={() => handleClick('dungeon-img8')}/>
        <img className='dungeon-img9' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688174842/donGions%20imgs/dungeons/dung1/bc31da64699e07bd32c987a4c7d48895_koyf9s.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img9'] }} onClick={() => handleClick('dungeon-img9')}/>
        <img className='dungeon-img10' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688174842/donGions%20imgs/dungeons/dung1/bc31da64699e07bd32c987a4c7d48895_koyf9s.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img10'] }} onClick={() => handleClick('dungeon-img10')}/>
      </div>
      <div className='dungeons-box3'>
        <img className='dungeon-img11' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688174842/donGions%20imgs/dungeons/dung1/bc31da64699e07bd32c987a4c7d48895_koyf9s.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img11'] }} onClick={() => handleClick('dungeon-img11')}/>
        <img className='dungeon-img12' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688174842/donGions%20imgs/dungeons/dung1/bc31da64699e07bd32c987a4c7d48895_koyf9s.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img12'] }} onClick={() => handleClick('dungeon-img12')}/>
        <img className='dungeon-img13' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688174842/donGions%20imgs/dungeons/dung1/bc31da64699e07bd32c987a4c7d48895_koyf9s.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img13'] }} onClick={() => handleClick('dungeon-img13')}/>
        <img className='dungeon-img14' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688174842/donGions%20imgs/dungeons/dung1/bc31da64699e07bd32c987a4c7d48895_koyf9s.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img14'] }} onClick={() => handleClick('dungeon-img14')}/>
        <img className='dungeon-img15' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688174842/donGions%20imgs/dungeons/dung1/bc31da64699e07bd32c987a4c7d48895_koyf9s.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img15'] }} onClick={() => handleClick('dungeon-img15')}/>
      </div>
      <div className='dungeons-box4'>
        <img className='dungeon-img16' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688174842/donGions%20imgs/dungeons/dung1/bc31da64699e07bd32c987a4c7d48895_koyf9s.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img16'] }} onClick={() => handleClick('dungeon-img16')}/>
        <img className='dungeon-img17' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688174842/donGions%20imgs/dungeons/dung1/bc31da64699e07bd32c987a4c7d48895_koyf9s.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img17'] }} onClick={() => handleClick('dungeon-img17')}/>
        <img className='dungeon-img18' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688174842/donGions%20imgs/dungeons/dung1/bc31da64699e07bd32c987a4c7d48895_koyf9s.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img18'] }} onClick={() => handleClick('dungeon-img18')}/>
        <img className='dungeon-img19' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688174842/donGions%20imgs/dungeons/dung1/bc31da64699e07bd32c987a4c7d48895_koyf9s.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img19'] }} onClick={() => handleClick('dungeon-img19')}/>
        <img className='dungeon-img20' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688174842/donGions%20imgs/dungeons/dung1/bc31da64699e07bd32c987a4c7d48895_koyf9s.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img20'] }} onClick={() => handleClick('dungeon-img20')}/>
      </div>
    </div>
  );
}

export default Dungeon1;

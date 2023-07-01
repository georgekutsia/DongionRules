import React, { useState } from 'react';

function Dungeon1() {
  const [opacity, setOpacity] = useState({
    'dungeon-img1': 1,
    'dungeon-img2': 1,
    'dungeon-img3': 1,
    'dungeon-img4': 1,
    'dungeon-img5': 1,
    'dungeon-img6': 1,
    'dungeon-img7': 1,
    'dungeon-img8': 1,
    'dungeon-img9': 1,
    'dungeon-img10': 1,
    'dungeon-img11': 1,
    'dungeon-img12': 1,
    'dungeon-img13': 1,
    'dungeon-img14': 1,
    'dungeon-img15': 1,
    'dungeon-img16': 1,
    'dungeon-img17': 1,
    'dungeon-img18': 1,
    'dungeon-img19': 1,
    'dungeon-img20': 1,
    'dungeon-img21': 1,
    'dungeon-img22': 1,
    'dungeon-img23': 1,
    'dungeon-img24': 1,
    'dungeon-img25': 1,
    'dungeon-img26': 1,
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
        <img className='dungeon-img6' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688174842/donGions%20imgs/dungeons/dung1/bc31da64699e07bd32c987a4c7d48895_koyf9s.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img6'] }} onClick={() => handleClick('dungeon-img6')}/>
      </div>
      <div className='dungeons-box2'>
        <img className='dungeon-img7' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688174842/donGions%20imgs/dungeons/dung1/bc31da64699e07bd32c987a4c7d48895_koyf9s.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img7'] }} onClick={() => handleClick('dungeon-img7')}/>
        <img className='dungeon-img8' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688174842/donGions%20imgs/dungeons/dung1/bc31da64699e07bd32c987a4c7d48895_koyf9s.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img8'] }} onClick={() => handleClick('dungeon-img8')}/>
        <img className='dungeon-img9' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688174842/donGions%20imgs/dungeons/dung1/bc31da64699e07bd32c987a4c7d48895_koyf9s.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img9'] }} onClick={() => handleClick('dungeon-img9')}/>
        <img className='dungeon-img10' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688174842/donGions%20imgs/dungeons/dung1/bc31da64699e07bd32c987a4c7d48895_koyf9s.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img10'] }} onClick={() => handleClick('dungeon-img10')}/>
        <img className='dungeon-img11' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688174842/donGions%20imgs/dungeons/dung1/bc31da64699e07bd32c987a4c7d48895_koyf9s.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img11'] }} onClick={() => handleClick('dungeon-img11')}/>
        <img className='dungeon-img12' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688174842/donGions%20imgs/dungeons/dung1/bc31da64699e07bd32c987a4c7d48895_koyf9s.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img12'] }} onClick={() => handleClick('dungeon-img12')}/>
      </div>
      <div className='dungeons-box3'>
        <img className='dungeon-img13' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688174842/donGions%20imgs/dungeons/dung1/bc31da64699e07bd32c987a4c7d48895_koyf9s.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img13'] }} onClick={() => handleClick('dungeon-img13')}/>
        <img className='dungeon-img14' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688174842/donGions%20imgs/dungeons/dung1/bc31da64699e07bd32c987a4c7d48895_koyf9s.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img14'] }} onClick={() => handleClick('dungeon-img14')}/>
        <img className='dungeon-img15' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688174842/donGions%20imgs/dungeons/dung1/bc31da64699e07bd32c987a4c7d48895_koyf9s.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img15'] }} onClick={() => handleClick('dungeon-img15')}/>
        <img className='dungeon-img16' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688174842/donGions%20imgs/dungeons/dung1/bc31da64699e07bd32c987a4c7d48895_koyf9s.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img16'] }} onClick={() => handleClick('dungeon-img16')}/>
        <img className='dungeon-img17' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688174842/donGions%20imgs/dungeons/dung1/bc31da64699e07bd32c987a4c7d48895_koyf9s.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img17'] }} onClick={() => handleClick('dungeon-img17')}/>
        <img className='dungeon-img18' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688174842/donGions%20imgs/dungeons/dung1/bc31da64699e07bd32c987a4c7d48895_koyf9s.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img18'] }} onClick={() => handleClick('dungeon-img18')}/>
      </div>
      <div className='dungeons-box4'>
        <img className='dungeon-img19' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688174842/donGions%20imgs/dungeons/dung1/bc31da64699e07bd32c987a4c7d48895_koyf9s.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img19'] }} onClick={() => handleClick('dungeon-img19')}/>
        <img className='dungeon-img21' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688174842/donGions%20imgs/dungeons/dung1/bc31da64699e07bd32c987a4c7d48895_koyf9s.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img21'] }} onClick={() => handleClick('dungeon-img21')}/>
        <img className='dungeon-img22' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688174842/donGions%20imgs/dungeons/dung1/bc31da64699e07bd32c987a4c7d48895_koyf9s.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img22'] }} onClick={() => handleClick('dungeon-img22')}/>
        <img className='dungeon-img23' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688174842/donGions%20imgs/dungeons/dung1/bc31da64699e07bd32c987a4c7d48895_koyf9s.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img23'] }} onClick={() => handleClick('dungeon-img23')}/>
        <img className='dungeon-img24' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688174842/donGions%20imgs/dungeons/dung1/bc31da64699e07bd32c987a4c7d48895_koyf9s.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img24'] }} onClick={() => handleClick('dungeon-img24')}/>
        <img className='dungeon-img25' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688174842/donGions%20imgs/dungeons/dung1/bc31da64699e07bd32c987a4c7d48895_koyf9s.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img25'] }} onClick={() => handleClick('dungeon-img25')}/>
      </div>
      <div className='dungeons-box5'>
        <img className='dungeon-img26' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688174842/donGions%20imgs/dungeons/dung1/bc31da64699e07bd32c987a4c7d48895_koyf9s.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img26'] }} onClick={() => handleClick('dungeon-img26')}/>
        <img className='dungeon-img27' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688174842/donGions%20imgs/dungeons/dung1/bc31da64699e07bd32c987a4c7d48895_koyf9s.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img27'] }} onClick={() => handleClick('dungeon-img27')}/>
        <img className='dungeon-img28' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688174842/donGions%20imgs/dungeons/dung1/bc31da64699e07bd32c987a4c7d48895_koyf9s.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img28'] }} onClick={() => handleClick('dungeon-img28')}/>
        <img className='dungeon-img29' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688174842/donGions%20imgs/dungeons/dung1/bc31da64699e07bd32c987a4c7d48895_koyf9s.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img29'] }} onClick={() => handleClick('dungeon-img29')}/>
        <img className='dungeon-img30' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688174842/donGions%20imgs/dungeons/dung1/bc31da64699e07bd32c987a4c7d48895_koyf9s.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img30'] }} onClick={() => handleClick('dungeon-img30')}/>
        <img className='dungeon-img31' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688174842/donGions%20imgs/dungeons/dung1/bc31da64699e07bd32c987a4c7d48895_koyf9s.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img31'] }} onClick={() => handleClick('dungeon-img31')}/>
      </div>
    </div>
  );
}

export default Dungeon1;

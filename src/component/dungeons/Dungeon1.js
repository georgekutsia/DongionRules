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
    'dungeon-img27': 1,
    'dungeon-img28': 1,
    'dungeon-img29': 1,
    'dungeon-img30': 1,
    'dungeon-img31': 1,
    'dungeon-img32': 1,
    'dungeon-img33': 1,
    'dungeon-img34': 1,
    'dungeon-img35': 1,
    'dungeon-img36': 1,
    'dungeon-img37': 1,
    'dungeon-img38': 1,
    'dungeon-img39': 1,
    'dungeon-img40': 1,
  });
  const [rotation, setRotation] = useState({
    'dungeon-img1': 90,'dungeon-img2': 90,'dungeon-img3': -90,'dungeon-img4': 0,'dungeon-img5': 0,'dungeon-img6': 0,'dungeon-img7': 0,
    'dungeon-img8': 0,'dungeon-img9': 270,'dungeon-img10': 0,'dungeon-img11': 0,'dungeon-img12': 0,'dungeon-img13': 0,'dungeon-img14': 0,
    'dungeon-img15': 0,'dungeon-img16': 0,'dungeon-img17': 0,'dungeon-img18': 0,'dungeon-img19': 0,'dungeon-img20': 0,'dungeon-img21': 0,
    'dungeon-img22': 0,'dungeon-img23': 0,'dungeon-img24': 0,'dungeon-img25': 180,'dungeon-img26': 0,'dungeon-img27': 0,'dungeon-img28': 90,
    'dungeon-img29': 90,'dungeon-img30': 0,'dungeon-img31': 0,'dungeon-img32': 0,'dungeon-img33': 0,'dungeon-img34': 180,'dungeon-img35': 0,
    'dungeon-img36': 0,'dungeon-img37': 0,'dungeon-img38': 0,'dungeon-img39': 0,'dungeon-img40': 0,
  });
  const handleDoubleClick = (className) => {
    setRotation((prevRotation) => ({
      ...prevRotation,
      [className]: prevRotation[className] + 90,
    }));
  };
  

  const handleClick = (className) => {
    setOpacity((prevState) => ({ ...prevState, [className]: prevState[className] === 0 ? 1 : 0,
    }));
  };

  return (
    <div className='dungeon-big-box'>
      <div className='dungeons-box1'>
        <img className='dungeon-img1' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688237745/donGions%20imgs/dungeons/Voro/c30db91762aaf28baae7decfa5147746_alsxd9.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img1'], transform: `rotate(${rotation['dungeon-img1']}deg)`}} onDoubleClick={()=>handleDoubleClick('dungeon-img1')} onClick={() => handleClick('dungeon-img1')}/>
        <img className='dungeon-img2' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688237747/donGions%20imgs/dungeons/Voro/f2e94f6b4f4323f9f33bc31bf5834681_xxzfrv.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img2'], transform: `rotate(${rotation['dungeon-img2']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img2')} onClick={() => handleClick('dungeon-img2')}/>
        <img className='dungeon-img3' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688237741/donGions%20imgs/dungeons/Voro/7c2fa251ad3c4882a1a0e817661458c7_e1eyf1.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img3'], transform: `rotate(${rotation['dungeon-img3']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img3')} onClick={() => handleClick('dungeon-img3')}/>
        <img className='dungeon-img4' src="" alt="dungeon part" style={{ opacity: opacity['dungeon-img4'], transform: `rotate(${rotation['dungeon-img4']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img4')} onClick={() => handleClick('dungeon-img4')}/>
        <img className='dungeon-img5' src="" alt="dungeon part" style={{ opacity: opacity['dungeon-img5'], transform: `rotate(${rotation['dungeon-img5']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img5')} onClick={() => handleClick('dungeon-img5')}/>
        <img className='dungeon-img6' src="" alt="dungeon part" style={{ opacity: opacity['dungeon-img6'], transform: `rotate(${rotation['dungeon-img6']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img6')} onClick={() => handleClick('dungeon-img6')}/>
        <img className='dungeon-img7' src="" alt="dungeon part" style={{ opacity: opacity['dungeon-img7'], transform: `rotate(${rotation['dungeon-img7']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img7')} onClick={() => handleClick('dungeon-img7')}/>
        <img className='dungeon-img8' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688238617/donGions%20imgs/dungeons/HD-wallpaper-black-plain_pzysdn.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img8'], transform: `rotate(${rotation['dungeon-img8']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img8')} onClick={() => handleClick('dungeon-img8')}/>
      </div>
      <div className='dungeons-box2'>
        <img className='dungeon-img9' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688237747/donGions%20imgs/dungeons/Voro/f32b8abe34b4572842d25a8549e85efc_qkhch3.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img9'], transform: `rotate(${rotation['dungeon-img9']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img9')} onClick={() => handleClick('dungeon-img9')}/>
        <img className='dungeon-img10' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688239182/donGions%20imgs/dungeons/Voro/81a71871eca167b7ec2140e91b7b5b0c_yvgv05.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img10'], transform: `rotate(${rotation['dungeon-img10']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img10')} onClick={() => handleClick('dungeon-img10')}/>
        <img className='dungeon-img11' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688237744/donGions%20imgs/dungeons/Voro/962983310a3c1261d3a0bac3858ef077_qirply.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img11'], transform: `rotate(${rotation['dungeon-img11']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img11')} onClick={() => handleClick('dungeon-img11')}/>
        <img className='dungeon-img12' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688237743/donGions%20imgs/dungeons/Voro/81a71871eca167b7ec2140e91b7b5b0c_aflmmc.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img12'], transform: `rotate(${rotation['dungeon-img12']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img12')} onClick={() => handleClick('dungeon-img12')}/>
        <img className='dungeon-img13' src="" alt="dungeon part" style={{ opacity: opacity['dungeon-img13'], transform: `rotate(${rotation['dungeon-img13']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img13')} onClick={() => handleClick('dungeon-img13')}/>
        <img className='dungeon-img14' src="" alt="dungeon part" style={{ opacity: opacity['dungeon-img14'], transform: `rotate(${rotation['dungeon-img14']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img14')} onClick={() => handleClick('dungeon-img14')}/>
        <img className='dungeon-img15' src="" alt="dungeon part" style={{ opacity: opacity['dungeon-img15'], transform: `rotate(${rotation['dungeon-img15']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img15')} onClick={() => handleClick('dungeon-img15')}/>
        <img className='dungeon-img16' src="" alt="dungeon part" style={{ opacity: opacity['dungeon-img16'], transform: `rotate(${rotation['dungeon-img16']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img16')} onClick={() => handleClick('dungeon-img16')}/>
      </div>
      <div className='dungeons-box3'>
        <img className='dungeon-img17' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688237747/donGions%20imgs/dungeons/Voro/f943f395b8239bc4e181268f7b45fa20_oibjgv.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img17'], transform: `rotate(${rotation['dungeon-img17']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img17')} onClick={() => handleClick('dungeon-img17')}/>
        <img className='dungeon-img18' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688239141/donGions%20imgs/dungeons/Voro/521d6dbb7e4420533d488de4da22bc3c_ebdm3n.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img18'], transform: `rotate(${rotation['dungeon-img18']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img18')} onClick={() => handleClick('dungeon-img18')}/>
        <img className='dungeon-img19' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688237742/donGions%20imgs/dungeons/Voro/22ef6cbc040f97edd97c5fbd5929c546_fgjq9l.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img19'], transform: `rotate(${rotation['dungeon-img19']}deg)`, filter:"brightness(0.7)" }} onDoubleClick={() => handleDoubleClick('dungeon-img19')} onClick={() => handleClick('dungeon-img19')}/>
        <img className='dungeon-img20' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688237743/donGions%20imgs/dungeons/Voro/521d6dbb7e4420533d488de4da22bc3c_nfivdr.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img20'], transform: `rotate(${rotation['dungeon-img20']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img20')} onClick={() => handleClick('dungeon-img20')}/>
        <img className='dungeon-img21' src="" alt="dungeon part" style={{ opacity: opacity['dungeon-img21'], transform: `rotate(${rotation['dungeon-img21']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img21')} onClick={() => handleClick('dungeon-img21')}/>
        <img className='dungeon-img22' src="" alt="dungeon part" style={{ opacity: opacity['dungeon-img22'], transform: `rotate(${rotation['dungeon-img22']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img22')} onClick={() => handleClick('dungeon-img22')}/>
        <img className='dungeon-img23' src="" alt="dungeon part" style={{ opacity: opacity['dungeon-img23'], transform: `rotate(${rotation['dungeon-img23']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img23')} onClick={() => handleClick('dungeon-img23')}/>
        <img className='dungeon-img24' src="" alt="dungeon part" style={{ opacity: opacity['dungeon-img24'], transform: `rotate(${rotation['dungeon-img24']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img24')} onClick={() => handleClick('dungeon-img24')}/>
      </div>
      <div className='dungeons-box4'>
        <img className='dungeon-img25' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688237746/donGions%20imgs/dungeons/Voro/c92d8db58df7ebbd17aaf65801e7261a_lcsjr0.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img25'], transform: `rotate(${rotation['dungeon-img25']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img25')} onClick={() => handleClick('dungeon-img25')}/>
        <img className='dungeon-img26' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688237747/donGions%20imgs/dungeons/Voro/f37dc81c05f8edbafe334f8bf81bdf08_pvjili.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img26'], transform: `rotate(${rotation['dungeon-img26']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img26')} onClick={() => handleClick('dungeon-img26')}/>
        <img className='dungeon-img27' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688237742/donGions%20imgs/dungeons/Voro/8f79dbdd70ae07a0f553fbe5e3b88cbc_zgoi29.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img27'], transform: `rotate(${rotation['dungeon-img27']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img27')} onClick={() => handleClick('dungeon-img27')}/>
        <img className='dungeon-img28' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688237744/donGions%20imgs/dungeons/Voro/26572c31925c2f7ee6b26f941b5d30b6_dlga4x.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img28'], transform: `rotate(${rotation['dungeon-img28']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img28')} onClick={() => handleClick('dungeon-img28')}/>
        <img className='dungeon-img29' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688237745/donGions%20imgs/dungeons/Voro/e58289c4d4e5f236e1b7072fe7904991_kkx7xc.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img29'], transform: `rotate(${rotation['dungeon-img29']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img29')} onClick={() => handleClick('dungeon-img29')}/>
        <img className='dungeon-img30' src="" alt="dungeon part" style={{ opacity: opacity['dungeon-img30'], transform: `rotate(${rotation['dungeon-img30']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img30')} onClick={() => handleClick('dungeon-img30')}/>
        <img className='dungeon-img31' src="" alt="dungeon part" style={{ opacity: opacity['dungeon-img31'], transform: `rotate(${rotation['dungeon-img31']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img31')} onClick={() => handleClick('dungeon-img31')}/>
        <img className='dungeon-img32' src="" alt="dungeon part" style={{ opacity: opacity['dungeon-img32'], transform: `rotate(${rotation['dungeon-img32']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img32')} onClick={() => handleClick('dungeon-img32')}/>
      </div>
      <div className='dungeons-box5'>
        <img className='dungeon-img33' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688238617/donGions%20imgs/dungeons/HD-wallpaper-black-plain_pzysdn.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img33'], transform: `rotate(${rotation['dungeon-img33']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img33')} onClick={() => handleClick('dungeon-img33')}/>
        <img className='dungeon-img34' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688237745/donGions%20imgs/dungeons/Voro/b1efe12d8fb89ad698325f3c074ed943_jdgz4n.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img34'], transform: `rotate(${rotation['dungeon-img34']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img34')} onClick={() => handleClick('dungeon-img34')}/>
        <img className='dungeon-img35' src="" alt="dungeon part" style={{ opacity: opacity['dungeon-img35'], transform: `rotate(${rotation['dungeon-img35']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img35')} onClick={() => handleClick('dungeon-img35')}/>
        <img className='dungeon-img36' src="" alt="dungeon part" style={{ opacity: opacity['dungeon-img36'], transform: `rotate(${rotation['dungeon-img36']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img36')} onClick={() => handleClick('dungeon-img36')}/>
        <img className='dungeon-img37' src="" alt="dungeon part" style={{ opacity: opacity['dungeon-img37'], transform: `rotate(${rotation['dungeon-img37']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img37')} onClick={() => handleClick('dungeon-img37')}/>
        <img className='dungeon-img38' src="" alt="dungeon part" style={{ opacity: opacity['dungeon-img38'], transform: `rotate(${rotation['dungeon-img38']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img38')} onClick={() => handleClick('dungeon-img38')}/>
        <img className='dungeon-img39' src="" alt="dungeon part" style={{ opacity: opacity['dungeon-img39'], transform: `rotate(${rotation['dungeon-img39']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img39')} onClick={() => handleClick('dungeon-img39')}/>
        <img className='dungeon-img40' src="" alt="dungeon part" style={{ opacity: opacity['dungeon-img40'], transform: `rotate(${rotation['dungeon-img40']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img40')} onClick={() => handleClick('dungeon-img40')}/>
      </div>
    </div>
  );
}

export default Dungeon1;

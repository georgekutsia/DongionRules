import React, { useState } from 'react';

function Dungeon1({sizing}) {
  
  const [opacity, setOpacity] = useState({
    'dungeon-img1': 0,'dungeon-img2': 0,'dungeon-img3': 1,'dungeon-img4': 0,'dungeon-img5': 0,'dungeon-img6': 0,'dungeon-img7': 0,
    'dungeon-img8': 0,'dungeon-img9': 0,'dungeon-img10': 0,'dungeon-img11': 0,'dungeon-img12': 0,'dungeon-img13': 0,'dungeon-img14': 0,
    'dungeon-img15': 0,'dungeon-img16': 0,'dungeon-img17': 0,'dungeon-img18': 0,'dungeon-img19': 0,'dungeon-img20': 0,'dungeon-img21': 0,
    'dungeon-img22': 0,'dungeon-img23': 0,'dungeon-img24': 0,'dungeon-img25': 0,'dungeon-img26': 0,'dungeon-img27': 0,'dungeon-img28': 0,
    'dungeon-img29': 0,'dungeon-img30': 0,'dungeon-img31': 0,'dungeon-img32': 0,'dungeon-img33': 0,'dungeon-img34': 0,'dungeon-img35': 0,
    'dungeon-img36': 0,'dungeon-img37': 0,'dungeon-img38': 0,'dungeon-img39': 0,'dungeon-img40': 0,
  });
  const [rotation, setRotation] = useState({
    'dungeon-img1': 90,'dungeon-img2': 90,'dungeon-img3': -90,'dungeon-img4': 0,'dungeon-img5': 90,'dungeon-img6': -90,'dungeon-img7': 180,
    'dungeon-img8': -90,'dungeon-img9': 270,'dungeon-img10': 0,'dungeon-img11': 0,'dungeon-img12': 0,'dungeon-img13': 90,'dungeon-img14': 0,
    'dungeon-img15': 90,'dungeon-img16': 180,'dungeon-img17': 0,'dungeon-img18': 0,'dungeon-img19': 0,'dungeon-img20': 0,'dungeon-img21': 90,
    'dungeon-img22': 0,'dungeon-img23': 0,'dungeon-img24': 180,'dungeon-img25': 180,'dungeon-img26': 0,'dungeon-img27': 0,'dungeon-img28': 90,
    'dungeon-img29': 90,'dungeon-img30': 0,'dungeon-img31': 180,'dungeon-img32': 90,'dungeon-img33': 0,'dungeon-img34': 180,'dungeon-img35': 180,
    'dungeon-img36': 180,'dungeon-img37': 180,'dungeon-img38': 180,'dungeon-img39': -90,'dungeon-img40': 0,
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
        <img className='dungeon-img1'  src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688237745/donGions%20imgs/dungeons/Voro/c30db91762aaf28baae7decfa5147746_alsxd9.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img1'],width:`calc(${sizing}px + 2vw)`,height:`calc(${sizing}px + 2vw)`, transform: `rotate(${rotation['dungeon-img1']}deg)`}} onDoubleClick={()=>handleDoubleClick('dungeon-img1')} onClick={() => handleClick('dungeon-img1')}/>
        <img className='dungeon-img2'  src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688237747/donGions%20imgs/dungeons/Voro/f2e94f6b4f4323f9f33bc31bf5834681_xxzfrv.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img2'],width:`calc(${sizing}px + 2vw)`,height:`calc(${sizing}px + 2vw)`, transform: `rotate(${rotation['dungeon-img2']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img2')} onClick={() => handleClick('dungeon-img2')}/>
        <img className='dungeon-img3'  src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688237741/donGions%20imgs/dungeons/Voro/7c2fa251ad3c4882a1a0e817661458c7_e1eyf1.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img3'],width:`calc(${sizing}px + 2vw)`,height:`calc(${sizing}px + 2vw)`, transform: `rotate(${rotation['dungeon-img3']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img3')} onClick={() => handleClick('dungeon-img3')}/>
        <img className='dungeon-img4'  src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688238617/donGions%20imgs/dungeons/HD-wallpaper-black-plain_pzysdn.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img4'],width:`calc(${sizing}px + 2vw)`,height:`calc(${sizing}px + 2vw)`, transform: `rotate(${rotation['dungeon-img4']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img4')} onClick={() => handleClick('dungeon-img4')}/>
        <img className='dungeon-img5'  src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688237743/donGions%20imgs/dungeons/Voro/897d8f17b1501c9c1379cb9eda66db36_gaykdp.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img5'],width:`calc(${sizing}px + 2vw)`,height:`calc(${sizing}px + 2vw)`, transform: `rotate(${rotation['dungeon-img5']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img5')} onClick={() => handleClick('dungeon-img5')}/>
        <img className='dungeon-img6'  src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688237742/donGions%20imgs/dungeons/Voro/52f6b9ca425fb808abc1a205b6b25669_ybewdf.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img6'],width:`calc(${sizing}px + 2vw)`,height:`calc(${sizing}px + 2vw)`, transform: `rotate(${rotation['dungeon-img6']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img6')} onClick={() => handleClick('dungeon-img6')}/>
        <img className='dungeon-img7'  src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688237741/donGions%20imgs/dungeons/Voro/6e0191f4ca0663a28ba99c53bc253485_udo1az.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img7'],width:`calc(${sizing}px + 2vw)`,height:`calc(${sizing}px + 2vw)`, transform: `rotate(${rotation['dungeon-img7']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img7')} onClick={() => handleClick('dungeon-img7')}/>
        <img className='dungeon-img8'  src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688237740/donGions%20imgs/dungeons/Voro/0eb2fab78be28394df5e5e3713389f0d_zek4le.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img8'],width:`calc(${sizing}px + 2vw)`,height:`calc(${sizing}px + 2vw)`, transform: `rotate(${rotation['dungeon-img8']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img8')} onClick={() => handleClick('dungeon-img8')}/>
      </div>
      <div className='dungeons-box2'>
        <img className='dungeon-img9'  src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688237747/donGions%20imgs/dungeons/Voro/f32b8abe34b4572842d25a8549e85efc_qkhch3.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img9'],width:`calc(${sizing}px + 2vw)`,height:`calc(${sizing}px + 2vw)`, transform: `rotate(${rotation['dungeon-img9']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img9')} onClick={() => handleClick('dungeon-img9')}/>
        <img className='dungeon-img10'  src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688239182/donGions%20imgs/dungeons/Voro/81a71871eca167b7ec2140e91b7b5b0c_yvgv05.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img10'],width:`calc(${sizing}px + 2vw)`,height:`calc(${sizing}px + 2vw)`, transform: `rotate(${rotation['dungeon-img10']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img10')} onClick={() => handleClick('dungeon-img10')}/>
        <img className='dungeon-img11'  src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688237744/donGions%20imgs/dungeons/Voro/962983310a3c1261d3a0bac3858ef077_qirply.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img11'],width:`calc(${sizing}px + 2vw)`,height:`calc(${sizing}px + 2vw)`, transform: `rotate(${rotation['dungeon-img11']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img11')} onClick={() => handleClick('dungeon-img11')}/>
        <img className='dungeon-img12'  src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688237743/donGions%20imgs/dungeons/Voro/81a71871eca167b7ec2140e91b7b5b0c_aflmmc.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img12'],width:`calc(${sizing}px + 2vw)`,height:`calc(${sizing}px + 2vw)`, transform: `rotate(${rotation['dungeon-img12']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img12')} onClick={() => handleClick('dungeon-img12')}/>
        <img className='dungeon-img13'  src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688237745/donGions%20imgs/dungeons/Voro/80293974a158cd8159edbe94d3fa3f8e_lh55ux.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img13'],width:`calc(${sizing}px + 2vw)`,height:`calc(${sizing}px + 2vw)`, transform: `rotate(${rotation['dungeon-img13']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img13')} onClick={() => handleClick('dungeon-img13')}/>
        <img className='dungeon-img14'  src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688237742/donGions%20imgs/dungeons/Voro/8f79dbdd70ae07a0f553fbe5e3b88cbc_zgoi29.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img14'],width:`calc(${sizing}px + 2vw)`,height:`calc(${sizing}px + 2vw)`, transform: `rotate(${rotation['dungeon-img14']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img14')} onClick={() => handleClick('dungeon-img14')}/>
        <img className='dungeon-img15'  src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688237742/donGions%20imgs/dungeons/Voro/7ca4f79c27b91036c7bd3a60f84a6ff9_jtqzoc.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img15'],width:`calc(${sizing}px + 2vw)`,height:`calc(${sizing}px + 2vw)`, transform: `rotate(${rotation['dungeon-img15']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img15')} onClick={() => handleClick('dungeon-img15')}/>
        <img className='dungeon-img16'  src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688237741/donGions%20imgs/dungeons/Voro/01f3525babb2824e17ed485de9db8116_amiflh.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img16'],width:`calc(${sizing}px + 2vw)`,height:`calc(${sizing}px + 2vw)`, transform: `rotate(${rotation['dungeon-img16']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img16')} onClick={() => handleClick('dungeon-img16')}/>
      </div>
      <div className='dungeons-box3'>
        <img className='dungeon-img17'  src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688237747/donGions%20imgs/dungeons/Voro/f943f395b8239bc4e181268f7b45fa20_oibjgv.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img17'],width:`calc(${sizing}px + 2vw)`,height:`calc(${sizing}px + 2vw)`, transform: `rotate(${rotation['dungeon-img17']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img17')} onClick={() => handleClick('dungeon-img17')}/>
        <img className='dungeon-img18'  src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688239141/donGions%20imgs/dungeons/Voro/521d6dbb7e4420533d488de4da22bc3c_ebdm3n.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img18'],width:`calc(${sizing}px + 2vw)`,height:`calc(${sizing}px + 2vw)`, transform: `rotate(${rotation['dungeon-img18']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img18')} onClick={() => handleClick('dungeon-img18')}/>
        <img className='dungeon-img19'  src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688237742/donGions%20imgs/dungeons/Voro/22ef6cbc040f97edd97c5fbd5929c546_fgjq9l.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img19'],width:`calc(${sizing}px + 2vw)`,height:`calc(${sizing}px + 2vw)`, transform: `rotate(${rotation['dungeon-img19']}deg)`, filter:"brightness(0.7)" }} onDoubleClick={() => handleDoubleClick('dungeon-img19')} onClick={() => handleClick('dungeon-img19')}/>
        <img className='dungeon-img20'  src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688237743/donGions%20imgs/dungeons/Voro/521d6dbb7e4420533d488de4da22bc3c_nfivdr.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img20'],width:`calc(${sizing}px + 2vw)`,height:`calc(${sizing}px + 2vw)`, transform: `rotate(${rotation['dungeon-img20']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img20')} onClick={() => handleClick('dungeon-img20')}/>
        <img className='dungeon-img21'  src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688237745/donGions%20imgs/dungeons/Voro/b1efe12d8fb89ad698325f3c074ed943_jdgz4n.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img21'],width:`calc(${sizing}px + 2vw)`,height:`calc(${sizing}px + 2vw)`, transform: `rotate(${rotation['dungeon-img21']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img21')} onClick={() => handleClick('dungeon-img21')}/>
        <img className='dungeon-img22'  src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688237742/donGions%20imgs/dungeons/Voro/68e568e43b6e6455f6f7c497442f43d6_zlb6tq.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img22'],width:`calc(${sizing}px + 2vw)`,height:`calc(${sizing}px + 2vw)`, transform: `rotate(${rotation['dungeon-img22']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img22')} onClick={() => handleClick('dungeon-img22')}/>
        <img className='dungeon-img23'  src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688237741/donGions%20imgs/dungeons/Voro/5bb19b389c31e5ac910b5b87ac8edbb1_sh4pv7.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img23'],width:`calc(${sizing}px + 2vw)`,height:`calc(${sizing}px + 2vw)`, transform: `rotate(${rotation['dungeon-img23']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img23')} onClick={() => handleClick('dungeon-img23')}/>
        <img className='dungeon-img24'  src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688237743/donGions%20imgs/dungeons/Voro/897d8f17b1501c9c1379cb9eda66db36_gaykdp.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img24'],width:`calc(${sizing}px + 2vw)`,height:`calc(${sizing}px + 2vw)`, transform: `rotate(${rotation['dungeon-img24']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img24')} onClick={() => handleClick('dungeon-img24')}/>
      </div>
      <div className='dungeons-box4'>
        <img className='dungeon-img25'  src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688237746/donGions%20imgs/dungeons/Voro/c92d8db58df7ebbd17aaf65801e7261a_lcsjr0.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img25'],width:`calc(${sizing}px + 2vw)`,height:`calc(${sizing}px + 2vw)`, transform: `rotate(${rotation['dungeon-img25']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img25')} onClick={() => handleClick('dungeon-img25')}/>
        <img className='dungeon-img26'  src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688237747/donGions%20imgs/dungeons/Voro/f37dc81c05f8edbafe334f8bf81bdf08_pvjili.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img26'],width:`calc(${sizing}px + 2vw)`,height:`calc(${sizing}px + 2vw)`, transform: `rotate(${rotation['dungeon-img26']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img26')} onClick={() => handleClick('dungeon-img26')}/>
        <img className='dungeon-img27'  src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688237742/donGions%20imgs/dungeons/Voro/8f79dbdd70ae07a0f553fbe5e3b88cbc_zgoi29.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img27'],width:`calc(${sizing}px + 2vw)`,height:`calc(${sizing}px + 2vw)`, transform: `rotate(${rotation['dungeon-img27']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img27')} onClick={() => handleClick('dungeon-img27')}/>
        <img className='dungeon-img28'  src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688237744/donGions%20imgs/dungeons/Voro/26572c31925c2f7ee6b26f941b5d30b6_dlga4x.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img28'],width:`calc(${sizing}px + 2vw)`,height:`calc(${sizing}px + 2vw)`, transform: `rotate(${rotation['dungeon-img28']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img28')} onClick={() => handleClick('dungeon-img28')}/>
        <img className='dungeon-img29'  src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688237745/donGions%20imgs/dungeons/Voro/e58289c4d4e5f236e1b7072fe7904991_kkx7xc.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img29'],width:`calc(${sizing}px + 2vw)`,height:`calc(${sizing}px + 2vw)`, transform: `rotate(${rotation['dungeon-img29']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img29')} onClick={() => handleClick('dungeon-img29')}/>
        <img className='dungeon-img30'  src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688237744/donGions%20imgs/dungeons/Voro/5505aad4c3f1faee786255001db98d58_xhx1x2.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img30'],width:`calc(${sizing}px + 2vw)`,height:`calc(${sizing}px + 2vw)`, transform: `rotate(${rotation['dungeon-img30']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img30')} onClick={() => handleClick('dungeon-img30')}/>
        <img className='dungeon-img31'  src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688237745/donGions%20imgs/dungeons/Voro/c17958f37b371d366f21fe42d4eee064_cafsh7.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img31'],width:`calc(${sizing}px + 2vw)`,height:`calc(${sizing}px + 2vw)`, transform: `rotate(${rotation['dungeon-img31']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img31')} onClick={() => handleClick('dungeon-img31')}/>
        <img className='dungeon-img32'  src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688237741/donGions%20imgs/dungeons/Voro/3d8ac4984fae576c6da05b4fb9a1fa77_sydxu7.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img32'],width:`calc(${sizing}px + 2vw)`,height:`calc(${sizing}px + 2vw)`, transform: `rotate(${rotation['dungeon-img32']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img32')} onClick={() => handleClick('dungeon-img32')}/>
      </div> 
      <div className='dungeons-box5'>
        <img className='dungeon-img33'  src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688238617/donGions%20imgs/dungeons/HD-wallpaper-black-plain_pzysdn.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img33'],width:`calc(${sizing}px + 2vw)`,height:`calc(${sizing}px + 2vw)`, transform: `rotate(${rotation['dungeon-img33']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img33')} onClick={() => handleClick('dungeon-img33')}/>
        <img className='dungeon-img34'  src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688237745/donGions%20imgs/dungeons/Voro/b1efe12d8fb89ad698325f3c074ed943_jdgz4n.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img34'],width:`calc(${sizing}px + 2vw)`,height:`calc(${sizing}px + 2vw)`, transform: `rotate(${rotation['dungeon-img34']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img34')} onClick={() => handleClick('dungeon-img34')}/>
        <img className='dungeon-img35'  src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688237745/donGions%20imgs/dungeons/Voro/a9767345d9bb9269bd8843309bac6189_ggulcu.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img35'],width:`calc(${sizing}px + 2vw)`,height:`calc(${sizing}px + 2vw)`, transform: `rotate(${rotation['dungeon-img35']}deg)`, filter:"brightness(0.9)" }} onDoubleClick={() => handleDoubleClick('dungeon-img35')} onClick={() => handleClick('dungeon-img35')}/>
        <img className='dungeon-img36'  src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688237745/donGions%20imgs/dungeons/Voro/ab594244ea157bf281d01b5467283136_hk92sd.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img36'],width:`calc(${sizing}px + 2vw)`,height:`calc(${sizing}px + 2vw)`, transform: `rotate(${rotation['dungeon-img36']}deg)`, filter:"brightness(0.7)" }} onDoubleClick={() => handleDoubleClick('dungeon-img36')} onClick={() => handleClick('dungeon-img36')}/>
        <img className='dungeon-img37'  src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688237744/donGions%20imgs/dungeons/Voro/a124b71dba699ef78320bed8b4ec1268_rdnky4.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img37'],width:`calc(${sizing}px + 2vw)`,height:`calc(${sizing}px + 2vw)`, transform: `rotate(${rotation['dungeon-img37']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img37')} onClick={() => handleClick('dungeon-img37')}/>
        <img className='dungeon-img38'  src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688237744/donGions%20imgs/dungeons/Voro/990913e17e234b59b0a71b50b68a431b_vsjl0u.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img38'],width:`calc(${sizing}px + 2vw)`,height:`calc(${sizing}px + 2vw)`, transform: `rotate(${rotation['dungeon-img38']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img38')} onClick={() => handleClick('dungeon-img38')}/>
        <img className='dungeon-img39'  src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688237742/donGions%20imgs/dungeons/Voro/9b64982e4e5cbbb7f514576da13e6164_alayxd.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img39'],width:`calc(${sizing}px + 2vw)`,height:`calc(${sizing}px + 2vw)`, transform: `rotate(${rotation['dungeon-img39']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img39')} onClick={() => handleClick('dungeon-img39')}/>
        <img className='dungeon-img40'  src="https://res.cloudinary.com/dfrda73uc/image/upload/v1688237742/donGions%20imgs/dungeons/Voro/9c9f706e5096f85b0902816b72cb0547_s6zhej.jpg" alt="dungeon part" style={{ opacity: opacity['dungeon-img40'],width:`calc(${sizing}px + 2vw)`,height:`calc(${sizing}px + 2vw)`, transform: `rotate(${rotation['dungeon-img40']}deg)` }} onDoubleClick={() => handleDoubleClick('dungeon-img40')} onClick={() => handleClick('dungeon-img40')}/>
      </div>
    </div>
  );
}

export default Dungeon1;

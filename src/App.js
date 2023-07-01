import { Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import { NavBar } from './component';
import ReactDOM from "react-dom"
import { ShopScreen, RuleScreen, EventsScreen, DongionsDetail, FrontFrontpage, CounterScreen, PjScreen, MapScreen } from "./screens"
import FadeInOut from './component/FadeInOut';

// ...

function App() {
  const [pjScreenVisible, setPjScreenVisible] = useState(false);
  const [mapScreenVisible, setMapScreenVisible] = useState(false);
  const [showMap1, setShowMap1] = useState(false);
  const [showMap2, setShowMap2] = useState(false);
  const [showMap3, setShowMap3] = useState(false);

  const togglePjScreen = () => {
    setPjScreenVisible(!pjScreenVisible);
  };
  const toggleMapScreen = () => {
    setMapScreenVisible(!mapScreenVisible);
  };
  const handleMap1 = () => {
    setShowMap1(false);
    setShowMap2(false)
    setShowMap3(false);
    setTimeout(() => {
      setShowMap1(true);
    }, 0);
  };
  const handleMap2 = () => {
    setShowMap1(false);
    setShowMap2(false);
    setShowMap3(false);
    setTimeout(() => {
      setShowMap2(true);
    }, 0);
  };
  const handleMap3 = () => {
    setShowMap1(false);
    setShowMap2(false);
    setShowMap3(false);
    setTimeout(() => {
      setShowMap3(true);
    }, 0);
  };
  return (
    <div>
      <NavBar />
      <button style={{color: mapScreenVisible? "yellow":""}} className='button-map' onClick={toggleMapScreen}>
        {mapScreenVisible ? <i className="fa-solid fa-earth-europe fa-fade"></i> : <i className="fa-solid fa-earth-europe fa-spin"></i>}
      </button>
      <button style={{color: pjScreenVisible? "cyan":""}} className='button-pj' onClick={togglePjScreen}>
        {pjScreenVisible ? <i className="fa-solid fa-person-military-pointing fa-fade"></i>: <i className="fa-solid fa-person-military-rifle fa-bounce"></i>}
      </button>
      <div className='app-container-pj' align="center" style={{display: pjScreenVisible ? "flex" : "none"}}>
        <PjScreen />
      </div>
      <div className='app-container-map' style={{display: mapScreenVisible ? "flex" : "none"}}>
        <div>
            <button onClick={handleMap1}>
              Mapa 3x3
            </button>
            <button onClick={handleMap2}>
              Mapa 4x3
            </button>
            <button onClick={handleMap3}>
              Mapa 4x4
            </button>
            <div>
                {showMap1 && <MapScreen tamaño={9}/>}
                {showMap2 && <MapScreen tamaño={12}/>}
                {showMap3 && <MapScreen tamaño={16}/>}
            </div>
        </div>
      </div>
      <div className="cur1">
        <Routes>
          <Route path="/" element={<FrontFrontpage />} />
          <Route path="/eventos" element={<EventsScreen />} />
          <Route path="/shop" element={<ShopScreen />} />
          <Route path="/rules" element={<RuleScreen />} />
          <Route path="/dongionsdDetail" element={<DongionsDetail />} />
          <Route path="/counter" element={<CounterScreen />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

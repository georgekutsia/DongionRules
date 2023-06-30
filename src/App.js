import { Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import { NavBar } from './component';
import { ShopScreen, RuleScreen, EventsScreen, DongionsDetail, FrontFrontpage, CounterScreen, PjScreen, MapScreen } from "./screens"

function App() {
  const [pjScreenVisible, setPjScreenVisible] = useState(false);
  const [mapScreenVisible, setMapScreenVisible] = useState(false);

  const togglePjScreen = () => {
    setPjScreenVisible(!pjScreenVisible);
  };
  const toggleMapScreen = () => {
    setMapScreenVisible(!mapScreenVisible);
  };

  return (
    <div>
      <NavBar />
      <button className='button-map' onClick={toggleMapScreen}>
        {mapScreenVisible ? <i className="fa-solid fa-map fa-fade"></i>: <i className="fa-solid fa-map fa-bounce"></i>}
      </button>
      <button className='button-pj' onClick={togglePjScreen}>
        {pjScreenVisible ? <i className="fa-solid fa-person-military-pointing fa-fade"></i>: <i className="fa-solid fa-person-military-rifle fa-bounce"></i>}
      </button>
      <div className='app-container-pj' align="center" style={{display: pjScreenVisible ? "flex" : "none"}}>
        <PjScreen />
      </div>
      <div className='app-container-pj' align="center" style={{display: mapScreenVisible ? "flex" : "none"}}>
        <MapScreen/>
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

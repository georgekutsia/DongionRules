import {Navigate, Route, Routes} from 'react-router-dom'
import React from 'react';
import {NavBar} from './component';
import {  FrontpageScreen, ShopScreen, RuleScreen,
  EventsScreen, FrontFrontpage, DongionsDetail} from "./screens"


function App() {

  return (
    <div >
    <NavBar/>
          <div className="cur1" >
            <Routes>
              <Route path="/" element={<FrontFrontpage/>} />
              <Route path="/eventos" element={<EventsScreen/>}/>
              <Route path="/shop" element={<ShopScreen/>}/>
              <Route path="/rules" element={<RuleScreen/>}/>
              <Route path="/frontpage" element={<FrontpageScreen/>}/>
              <Route path="/dongionsdDetail" element={<DongionsDetail/>}/>
            </Routes>
          </div>
    </div>
  );
}

export default App;

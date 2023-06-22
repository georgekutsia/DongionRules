import { Route, Routes} from 'react-router-dom'
import React, { useState } from 'react';
import {NavBar} from './component';
import { ShopScreen, RuleScreen, EventsScreen, DongionsDetail, FrontFrontpage, CounterScreen, PjScreen} from "./screens"


function App() {
  const [vida, setVida] = useState(0)

  return (
    <div >
    <NavBar/>
    
    <PjScreen/>
          <div className="cur1" >
            <Routes>
              <Route path="/" element={<FrontFrontpage/>} />
              <Route path="/eventos" element={<EventsScreen/>}/>
              <Route path="/shop" element={<ShopScreen/>}/>
              <Route path="/rules" element={<RuleScreen/>}/>
              <Route path="/dongionsdDetail" element={<DongionsDetail/>}/>
              <Route path="/counter" element={<CounterScreen/>}/>
            </Routes>
          </div>
    </div>
  );
}

export default App;

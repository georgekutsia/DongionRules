import {Navigate, Route, Routes} from 'react-router-dom'
import React from 'react';
import {NavBar} from './component';
import { PjScreen, FrontpageScreen, NotesScreen, PjDetailScreen,
  RegisterScreen, ShopScreen, RuleScreen,  NoteDetailScreen, LoginScreeen, 
  EventsScreen, FrontFrontpage, MonstersScreen, DongionsDetail} from "./screens"
import { useContext, useState } from 'react';
import { AuthContext } from './context/AuthContext';
// import { neonCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'


function App() {
  const connected = useContext(AuthContext)

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

import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import React, { useState } from "react";
import About from './About';
import Home from './Home';
import Contacts from './components/Contacts';
import MessMenu from './components/MessMenu';
import MessTimeB from './components/MessTimeB';
import MessTimeG from './components/MessTimeG';
import TTBTech1CSE from './components/TTBTech1CSE';
import TTBTech2CSE from './components/TTBTech2CSE';
import TTBTech3CSE from './components/TTBTech3CSE';
import TTBTech4CSE from './components/TTBTech4CSE';
import TTBTech1ECE from './components/TTBTech1ECE';
import TTBTech2ECE from './components/TTBTech2ECE';
import TTBTech3ECE from './components/TTBTech3ECE';
import TTBTech4ECE from './components/TTBTech4ECE';
import TTMCA1 from './components/TTMCA1';
import TTMCA2 from './components/TTMCA2';
import SylBTech1CSE from './components/SylBTech1CSE';
import SylBTech2CSE from './components/SylBTech2CSE';
import SylBTech3CSE from './components/SylBTech3CSE';
import SylBTech4CSE from './components/SylBTech4CSE';
import SylBTech1ECE from './components/SylBTech1ECE';
import SylBTech2ECE from './components/SylBTech2ECE';
import SylBTech3ECE from './components/SylBTech3ECE';
import SylBTech4ECE from './components/SylBTech4ECE';
import SylMCA1 from './components/SylMCA1';
import SylMCA2 from './components/SylMCA2';
import {Login,course,year,stream} from './Login';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [course, setCourse] = useState('');
  const [year, setYear] = useState('');
  const [stream, setStream] = useState('');
  
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/login' element={<Login setCourse={setCourse} setYear={setYear} setStream={setStream}/>}/>
          <Route path='/home' element={<Home course={course} year={year} stream={stream}/>} />
          <Route path='/about' element={<About />} />
          <Route path='/sylMCA1' element={<SylMCA1 />} />
          <Route path='/sylMCA2' element={<SylMCA2 />} />
          <Route path='/sylBTech1CSE' element={<SylBTech1CSE />} />
          <Route path='/sylBTech1ECE' element={<SylBTech1ECE />} />
          <Route path='/sylBTech2CSE' element={<SylBTech2CSE />} />
          <Route path='/sylBTech2ECE' element={<SylBTech2ECE />} />
          <Route path='/sylBTech3CSE' element={<SylBTech3CSE />} />
          <Route path='/sylBTech3ECE' element={<SylBTech3ECE />} />
          <Route path='/sylBTech4CSE' element={<SylBTech4CSE />} />
          <Route path='/sylBTech4ECE' element={<SylBTech4ECE />} />
          <Route path='/ttMCA1' element={<TTMCA1 />} />
          <Route path='/ttMCA2' element={<TTMCA2 />} />
          <Route path='/ttBTech1ECE' element={<TTBTech1ECE />} />
          <Route path='/ttBTech2CSE' element={<TTBTech2CSE />} />
          <Route path='/ttBTech1CSE' element={<TTBTech1CSE />} />
          <Route path='/ttBTech2ECE' element={<TTBTech2ECE />} />
          <Route path='/ttBTech3CSE' element={<TTBTech3CSE />} />
          <Route path='/ttBTech3ECE' element={<TTBTech3ECE />} />
          <Route path='/ttBTech4CSE' element={<TTBTech4CSE />} />
          <Route path='/ttBTech4ECE' element={<TTBTech4ECE />} />
          <Route path='/messtimeG' element={<MessTimeG/>} />
          <Route path='/messtimeB' element={<MessTimeB/>} />
          <Route path='/messmenu' element={<MessMenu/>} />
          <Route path='/contacts' element={<Contacts/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

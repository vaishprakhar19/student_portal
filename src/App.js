import './App.css';
import Navbar from './components/Navbar';
import React, { useState} from "react";
import {About} from './About';
import Home from './Home';
import Holidays from './components/Holidays';
import Contacts from './components/Contacts';
import MessMenu from './components/MessMenu';
import MessTime from './components/MessTime';
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
import {Login} from './Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import TodoList from './components/TodoList';

function App() {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [year, setYear] = useState('');
  const [stream, setStream] = useState('');
  const [login, setLogin] = useState(false);
  const [daysch, setDaysch] = useState(false);
  
  return (
    <Router>
        <Navbar login={login} setLogin={setLogin}/>
        <Routes>
          <Route path='/login' element={<Login setCourse={setCourse} setYear={setYear} setStream={setStream} setName={setName} setLogin={setLogin} setDaysch={setDaysch}/>}/>
          <Route path='/home' element={<Home name={name} course={course} year={year} stream={stream} daysch={daysch}/>} />
          <Route path='/about' element={<About />} />
          <Route path='/holidays' element={<Holidays />} />
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
          <Route path='/messtime' element={<MessTime/>} />
          <Route path='/messmenu' element={<MessMenu/>} />
          <Route path='/contacts' element={<Contacts/>} />
          <Route path='/todolist' element={<TodoList/>} />
        </Routes>
      </Router>
  );
}

export default App;

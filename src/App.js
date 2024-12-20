import './App.css';
import Navbar from './components/Navbar';
import React, { useState, useEffect } from "react";
import { About } from './About';
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
import { Login } from './Login';
import AOS from "aos";
import "aos/dist/aos.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import TodoList from './components/TodoList';

function App() {
  const [name, setName] = useState(localStorage.getItem('name') || '');
  const [course, setCourse] = useState(localStorage.getItem('course') || '');
  const [year, setYear] = useState(localStorage.getItem('year') || '');
  const [stream, setStream] = useState(localStorage.getItem('stream') || '');
  const [login, setLogin] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    localStorage.setItem('name', name);
  }, [name]);

  useEffect(() => {
    localStorage.setItem('course', course);
  }, [course]);

  useEffect(() => {
    localStorage.setItem('year', year);
  }, [year]);

  useEffect(() => {
    localStorage.setItem('stream', stream);
  }, [stream]);

  useEffect(() => {
    localStorage.setItem('isLoggedIn', login);
  }, [login]);

  return (
    <Router>
      <Navbar login={login} setLogin={setLogin} setPopup={setPopup} popup={popup}/>
      <Routes>
        <Route
          path='/'
          element={login ? <Navigate to="/home" /> : <Login setPopup={setPopup} popup={popup} setCourse={setCourse} setYear={setYear} setStream={setStream} setName={setName} setLogin={setLogin} />}
        />
        <Route
          path='/login'
          element={login ? <Navigate to="/home" /> : <Login setPopup={setPopup} popup={popup} setCourse={setCourse} setYear={setYear} setStream={setStream} setName={setName} setLogin={setLogin} />}
        />
        <Route path='/home' element={<Home name={name} course={course} year={year} stream={stream} />} />
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
        <Route path='/messtime' element={<MessTime />} />
        <Route path='/messmenu' element={<MessMenu />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/todolist' element={<TodoList />} />
      </Routes>
    </Router>
  );
}

export default App;

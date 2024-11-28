import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Login.css';
import { RxCross2 } from 'react-icons/rx';
import { auth, provider } from "./firebase-config";
import { signInWithPopup, signOut } from "firebase/auth";

function Login(props) {
  const navigate = useNavigate();
  const [coursetemp, setcoursetemp] = useState('');
  const [reg, setReg] = useState(false);
  const [localName] = useState(localStorage.getItem('name') || '');
  let login, logout;

  try {
    login = async () => {
      await signInWithPopup(auth, provider);
      props.setLogin(true);
      localStorage.setItem("isLoggedIn", true);
      navigate('/Home');
    }

    logout = async () => {
      await signOut(auth);
      props.setLogin(false);
      localStorage.clear();
    }
    // Temporary usage of logout to avoid warnings
    console.log(logout);

  } catch (err) {
    console.log(err);
  }

  const handleCourse = (event) => {
    const course = event.target.value;
    setcoursetemp(course);
    props.setCourse(course);
    localStorage.setItem('course', course);
  }

  const handleYear = (event) => {
    const year = event.target.value;
    props.setYear(year);
    localStorage.setItem('year', year);
  }

  const handleStream = (event) => {
    const stream = event.target.value;
    props.setStream(stream);
    localStorage.setItem('stream', stream);
  }

  const handleName = (event) => {
    const name = event.target.value;
    props.setName(name);
    localStorage.setItem('name', name);
  }

  const handleLogin = () => {
    navigate('/Home');
    props.setLogin(true);
    localStorage.setItem("isLoggedIn", true);
    props.setPopup(false);
  }

  const handlePopup = () => {
    props.setPopup(!props.popup);
  }

  const handleReg = () => {
    const newRegState = !reg;
    setReg(newRegState);
  }


  if (coursetemp === 'MCA') props.setStream('');
  return (
    <div className="page" id="login">
      <div className='login-background'></div>
      <div className='blur dark'></div>
      <div id="introduction">
        <div className="intro-text">
          <div data-aos="fade-down" data-aos-duration="1500">
            <h1 className="display-4">One destination<br />for all your<br />Schedules</h1>
            <p>A platform where you can plan and manage all your daily tasks and schedules!</p>
            <p id="swipe">Swipe Down &#8595;</p>
          </div>
          <button className="button" data-aos="fade-up" data-aos-duration="1500" onClick={handlePopup}>Login</button>
        </div>
        <img id="logo" data-aos="fade-left" data-aos-duration="1500" src="https://cdn2.iconfinder.com/data/icons/education-flat-icons-part-1/218/Reading_Girl-512.png" alt='' />
      </div>
      <div className="blur blackish" hidden={!props.popup}></div>

      <form onSubmit={handleLogin} id="login-form" style={props.popup ? { transform: 'scale(1)' } : { transform: 'scale(0)' }}>
        <h1>Student {reg ? 'Registeration' : 'Login'}</h1>
        <RxCross2 id="close-button" onClick={handlePopup} />
        <div className="form-group">
          <input required={reg && !localName} hidden={!reg} type="text" className="textin" id="name" aria-describedby="namelHelp" placeholder="Enter Full Name" onChange={handleName} />
        </div>
        <div className="form-group">
          <input required type="email" className="textin" id="email" aria-describedby="emailHelp" placeholder="Enter Email" />
          <small hidden={!reg} id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <input required type="password" className="textin" id="password" placeholder="Password" />
        </div>
        <select className="select" hidden={!reg} onChange={handleCourse}>
          <option>Course</option>
          <option>MCA</option>
          <option>BTech</option>
        </select>
        <select className="select" hidden={!reg} onChange={handleYear}>
          <option>Year</option>
          <option>1</option>
          <option>2</option>
          <option hidden={coursetemp === 'MCA'}>3</option>
          <option hidden={coursetemp === 'MCA'}>4</option>
        </select>
        <select hidden={coursetemp === 'MCA' || !reg} className="select" onChange={handleStream}>
          <option>Stream</option>
          <option>CSE</option>
          <option>ECE</option>
        </select>
        <div hidden={reg} className="form-check">
          <input type="checkbox" className="form-check-input" id="checkbox" />
          <label className="form-check-label" htmlFor="checkbox">Remember me</label>
        </div>
        <p id="reg-text">{reg ? 'Have an account? ' : "Don't have an account? "}<Link onClick={handleReg}>{reg ? "Login Here." : "Register Now."}</Link></p>
        <button className='button' type='submit'>Submit</button>
        <br />
        <br />
        <button className='button' onClick={login}>Login With Google</button>
      </form>
    </div>
  );
}

export { Login };

import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './Login.css';


function Login(props) {

  const [coursetemp, setcoursetemp] = useState('');
  const [popup, setPopup] = useState(false);
  const [reg, setReg] = useState(false);

  const handleCourse = (event) => {
    setcoursetemp(event.target.value);
    props.setCourse(event.target.value);
  }
  const handleYear = (event) => {
    props.setYear(event.target.value);
  }
  const handleStream = (event) => {
    props.setStream(event.target.value);
  }
  const handleName = (event) => {
    props.setName(event.target.value);
  }
  const handleLogin = () => {
    props.setLogin(true);
  }
  const handlePopup = () => {
    popup ? setPopup(false) : setPopup(true);
  }
  const handleReg = () => {
    reg?setReg(false):setReg(true);
  }

  if (coursetemp === 'MCA') props.setStream('');

  return (
    <div className="page">
      <button class="btn btn-primary" onClick={handlePopup}>LOGIN</button>

      <form id="login-form" style={popup ? { transform: 'scale(1)' } : { transform: 'scale(0)' }}>
        <h1>Student Login</h1>
        <div className="form-group">
          <input required hidden={!reg} type="text" className=" textin" id="name" aria-describedby="namelHelp" placeholder="Enter Name" onChange={handleName} />
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
          <option hidden={coursetemp === 'MCA' ? true : false}>3</option>
          <option hidden={coursetemp === 'MCA' ? true : false}>4</option>
        </select>
        <select hidden={coursetemp === 'MCA' ? true : false||!reg} className="select" onChange={handleStream}>
          <option>Stream</option>
          <option>CSE</option>
          <option>ECE</option>
        </select>
        <div hidden={reg} className="form-check">
          <input type="checkbox" className="form-check-input" id="checkbox" />
          <label className="form-check-label" htmlFor="checkbox">Remember me</label>
        </div>
        <p>{reg?"Don't have an account?":'Have an account?'}<Link onClick={handleReg}>{reg?"Login Here.":"Register Now."}</Link></p>
        {/* ???????????? */}
        <Link to='/home'><button type="submit" className="btn btn-primary" onClick={handleLogin}>Submit</button></Link>
      </form>
    </div>

    // <div>
    //   <br/>
    //   <div id="center">
    //     <img src="https://media.licdn.com/dms/image/C4D0BAQG5v3a58y4Lzg/company-logo_200_200/0/1594425078658?e=1690416000&v=beta&t=9BWJudObwnpOkWRCdSt5j5Xne-SPOWEyb72gT4An_UA" />
    //     </div>
    //   <div id="right">
    //   <h1>STUDENT PORTAL BIAS</h1>
    //   <p><b>Quicker,Easier and more faster access!!
    //     This platform allows students to manage and keep tracks of their academics schedules.</b></p></div>
  )
}

export { Login };

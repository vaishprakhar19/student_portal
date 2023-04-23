import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './Login.css';


function Login(props) {

  const [coursetemp, setcoursetemp] = useState();

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
  const handleLogin = (event) => {
    props.setLogin(true);
  }
  

  return (
    <div>
      <br />
      <br />
      <br />
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input required type="text" className="form-control" id="name" aria-describedby="namelHelp" placeholder="Enter Name" onChange={handleName} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input required type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input required type="password" className="form-control" id="password" placeholder="Password" />
        </div>
        <select className="form-control" onChange={handleCourse}>
          <option>Course</option>
          <option>MCA</option>
          <option>BTech</option>
        </select>
        <select className="form-control" onChange={handleYear}>
          <option>Year</option>
          <option>1</option>
          <option>2</option>
          <option style={coursetemp=='MCA'?{display:'none'}:{}}>3</option>
          <option style={coursetemp=='MCA'?{display:'none'}:{}}>4</option>
        </select>
        <select style={coursetemp=='MCA'?{display:'none'}:{}} className="form-control" onChange={handleStream}>
          <option>Stream</option>
          <option>CSE</option>
          <option>ECE</option>
        </select>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="checkbox" />
          <label className="form-check-label" htmlFor="checkbox">Remember me</label>
        </div>
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
    //    <Link to='/home' ><button class="button button1">LOGIN</button></Link></div>
    //   <h1>STUDENT PORTAL</h1>
    //   <p><b>Quicker,Easier and more faster access!!
    //     This platform allows students to manage and keep tracks of their academics schedules.</b></p></div>
  )
}

export { Login };

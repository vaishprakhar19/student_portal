import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Home.css';

export default function Home(props) {
  return (
    <div id="home">
      <div class="jumbotron">
        <div class="container">
          <h1 class="display-3">Hello, {props.name.substring(0,props.name.indexOf(' '))}</h1>
          <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h2>Syllabus</h2>
            <FontAwesomeIcon icon="fa-solid fa-books" />
            <Link class="btn btn-secondary" to={'/syl' + props.course + props.year + props.stream} role="button">View Syllabus &raquo;</Link>
          </div>
          <div class="col-md-4">
            <h2>Time Table</h2>
            {/* <FontAwesomeIcon icon="fa-duotone fa-books" /> */}
            <Link class="btn btn-secondary" to={'/tt' + props.course + props.year + props.stream} role="button">View Time Table &raquo;</Link>
          </div>
          <div class="col-md-4">
            <h2>Mess Menu</h2>
            {/* <FontAwesomeIcon icon="fa-duotone fa-books" /> */}
            <Link class="btn btn-secondary" to='/messmenu' role="button">View Mess Menu &raquo;</Link>
          </div>
          <div class="col-md-4">
            <h2>Mess Timing</h2>
            {/* <FontAwesomeIcon icon="fa-duotone fa-books" /> */}
            <Link class="btn btn-secondary" to='/messtime' role="button">View Mess Timing &raquo;</Link>
          </div>
          <div class="col-md-4">
            <h2>Holidays</h2>
            <Link class="btn btn-secondary" to="/holidays" role="button">View Holidays &raquo;</Link>
          </div>
          <div class="col-md-4">
            <h2>Important Contacts</h2>
            <Link class="btn btn-secondary" to="/contacts" role="button">View Contacts &raquo;</Link>
          </div>
        </div>
      </div>

    </div>
  )
}

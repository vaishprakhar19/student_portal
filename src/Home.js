import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home(props) {
  return (
    <div>
      
      <h1>Home</h1>
      <div class="jumbotron">
        <div class="container">
          <h1 class="display-3">Hello, world!</h1>
          <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
          <Link class="btn btn-primary btn-lg" to="/home" role="button">Learn more &raquo;</Link>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h2>Syllabus</h2>
            <FontAwesomeIcon icon="fa-solid fa-books" />
            <Link class="btn btn-secondary" to={'/syl' + props.course + props.year + props.stream} role="button">View details &raquo;</Link>
          </div>
          <div class="col-md-4">
            <h2>Time Table</h2>
            {/* <FontAwesomeIcon icon="fa-duotone fa-books" /> */}
            <Link class="btn btn-secondary" to={'/tt' + props.course + props.year + props.stream} role="button">View details &raquo;</Link>
          </div>
          <div class="col-md-4">
            <h2>Mess Menu</h2>
            {/* <FontAwesomeIcon icon="fa-duotone fa-books" /> */}
            <Link class="btn btn-secondary" to={'/messmenu' + props.course + props.year + props.stream} role="button">View details &raquo;</Link>
          </div>
          <div class="col-md-4">
            <h2>Mess Timing</h2>
            {/* <FontAwesomeIcon icon="fa-duotone fa-books" /> */}
            <Link class="btn btn-secondary" to={'/messtime' + props.course + props.year + props.stream} role="button">View details &raquo;</Link>
          </div>
          <div class="col-md-4">
            <h2>Heading</h2>
            <Link class="btn btn-secondary" to="/home" role="button">View details &raquo;</Link>
          </div>
          <div class="col-md-4">
            <h2>Heading</h2>
            <Link class="btn btn-secondary" to="/home" role="button">View details &raquo;</Link>
          </div>
        </div>
        <hr/>

      </div>
      {/* <Link to='/login'>Login</Link>
      <Link to={'/syl' + props.course + props.year + props.stream}>Syllabus</Link> */}
    </div>
  )
}

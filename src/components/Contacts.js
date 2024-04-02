import React from 'react';
import './Contact.css';

export default function Contacts() {
  return (
    <div className="page">
      <div className='table-background'></div>
      <div className="contact-card">
        <div className="contact-card-details">
          <p className="contact-text-title">Contacts</p>
          <p className="contact-text-body">
            <h5>CHIEF HOSTEL WARDEN (BOYS)</h5>
            <ul>
              <li>DR.SANDESH TRIPATHI: +91 9415364502 </li>
              <li>MR.NEERAJ SINGH BISHT: +91 9415171251 </li>
              <li>MR.ABHAY KUMAR SHARMA: +91 9411199555</li>
            </ul>
            <h5>
              CHIEF HOSTEL WARDEN (GIRLS)
            </h5>
            <ul>
              <li>DR.SHILPI BISHT: +91 9458173450</li></ul>
            <h5> ADDITIONAL CONTACTS
            </h5>
            <ul>
              <li>GATE CONTACT NUMBER: +91 945811468
              </li>
              <li>REGISTRAR: +91 9412996069</li>
            </ul>
            <h5>EMAIL ID</h5>
            <ul><li>info@birlainstitute.co.in</li></ul>
          </p>


          <div className='fb-form'>
            <form action='https://formbold.com/s/oz8mY' method='POST' className='form-group'>
              <h2>Tell us what you think</h2>
              <input className='form-control' placeholder='Name' type='text' />
              <input className='form-control' placeholder='Email' type='text' />
              <textarea className='form-control' id='fb-comment' name='' placeholder='Tell us what you think'></textarea>
              <br />
              <input className='form-control btn btn-primary' type='submit' />
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import './About.css'
export function About() {
  return (
    <div id='about' className='page'>
      <div>
        <div className='about-intro'>
          <h2>About Us</h2>
          <p>EcoSavvy is developed by a team of 5 members pursuing undergraduate in computer science and engineering at Birla Institute of Applied Sciences. It is created with the motive to promote an innovative approach towards sustainability and sustainable development. We aim to:</p>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1583.6669095201187!2d79.55434014805883!3d29.35645515673876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a099dbdc0befa7%3A0xa08407c1dac1f3ac!2sBirla%20Institute%20of%20Applied%20Sciences%2C%20Bhimtal-263136%20(Uttarakhand)!5e0!3m2!1sen!2sin!4v1681580326265!5m2!1sen!2sin" width="500" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Map"></iframe>
      </div>
      <div className='about-bottom'>
        <h3>Reach out to us!</h3>
        <div id="about-icon-container">
          <div className='about-icon'><a href="https://www.facebook.com/" style={{ display: 'inline-block' }} rel='noreferrer'><FaFacebook></FaFacebook></a></div>
          <div className='about-icon'><a href="https://www.instagram.com/" style={{ display: 'inline-block' }} rel='noreferrer'><FaInstagram /></a></div>
          <div className='about-icon'><a href="https://twitter.com/home" style={{ display: 'inline-block' }} rel='noreferrer'><FaTwitter></FaTwitter></a></div>
          <div className='about-icon'><a href="https://in.linkedin.com/" style={{ display: 'inline-block' }} rel='noreferrer'><FaLinkedin></FaLinkedin></a></div>
          <div className='about-icon'><a href="https://mail.google.com/mail/" style={{ display: 'inline-block' }} rel='noreferrer'><FaMailBulk></FaMailBulk></a></div>
        </div>
      </div>
    </div>
  )
}


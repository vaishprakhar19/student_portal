import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import './About.css';

export function About() {
  return (
    <div className='page'>
          <div><a href="https://www.facebook.com/" style={{ display: 'inline-block' }} rel='noreferrer'><FaFacebook></FaFacebook></a></div>
          <div><a href="https://www.instagram.com/" style={{ display: 'inline-block' }} rel='noreferrer'><FaInstagram /></a></div>
          <div><a href="https://twitter.com/home" style={{ display: 'inline-block' }} rel='noreferrer'><FaTwitter></FaTwitter></a></div>
          <div><a href="https://in.linkedin.com/" style={{ display: 'inline-block' }} rel='noreferrer'><FaLinkedin></FaLinkedin></a></div>
          <div><a href="https://mail.google.com/mail/" style={{ display: 'inline-block' }} rel='noreferrer'><FaMailBulk></FaMailBulk></a></div>
    </div >
  )
}


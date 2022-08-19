import React from 'react';
import '../social_icons/style.css';
import {
 Col,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons';

function SocialIcons() {
  return (
         <Col sm={12} className="social-icons">
          <a href="https://www.facebook.com/Schu.fi.ma.fi" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="fb" icon={faFacebook} size="2x"/>
          </a>
          <a href="https://www.tiktok.com/@schufimafi.collective" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="tiktok" icon={faTiktok} size="2x"/>
          </a>
          <a href="https://www.instagram.com/schufimaficollective/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="insta" icon={faInstagram} size="2x"/>
          </a>
         </Col>
  );
}

export default SocialIcons;

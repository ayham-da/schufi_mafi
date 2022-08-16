import React from 'react';
import '../AboutMe/AboutMe.css';
import AboutUs from '../../components/AboutUs/AboutUs';
import {
  Row,
  Col,
} from 'react-bootstrap';
import Animate from 'react-smooth';
import {Helmet} from 'react-helmet';
import Team from "../../components/Team1/Team";

const AboutMe = () => {
  return (
      <div>
         <Helmet>
           <meta charSet="utf-8" />
           <title>SCHU FI MA FI</title>
           <link rel="canonical" href="#" />
           <meta name="description" content="SCHU FI MA FI" />
         </Helmet>
          <Animate to="1" from="0" attributeName="opacity">
          <div className="AboutUs-header">
            <Row className="AboutUS-main">
              <Col  sm={12} className="AboutUs">
                  <AboutUs />
              </Col>
              <Col className="AboutUsTeam">
                  <Team />
              </Col>
            </Row>
        </div>
          </Animate>

      </div>
    );
}

export default AboutMe;

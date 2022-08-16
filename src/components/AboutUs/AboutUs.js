import React from 'react';
import './style.css';
import {Row, Col, Image, Card} from 'react-bootstrap';
import aboutUs from "../../assets/img/aboutUs.jpg";
import SocialIcons from "../social_icons";



function AboutUs() {
  return (
    <div className="aboutUs">
      <Row className="aboutUs-main">
        <Col sm={12} className="aboutUs-main-top">
            <Image src={aboutUs} className="aboutUs-main-img" alt="Image of SCHU FI MA FI"/>
            <div className="socialIcons-footer" >
              <SocialIcons />
            </div>
        </Col>
        <Col className="aboutUs-main-body">
          <Card
              bg='light'
              text='dark'
              className="mb-2 home-aboutUs"
          >
            <Card.Body >
              <Card.Text className="aboutUs-body">
                Syrisches Kollektiv für den Austausch, Kommunikation, und die Interkulturalität.
              </Card.Text>
              <Card.Text className="aboutUs-body">
                مجموعة ثقافية سورية للتبادل والتواصل والتفاعل الثقافي.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </div>
  );
}

export default AboutUs;


//<Col  sm={12} className="aboutUs-img-top">
//           <Image src={aboutUs} className="aboutUs-main-img" alt="Image of aboutUs"/>
//         </Col>
//         <Col  sm={12}  className="aboutUs-top-info">
//           <div>
//             <h3>
//               <ReactTypingEffect
//                   text="Syrisches Kollektiv für den Austausch, Kommunikation, und die Interkulturalität."
//                   className="typical"
//                   speed="100"
//                   eraseDelay="500000"
//               />
//             </h3>
//             <h3>
//               <ReactTypingEffect
//                   text="مجموعة ثقافية سورية للتبادل والتواصل والتفاعل الثقافي"
//                   className="typical"
//                   speed="100"
//                   eraseDelay="510000"
//               />
//             </h3>
//           </div>
//         </Col>
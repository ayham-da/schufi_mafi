import React from 'react';
import './MyProjekt.css';
import Footer from '../../components/footer/footer';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import Animate from 'react-smooth';
import {Helmet} from 'react-helmet';
import ProjektItemList            from '../../components/MyProjekt/ProjektItemList'
import Layali from "../../assets/gallery/Layali.png"




const My_Projekt = [
    {
        id: 'p1',
        title: 'Layali',
        secondTitle:'Layali',
        ort:'düsseldorf',
        date:'20.07.2022',
        price:'8 €',
        TicketLink:'https://www.zakk.de/kontakt',
        description: 'Layali ist ein syrisches Café, das einmal im Monat stattfindet. Beim Layali erlebt man Geselligkeit, genießt syrische livemusik und kann seine Talente vor den anderen Gästen zeigen. ob es Musik, Literatur oder Comedy ist, beim Open Space in Layali die Bühne gehört euch.',
        imageUrl: Layali ,
    }
];


function MyProjekt() {
    const loadedPlaces = My_Projekt;
    return (
      <div>
         <Helmet>
                  <meta charSet="utf-8" />
                  <title>SCHU FI MA FI</title>
                  <link rel="canonical" href="#" />
                  <meta name="description" content="SCHU FI MA FI" />
         </Helmet>
          <Animate to="1" from="0" attributeName="opacity">
          <Container className="projekts-header" fluid={true}>
            <Row className="projekts-main">
              <Col  md={12}  className="projekts-main-List">
                  <ProjektItemList items={loadedPlaces} />
              </Col>
            </Row>
            <Row className="projekts-footer">
              <Footer />
            </Row>
        </Container>
        </Animate>
      </div>
    );
}

export default MyProjekt;

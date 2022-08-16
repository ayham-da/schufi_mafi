import React from 'react';
import './Home.css';
import {
    Card,
    Row,
    Col, Image,
} from 'react-bootstrap';
import Animate from 'react-smooth';
import {Helmet} from 'react-helmet';
import schufimafi from "../../assets/img/schufimafi.png";
import SocialIcons from "../../components/social_icons";

function Home() {
  return (
      <div>
         <Helmet>
                  <meta charSet="utf-8" />
                  <title>Home | SCHU FI MA FI</title>
                  <link rel="canonical" href="#" />
                  <meta name="description" content="SCHU FI MA FI| Künstler" />
         </Helmet>
          <Animate to="1" from="0" attributeName="opacity">
          <div className="App-home">
            <Row className="App-home-main">
              <Col sm={12} className="home-main-top">
                  <Image src={schufimafi} className="home-main-img" alt="Image of SCHU FI MA FI"/>
                  <div className="socialIcons-footer" >
                      <SocialIcons />
                  </div>
              </Col>
                <Col sm={12} className="home-main-body">
                    <Card
                        bg='light'
                        text='dark'
                        className="mb-2 home-description"
                    >
                        <Card.Body>
                            <Card.Title className="home-card-title">Schu Fi Ma Fi (Ar : Was geht ab?) </Card.Title>
                            <Card.Text>
                                ist ein syrisches kulturelle Kollektiv, das seit 2018 in der
                                Kulturszene in Deutschland aktiv ist. Wir streben eine offene und gesunde Gesellschaft an, der
                                auf Augenhöhe miteinander kommuniziert und sich austauscht.
                            </Card.Text>
                            <Card.Text>
                                Das Kollektiv gestaltet sein eigenes Kulturprogramm aus vielfältigen Bereichen wie Musik,
                                Literatur, Politik, Entertainment und Gesellschaft für das NRW Publikum im Schwerpunkt das
                                syrische Publikum.
                            </Card.Text>
                            <Card.Text>
                                Wir schaffen Räume für einen deutsch-syrisch Dialog sowie einen syrisch-syrisch Dialog, denn
                                solche Möglichkeiten für Austausch und Begegnung im demokratischen Rahmen in Syrien
                                waren unter dem Diktatur nicht möglich.
                            </Card.Text>
                            <Card.Text>
                                Die hier lebenden Syrer und Syrerinnen Perspektiven zu ermitteln, die eigene Stimme in der
                                Kulturszene zu erheben, sowie ein buntes Kulturprogramm hier zu lande zu präsentieren sind
                                einige unsere Ziele, die wir durch unsere ehrenamtliches Engagement und unsere Verständnis
                                für einen zusammenhaltenden Gesellschaft erreichen wollen.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
        </Animate>
      </div>
    );
}

export default Home;

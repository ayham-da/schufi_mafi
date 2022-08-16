import React from 'react';
import {Card, Image} from 'react-bootstrap'
import                        'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import                        './JornalistItem.css'
import {faExternalLink} from "@fortawesome/free-solid-svg-icons"


const JornalistItem = props => {


    return(
    <React.Fragment>
      <li className="Jornalist-item">
        <Card
            bg='light'
            text='dark'
            className="mb-2 home-description"
        >
          <Card.Body>
            <Image src={props.imageUrl} className="home-main-img" alt={props.imageAlt}/>
            <Card.Title className="home-card-title">{props.title}</Card.Title>
            <Card.Text>
              <div className="card-info">
                <p className="p-info">{props.date}, {props.ort}</p>
              </div>
              <div className="card-description">
                <p className="description">{props.description}</p>
              </div>
            </Card.Text>
          </Card.Body>
          <Card.Link href={props.articleUrl} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="externalLink" icon={faExternalLink} />
          </Card.Link>
        </Card>
    </li>
  </React.Fragment>
  )
};
export default JornalistItem;
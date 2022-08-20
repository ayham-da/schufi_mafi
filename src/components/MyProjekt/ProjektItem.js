import React from 'react';
import {Card, Button, Image} from 'react-bootstrap'
import                                    'bootstrap/dist/css/bootstrap.min.css';
import                                    './ProjektItem.css'


const ProjektItem = props => {

    return(
    <React.Fragment>
      <li className="event-item">
        <Card className="text-start mb-2 event-card" text="dark" bg='light'>
          <Card.Body>
          <Image src={props.image} className="home-main-img" alt={props.imageAlt}/>
          <Card.Title className="event-card-title">{props.title}</Card.Title>
          <Card.Text>
            <div className="card-info">
              <p className="p-info">{props.date}, {props.ort}</p>
            </div>
            <div className="">
              <h3 className="">{props.secondTitle}</h3>
            </div>
            <div className="card-description">
              <p className="description">{props.description}</p>
            </div>
          </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">
              <Button href={props.TicketLink} variant="success"  target='_blank'> Ticket kaufen {props.price}</Button>
          </Card.Footer>
        </Card>
    </li>
  </React.Fragment>
  )
};
export default ProjektItem;
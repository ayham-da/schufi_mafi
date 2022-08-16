import React from 'react';
import {Card,Button}                 from 'react-bootstrap'
import                                    'bootstrap/dist/css/bootstrap.min.css';
import                                    './ProjektItem.css'


const ProjektItem = props => {

    return(
    <React.Fragment>
      <li className="projekt-item">
        <Card className="projekt-item__content" text="dark">
          <Card.Img className="projekt-item__image" variant="top" src={props.image} alt={props.title} />
          <Card.Body >
            <div className="" >
              <div className="card-title">
                <h1>{props.title}</h1>
              </div>
              <div className="card-info">
                <p className="p-info">{props.date}, {props.ort}</p>
              </div>
              <div className="card-secondTitle">
                <h3 className="secondTitle">{props.secondTitle}</h3>
              </div>
              <div className="card-description">
                <p className="description">{props.description}</p>
              </div>
            </div>
          </Card.Body>
          <div className="projekt-item__actions">
            <Button href={props.TicketLink} variant="success"  target='_blank'> Ticket kaufen {props.price}</Button>
          </div>
        </Card>
    </li>
  </React.Fragment>
  )
};
export default ProjektItem;
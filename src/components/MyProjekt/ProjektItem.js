import React from 'react';
import {Card,Button}                 from 'react-bootstrap'
import                                    'bootstrap/dist/css/bootstrap.min.css';
import                                    './ProjektItem.css'


const ProjektItem = props => {

    return(
    <React.Fragment>
      <li className="projekt-item">
        <Card className="text-start" text="dark" >
          <Card.Img className="" variant="top" src={props.image} alt={props.title} />
          <Card.Body>
            <div className="" >
              <div className="">
                <h1>{props.title}</h1>
              </div>
              <div className="">
                <p className="">{props.date}, {props.ort}</p>
              </div>
              <div className="">
                <h3 className="">{props.secondTitle}</h3>
              </div>
              <div className="">
                <p className="">{props.description}</p>
              </div>
            </div>
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
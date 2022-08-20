import React           from 'react';
import ProjektItem       from './ProjektItem'
import {Card}          from 'react-bootstrap'
import                      'bootstrap/dist/css/bootstrap.min.css';
import                      './ProjektItemList.css'


const ProjektItemList = props => {
    if (props.items.length === 0){
        return ( 
        <>
        <div className="center">
        <Card text="light">
        <Card.Body>
           <Card.Text >
               {<h2>No Events found!!</h2>}
           </Card.Text>
           
           </Card.Body>    
       </Card>
        </div>
        </>
        );
    }else{
        return(
            <>
            <ul className="events-list">
                {props.items.map(event =>{
                    return(<>
                    <ProjektItem
                        key={event.id}
                        id={event.id}
                        date={event.date}
                        ort={event.ort}
                        price={event.price}
                        TicketLink={event.TicketLink}
                        image={event.imageUrl}
                        title={event.title}
                        secondTitle={event.secondTitle}
                        description={event.description}
                        creatorId={event.creator}
                        
                    />
                    </>
                    )
                    
                })}
            </ul>
            </>
        )
       }
};
export default ProjektItemList;
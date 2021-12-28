import React from 'react';

import './styles/Quote.css';
import {Card, Button, ListGroup, ListGroupItem} from 'react-bootstrap';

const Quote = ({quote}) => {
    return (
      <Card className="text-center" key={quote.id} style={{ width: '5rem' }}>
      <Card.Img variant="top" src={quote.picture} />
      <Card.Body>
        <Card.Title>{quote.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{quote.state}</Card.Subtitle>
        <Card.Text>
        {quote.description}
        </Card.Text>
        
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>{quote.price} EUR</ListGroupItem>
        </ListGroup>
        <Card.Body><Button variant="primary">View</Button></Card.Body>
    </Card>
      );
};

export default Quote;
import './Search.css';
import Data from "./mock-data.json";
import {Container, Row, Card, Button, ListGroup, ListGroupItem} from 'react-bootstrap';
import {useState} from "react";
import React, {Component} from 'react';
import axios from './axios';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
        Products: []
    };
}

getUsersData() {
  axios
      .get(`/products`, {})
      .then(res => {
          const data = res.data
          console.log(data)

          const products = data.map(post =>
              <Card className="text-center" key={post.id} style={{ width: '5rem' }}>
              <Card.Img variant="top" src={post.picture} />
              <Card.Body>
                <Card.Title>{post.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{post.state}</Card.Subtitle>
                <Card.Text>
                {post.description}
                </Card.Text>
                
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>{post.price} EUR</ListGroupItem>
                </ListGroup>
                <Card.Body><Button variant="primary">View</Button></Card.Body>
            </Card>
            )
            
            this.setState({products})

      })
      .catch((error) => {
          console.log(error)
      })

}

componentDidMount(){
  this.getUsersData()
}

render() {
    return (
       <div className="search-panel">
          <input placeholder="Enter Post title" onChange={event => this.setState.search(event.target.value)} />
          <Container>
        <Row xs={2} sm={3} md={5}>
          {this.state.products}
        </Row>
      </Container>
      </div>
    );
  }

}
  // const getAllProducts = () => {
  //   axios.get(`${productsURL}products`)
  //   .then((response) => {
  //     const allProducts = response.data.query.allProducts;
  //   })
  //   .catch(error => console.error(`Error: ${error}`));
  // }


//     const [query, setQuery] = useState("")
//     return (
// <div className="search-panel">
// <input placeholder="Enter Post title" onChange={event => setQuery(event.target.value)} />
// <Container>
//     <Row xs={2} md={4}>
// {
//     Data.filter(post => {
//         if (query === '') {
//           return post;
//         } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
//           return post;
//         }
//       }).map((post) => (
      
  //   <Card key={post.id} style={{ width: '7rem' }}>
  //   <Card.Img variant="top" src="holder.js/100px180" />
  //   <Card.Body>
  //     <Card.Title>{post.title}</Card.Title>
  //     <Card.Text>
  //     {post.author}
  //     </Card.Text>
  //     <Button variant="primary">View</Button>
  //   </Card.Body>
  // </Card>
//   ))
// }
// </Row>
// </Container>
// </div>
//     );
    

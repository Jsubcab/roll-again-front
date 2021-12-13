import './Search.css';
import Data from "./mock-data.json";
import {Container, Row, Card, Button} from 'react-bootstrap';
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

          const products = data.map(u =>
            <div key={u.id}>
            <p>{u.id}</p>
            <p>{u.name}</p>
            <p>{u.description}</p>
            <p>{u.state}</p>
            </div>
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
      <div>
        {this.state.products}
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
      
//     <Card key={post.id} style={{ width: '7rem' }}>
//     <Card.Img variant="top" src="holder.js/100px180" />
//     <Card.Body>
//       <Card.Title>{post.title}</Card.Title>
//       <Card.Text>
//       {post.author}
//       </Card.Text>
//       <Button variant="primary">View</Button>
//     </Card.Body>
//   </Card>
//   ))
// }
// </Row>
// </Container>
// </div>
//     );
    

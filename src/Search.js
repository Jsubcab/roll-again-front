import './Search.css';
import Data from "./mock-data.json";
import {Container, Row, Card, Button} from 'react-bootstrap';
import {useState} from "react";


function Search() {
    const [query, setQuery] = useState("")
    return (
<div className="search-panel">
<input placeholder="Enter Post title" onChange={event => setQuery(event.target.value)} />
<Container>
    <Row xs={2} md={4}>
{
    Data.filter(post => {
        if (query === '') {
          return post;
        } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
          return post;
        }
      }).map((post) => (
      
    <Card key={post.id} style={{ width: '7rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>{post.title}</Card.Title>
      <Card.Text>
      {post.author}
      </Card.Text>
      <Button variant="primary">View</Button>
    </Card.Body>
  </Card>
  ))
}
</Row>
</Container>
</div>
    );
    
}

export default Search;
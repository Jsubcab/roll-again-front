import { useState } from 'react';
import Search from './SearchBar';
import {Card, Button, CardGroup, Row} from 'react-bootstrap';
import "../../styles/Search.css";

const filterPosts = (posts, query) => {
    if (!query) {
        return posts;
    }

    return posts.filter((post) => {
        const postName = post.name.toLowerCase();
        return postName.includes(query);
    });
};


export default function SearchCosa(products) {
    
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');    
    const filteredPosts = filterPosts(products.props, searchQuery);

    return (
        <div>
            <div className="search-bar">
            <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            </div>
            
                <Row xs={2} md={3} className="search-row">
                <CardGroup>
                    {filteredPosts.map(product =>
                    <Card style={{ width: '12rem' }} key={product.id}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                        {product.description}
               
                        </Card.Text>
                        <Button variant="primary">View</Button>
                    </Card.Body>
                    <Card.Footer>
                        { <small className="text-muted">Seller: {product.user.username}</small>}
                    </Card.Footer>
                    </Card>
                    )}
                </CardGroup>
                </Row>
        </div>
    );
}
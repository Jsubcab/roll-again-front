import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import "../../styles/AddProduct.css";



export default function AddProduct({setProduct}) {

    async function insertProduct(credentials) {
        return fetch('http://localhost:8080/api/products', {
          method: 'POST',
          body: new URLSearchParams({
            'name': credentials.title,
            'description': credentials.description,
            'picture': credentials.picture,
            'userId': credentials.userId,
            'price': credentials.price
          })
        })
          .then(data => data.json())
       }

    const [categories, setCategories] = useState();
    const [userId, setUserId] = useState();

    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [picture, setPicture] = useState();
    const [description, setDescription] = useState();

    useEffect(() => {

        getData();
    async function getData() {
        const response = await fetch("http://localhost:8080/api/categories");
        const data = await response.json(); 
        setCategories(data);
      }
    
    }, []); 
    
    const handleSubmit = async e => {
        e.preventDefault();
        const result = JSON.parse(localStorage.getItem('token'));
        setUserId(result.id);
        const product = await insertProduct({
            title,
            description,
            picture,
            userId,
            price
        });
        setProduct(product);
    }

return (
    <div className="wrapper">
    <Form className="form-add-product" onSubmit={handleSubmit}>
    <h3 className="add-product-title">What are you going to sell?</h3>
    <Form.Group className="form-group-info">
    
        <Form.Control type="text" placeholder="Title (I'm selling this product..)" onChange={e => setTitle(e.target.value)}/>

        <Form.Control type="text" placeholder="Price (9.99)" onChange={e => setPrice(e.target.value)}/>

    { categories && (

        <Form.Select className="add-product-categories" aria-label="Categories">
        <option>Choose a category...</option>
        {categories.map((category, index) => (
                <option key={index} value={index}>{category.category}</option>
            ))}
        </Form.Select>
    )}
        <Form.Control type="text" placeholder="Link image (http://www...)" onChange={e => setPicture(e.target.value)} />

        <Form.Control className="add-product-description" as="textarea" placeholder="Description of the product..." onChange={e => setDescription(e.target.value)}/>
        <input type="submit" className="fadeIn fourth" value="Add Product"/>
    </Form.Group>
    </Form>
</div>
);
}
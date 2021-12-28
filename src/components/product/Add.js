import Form from 'react-bootstrap/Form';
import "../../styles/AddProduct.css";

function addProduct() {
return (
    <div className="wrapper">
    <Form className="form-add-product">
    <h3 className="add-product-title">What are you going to sell?</h3>
    <Form.Group className="mb-3" className="form-group-info">
    
        <Form.Control type="text" placeholder="Title (I'm selling this product..)" />

        <Form.Control type="text" placeholder="Price (9.99)" />

        <Form.Select className="add-product-categories" aria-label="Categories">
            <option>Choose a category...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </Form.Select>

        <Form.Control type="text" placeholder="Link image (http://www...)" />

        <Form.Control className="add-product-description" as="textarea" placeholder="Description of the product..."/>
    </Form.Group>
    </Form>
</div>
);
}

export default addProduct;
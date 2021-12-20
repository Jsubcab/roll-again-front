import logo from '../images/logo_dice.svg';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../styles/Navbar.css';

function NavbarWeb() {
    return (
<Navbar collapseOnSelect expand="lg" variant="light" bg="light">
  <Container>
  <Navbar.Brand><img src={logo} className="Roll-again-logo" alt="logo" /> Roll again</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
    <Nav>
      <Nav.Link to="/" activeStyle>Home</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link to='/login' activeStyle>Login</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
}

export default NavbarWeb;
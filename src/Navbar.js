import logo from './logo_dice.svg';
import { Container, Navbar, Nav} from 'react-bootstrap';
import './Navbar.css';

function NavbarWeb() {
    return (
<Navbar collapseOnSelect expand="lg" variant="light" bg="light">
  <Container>
  <Navbar.Brand><img src={logo} className="Roll-again-logo" alt="logo" /> Roll again</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
    <Nav>
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#items">Items</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#login">Login</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
}

export default NavbarWeb;
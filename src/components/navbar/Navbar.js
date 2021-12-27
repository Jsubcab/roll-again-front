import logo from '../../images/logo_dice.svg';
import { Container, Navbar, Nav } from 'react-bootstrap';
import '../../styles/Navbar.css';

const NavbarWeb = (props) => {
console.log(props);
    return (
<Navbar collapseOnSelect expand="lg" variant="light" bg="light">
  <Container>
  <Navbar.Brand><img src={logo} className="Roll-again-logo" alt="logo" /> Roll again</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
    <Nav>
      <Nav.Link href="/" activeStyle>Home</Nav.Link>

      {props.isLoggedIn ? (
        <Nav>
        <Nav.Link className='profile' href='/profile'>Profile</Nav.Link>
        <Nav.Link className='logout' href='/' onClick={props.logout()} >Logout</Nav.Link>
        </Nav>
      ) : (
      <Nav.Link href='/login' activeStyle>Login</Nav.Link>
      )}

    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
}

export default NavbarWeb;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container style = {{display: "flex", justifyContent: "center"}}>
        <h1 style = {{color: "white"}}>Book Tracker</h1>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
}

export default BasicExample;
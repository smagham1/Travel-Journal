import './App.css';
import Header from './MainComponents/Header'
import { GiEarthAfricaEurope } from 'react-icons/gi';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <GiEarthAfricaEurope
            alt=""
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          Travel Journal
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#new">Newest</Nav.Link>
            <Nav.Link href="#countries">Country List</Nav.Link>
            <NavDropdown title="Get Social" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Facebook</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Instagram
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Twitter</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Email Here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#best">Top Photos</Nav.Link>
            <Nav.Link eventKey={2} href="#random">
              Random Photos
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Header />
    </div>
  );
}

export default App;

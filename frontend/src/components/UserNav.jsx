import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../assets/css/user.css";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faMoon } from "@fortawesome/free-regular-svg-icons";

function UserNav() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary usernavbar"
    >
      <Navbar.Brand href="#home" className="mobhide">
        <div className="mobbrand">
          <Link to={"/"}>
            Health<span className="mobbrandstyle">ON</span>
          </Link>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Form className="">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <NavDropdown title="Theme" id="collapsible-nav-dropdown-theme">
            <NavDropdown.Item href="#theme/3.1"><FontAwesomeIcon className="me-2" icon={faLightbulb} />Light</NavDropdown.Item>
            <NavDropdown.Item href="#theme/3.1"><FontAwesomeIcon className="me-2" icon={faMoon} />Dark</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default UserNav;

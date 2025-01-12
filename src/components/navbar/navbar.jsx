import React from "react";
import { Navbar, Nav, Form, FormControl, InputGroup, Button, Dropdown } from "react-bootstrap";
import "./navbar.css";


const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="navbar shadow-sm fixed-top">
      <Navbar.Brand href="#home">Logo</Navbar.Brand>

      {/* Search Bar */}
      <Form className="d-flex mx-auto" style={{ width: "50%" }}>
        <InputGroup>
          <FormControl
            type="search"
            placeholder="search"
            aria-label="Search"
            className="border-end-0"
          />
          <Button variant="outline-secondary" className="border-start-0">
            <i className="bi bi-search"></i>
          </Button>
        </InputGroup>
      </Form>

      {/* Right Section */}
      <Nav className="ms-auto align-items-center">
        {/* Message Icon */}
        <Nav.Link href="#messages" className="position-relative">
          <i className="bi bi-chat-dots" style={{ fontSize: "1.5rem" }}></i>
          <span className="badge bg-purple notification-badge">6</span>
        </Nav.Link>

        {/* Notification Icon */}
        <Nav.Link href="#notifications" className="position-relative">
          <i className="bi bi-bell" style={{ fontSize: "1.5rem" }}></i>
          <span className="badge bg-purple notification-badge">8</span>
        </Nav.Link>

        {/* Profile Section */}
        <Nav.Link href="#profile" className="d-flex align-items-center">
          <div className="d-flex align-items-center">
            <span className="me-2">Jessica Doe</span>
            <img
              src="{avatar}"
              alt="profile"
              className="rounded-circle"
              style={{ width: "30px", height: "30px" }}
            />
          </div>
        </Nav.Link>

        {/* Language Dropdown */}
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-language" className="d-flex align-items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/32px-Flag_of_Germany.svg.png"
              alt="language"
              style={{ width: "20px", height: "15px", marginRight: "8px" }}
            />
            <span>DE</span>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#german" className="d-flex align-items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/32px-Flag_of_Germany.svg.png"
                alt="German"
                style={{ width: "20px", height: "15px", marginRight: "8px" }}
              />
              German
            </Dropdown.Item>
            <Dropdown.Item href="#english" className="d-flex align-items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/32px-Flag_of_the_United_States.svg.png"
                alt="English"
                style={{ width: "20px", height: "15px", marginRight: "8px" }}
              />
              English
            </Dropdown.Item>
            <Dropdown.Item href="#spanish" className="d-flex align-items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/32px-Flag_of_Spain.svg.png"
                alt="Spanish"
                style={{ width: "20px", height: "15px", marginRight: "8px" }}
              />
              Español
            </Dropdown.Item>
            <Dropdown.Item href="#arabic" className="d-flex align-items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Flag_of_Saudi_Arabia.svg/32px-Flag_of_Saudi_Arabia.svg.png"
                alt="Arabic"
                style={{ width: "20px", height: "15px", marginRight: "8px" }}
              />
              العربية
            </Dropdown.Item>
            <Dropdown.Item href="#greek" className="d-flex align-items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/32px-Flag_of_Greece.svg.png"
                alt="Greek"
                style={{ width: "20px", height: "15px", marginRight: "8px" }}
              />
              Ελληνικά
            </Dropdown.Item>
            <Dropdown.Item href="#russian" className="d-flex align-items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/32px-Flag_of_Russia.svg.png"
                alt="Russian"
                style={{ width: "20px", height: "15px", marginRight: "8px" }}
              />
              Русский
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    </Navbar>
  );
};

export default CustomNavbar;

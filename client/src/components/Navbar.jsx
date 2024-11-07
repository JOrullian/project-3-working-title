import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

import Auth from "..utils/auth";

const AppNavbar = () => {
  return (
    <>
      <Navbar>
        <Container>
          <Nav>
            <Nav.Link as={Link} to="/">
              {/* Add home icon here */}
            </Nav.Link>
            <Nav.Link as={Link} to="/profile">
              {/* Add profile icon here */}
            </Nav.Link>
            <Nav.Link as={Link} to="/chat">
              {/* Add chat icon here */}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavbar;
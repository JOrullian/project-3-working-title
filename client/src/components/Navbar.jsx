import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import HomeIcon from '../assets/home-icon.svg';
import ProfileIcon from '../assets/profile-icon.svg';
import ChatIcon from '../assets/chat-icon.svg';
import ExploreIcon from '../assets/explore-icon.svg';

const AppNavbar = () => {
  return (
    <>
      <Navbar className='navbar'>
        <Container className='nav-container'>
          <Nav className="navbar-selections">
            <Nav.Link as={Link} to="/">
              <img className='nav-icon' src={HomeIcon}/>
            </Nav.Link>
            <Nav.Link as={Link} to="/explore">
              <img className='nav-icon' src={ExploreIcon}/>
            </Nav.Link>
            <Nav.Link as={Link} to="/chat">
              <img className='nav-icon' src={ChatIcon}/>
            </Nav.Link>
            <Nav.Link as={Link} to="/profile">
              <img className='nav-icon' src={ProfileIcon}/>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavbar;
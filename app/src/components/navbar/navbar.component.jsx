import './navbar.styles.css';
import { navbarItems } from './navbar-items';

import React from 'react';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';

class NavBar extends React.Component {

  render() {
    return(
      <div className="navbar-div">
        <Navbar bg='dark' variant='dark' expand='lg' fixed='top'>
          <Container fluid>
            <Navbar.Brand>r/neoliberal pings</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className='me-auto'>

                <NavDropdown 
                  title='Special' 
                  id='basic-nav-dropdown'
                  menuVariant='dark'
                >
                  { navbarItems.special.map( (i) => <NavDropdown.Item key={i}>{i}</NavDropdown.Item> ) }
                </NavDropdown>             

                <NavDropdown 
                  title='International' 
                  id='basic-nav-dropdown'
                  menuVariant='dark'
                >
                  { navbarItems.itl.map( (i) => <NavDropdown.Item key={i}>{i}</NavDropdown.Item> ) }
                </NavDropdown>

                <NavDropdown 
                  title='United States' 
                  id='basic-nav-dropdown'
                  menuVariant='dark'
                >
                  { navbarItems.usa.map( (i) => <NavDropdown.Item key={i}>{i}</NavDropdown.Item> ) }
                </NavDropdown>

                <NavDropdown 
                  title='Interests & Fun' 
                  id='basic-nav-dropdown'
                  menuVariant='dark'
                >
                  { navbarItems.fun.map( (i) => <NavDropdown.Item key={i}>{i}</NavDropdown.Item> ) }             
                </NavDropdown>

                <NavDropdown
                  title='Academia & Work' 
                  id='basic-nav-dropdown'
                  menuVariant='dark'
                >
                  { navbarItems.academia.map( (i) => <NavDropdown.Item key={i}>{i}</NavDropdown.Item> ) }             
                </NavDropdown>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export { NavBar };
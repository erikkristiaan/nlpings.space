import './navbar.styles.css';
import getItems from './navbar-items';

import React from 'react';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';

class NavBar extends React.Component {

  render() {

    const navItems = getItems();

    return(
      <div>
        <Navbar bg='light' expand='lg'>
          <Container>
            {/* <Navbar.Brand>
              <h1>r/neoliberal pings</h1>
            </Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className='me-auto'>

                <NavDropdown 
                  title='Special' 
                  id='basic-nav-dropdown'
                >
                  { navItems.special.map( (i) => <NavDropdown.Item>{i}</NavDropdown.Item> ) }
                </NavDropdown>             

                <NavDropdown 
                  title='International' 
                  id='basic-nav-dropdown'
                >
                  { navItems.itl.map( (i) => <NavDropdown.Item>{i}</NavDropdown.Item> ) }
                </NavDropdown>

                <NavDropdown 
                  title='United States' 
                  id='basic-nav-dropdown'
                >
                  { navItems.usa.map( (i) => <NavDropdown.Item>{i}</NavDropdown.Item> ) }
                </NavDropdown>

                <NavDropdown 
                  title='Interests & Fun' 
                  id='basic-nav-dropdown'
                >
                  { navItems.fun.map( (i) => <NavDropdown.Item>{i}</NavDropdown.Item> ) }             
                </NavDropdown>

                <NavDropdown
                  title='Academia & Work' 
                  id='basic-nav-dropdown'
                >
                  { navItems.academia.map( (i) => <NavDropdown.Item>{i}</NavDropdown.Item> ) }             
                </NavDropdown>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export {NavBar};
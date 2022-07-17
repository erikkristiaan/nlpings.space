import './navbar.styles.css';
import { Search } from './search/search.component';
import { NavBarItems } from './navbar-items/navbar-items.component';
import { navDropdownOptions } from './nav-dropdown-options';

import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';

interface DropdownOptionInterface {
  title: string;
  arrayToFetch: string;
}

const NavBar = () => {
  return (
    <div className='navbar-div'>
      <Navbar bg='dark' variant='dark' expand='xxl' fixed='top'>
        <Container fluid>
          <Navbar.Brand as={Link} to={'/'}>
            r/neoliberal
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto' navbarScroll>
              {navDropdownOptions.map(
                (dropdownOption: DropdownOptionInterface) => {
                  const { title, arrayToFetch } = dropdownOption;

                  return (
                    <NavDropdown
                      title={title}
                      id='basic-nav-dropdown'
                      menuVariant='dark'
                      key={title}
                    >
                      <NavBarItems arrayToFetch={arrayToFetch} />
                    </NavDropdown>
                  );
                }
              )}
            </Nav>
            <Search />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export { NavBar };

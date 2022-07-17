import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { NavbarInterface, navbarItems } from './navbar-items';

const NavBarItems = ({ arrayToFetch }: {[key: string]: string}) => {
  return (
    <>
      {navbarItems[arrayToFetch as keyof NavbarInterface].map(
        (item) => (
          <NavDropdown.Item as={Link} to={`/pinggroup/${item}`} key={item}>
            {item}
          </NavDropdown.Item>
        )
      )}
    </>
  );
};

export { NavBarItems };

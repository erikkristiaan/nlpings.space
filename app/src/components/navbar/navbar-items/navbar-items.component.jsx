import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { navbarItems } from './navbar-items';

export default function NavBarItems({ arrayToFetch }) {
  return navbarItems[arrayToFetch].map((item) => (
    <NavDropdown.Item as={Link} to={`/pinggroup/${item}`} key={item}>
      {item}
    </NavDropdown.Item>
  ));
}
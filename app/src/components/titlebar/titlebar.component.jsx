import './titlebar.styles.css';

import React from 'react';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';

class TitleBar extends React.Component {

  render() {
    return(
      <div>
        <Navbar className="title-bar">
          <Container>

          </Container>
        </Navbar>
      </div>
    );
  }
}

export { TitleBar };
import './navbar.styles.css';
import { navbarItems } from './navbar-items';

import React from 'react';
import { Nav, Navbar, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

import { Link, NavLink, Redirect, useHistory, withRouter } from 'react-router-dom'

class NavBar extends React.Component {
  constructor() {
    super();

    this.state = {
      query: '',
    }
  }

  setQuery = (event) => {
    this.setState({query: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.query);
    this.props.history.push({
        pathname: "/search",
        search: `?q=${this.state.query}`,
        // state: { referrer: '' }
    });
  }

  render() {
    return(
      <div className="navbar-div">
        <Navbar bg='dark' variant='dark' expand='lg' fixed='top'>
          <Container fluid>
            <Navbar.Brand as={Link} to={'/'} >r/neoliberal pings</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className='me-auto' navbarScroll>

                <NavDropdown 
                  title='Special' 
                  id='basic-nav-dropdown'
                  menuVariant='dark'
                >
                  { navbarItems.special.map( (i) => <NavDropdown.Item as={Link} to={`/pinggroup/${i}`} key={i}>{i}</NavDropdown.Item>) }
                </NavDropdown>             

                <NavDropdown 
                  title='International' 
                  id='basic-nav-dropdown'
                  menuVariant='dark'
                >
                  { navbarItems.itl.map( (i) => <NavDropdown.Item as={Link} to={`/pinggroup/${i}`} key={i}>{i}</NavDropdown.Item>) }
                </NavDropdown>

                <NavDropdown 
                  title='United States' 
                  id='basic-nav-dropdown'
                  menuVariant='dark'
                >
                  { navbarItems.usa.map( (i) => <NavDropdown.Item as={Link} to={`/pinggroup/${i}`} key={i}>{i}</NavDropdown.Item>) }
                </NavDropdown>

                <NavDropdown 
                  title='Fun' 
                  id='basic-nav-dropdown'
                  menuVariant='dark'
                >
                  { navbarItems.fun.map( (i) => <NavDropdown.Item as={Link} to={`/pinggroup/${i}`} key={i}>{i}</NavDropdown.Item>) }             
                </NavDropdown>

                <NavDropdown 
                  title='Media' 
                  id='basic-nav-dropdown'
                  menuVariant='dark'
                >
                  { navbarItems.media.map( (i) => <NavDropdown.Item as={Link} to={`/pinggroup/${i}`} key={i}>{i}</NavDropdown.Item>) }             
                </NavDropdown>               

                <NavDropdown 
                  title='Games' 
                  id='basic-nav-dropdown'
                  menuVariant='dark'
                >
                  { navbarItems.games.map( (i) => <NavDropdown.Item as={Link} to={`/pinggroup/${i}`} key={i}>{i}</NavDropdown.Item>) }             
                </NavDropdown>

                <NavDropdown 
                  title='Online' 
                  id='basic-nav-dropdown'
                  menuVariant='dark'
                >
                  { navbarItems.online.map( (i) => <NavDropdown.Item as={Link} to={`/pinggroup/${i}`} key={i}>{i}</NavDropdown.Item>) }             
                </NavDropdown>

                <NavDropdown 
                  title='Health' 
                  id='basic-nav-dropdown'
                  menuVariant='dark'
                >
                  { navbarItems.health.map( (i) => <NavDropdown.Item as={Link} to={`/pinggroup/${i}`} key={i}>{i}</NavDropdown.Item>) }             
                </NavDropdown>

                <NavDropdown 
                  title='Demographics' 
                  id='basic-nav-dropdown'
                  menuVariant='dark'
                >
                  { navbarItems.demographics.map( (i) => <NavDropdown.Item as={Link} to={`/pinggroup/${i}`} key={i}>{i}</NavDropdown.Item>) }             
                </NavDropdown>

                <NavDropdown
                  title='Academia & Work' 
                  id='basic-nav-dropdown'
                  menuVariant='dark'
                >
                  { navbarItems.academia.map( (i) => <NavDropdown.Item as={Link} to={`/pinggroup/${i}`} key={i}>{i}</NavDropdown.Item>) }             
                </NavDropdown>

              </Nav>
              <Form className="d-flex" onSubmit={(event) => this.handleSubmit(event)}>
                <FormControl
                  // type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={this.setQuery}
                />
                <Button variant="outline-success" onClick={this.handleSubmit}>Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(NavBar);
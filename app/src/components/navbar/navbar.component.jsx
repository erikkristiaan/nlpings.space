import './navbar.styles.css';
import { navbarItems } from './navbar-items';

import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import { Nav, Navbar, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

class NavBar extends React.Component {
  constructor() {
    super();

    this.state = {
      query: '',
    }
  }

  // Set Query to whatever is in currently in the search box.
  setQuery = (event) => {
    this.setState({query: event.target.value})
  }

  // refresh the page with our query only if query is not empty
  handleSubmit = (event) => {
    const { query } = this.state;
    event.preventDefault();   // block default submission handling
    if (query) {               
      this.props.history.push({
        pathname: "/search",
        search: `?q=${query}`,
      });
    };
  }

  render() {
    return(
      <div className="navbar-div">

        <Navbar bg='dark' variant='dark' expand='xxl' fixed='top'>
          <Container fluid>
            <Navbar.Brand as={Link} to={'/'} >r/neoliberal</Navbar.Brand>
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
                  title='Politics' 
                  id='basic-nav-dropdown'
                  menuVariant='dark'
                >
                  { navbarItems.politics.map( (i) => <NavDropdown.Item as={Link} to={`/pinggroup/${i}`} key={i}>{i}</NavDropdown.Item>) }
                </NavDropdown>                

                <NavDropdown 
                  title='News' 
                  id='basic-nav-dropdown'
                  menuVariant='dark'
                >
                  { navbarItems.news.map( (i) => <NavDropdown.Item as={Link} to={`/pinggroup/${i}`} key={i}>{i}</NavDropdown.Item>) }
                </NavDropdown>    

                <NavDropdown 
                  title='Sports' 
                  id='basic-nav-dropdown'
                  menuVariant='dark'
                >
                  { navbarItems.sports.map( (i) => <NavDropdown.Item as={Link} to={`/pinggroup/${i}`} key={i}>{i}</NavDropdown.Item>) }
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
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={this.setQuery}
                />
                <Button variant="outline-success" onClick={(event) => this.handleSubmit(event)}>Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        
      </div>
    );
  }
}

export default withRouter(NavBar);
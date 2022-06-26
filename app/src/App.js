import './components/spinner/spinner.styles.css';
import NavBar from './components/navbar/navbar.component';
import PostsContainer from './components/posts container/posts-container.component';

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Main app component
class App extends React.Component {
  render() {
    return (
      <Router forceRefresh={true}>
        <div className='App'>
          <NavBar />

          <Switch>
            <Route path="/pinggroup/:pingId" component={props => 
              <PostsContainer id={props.match.params.pingId} />
            }/>
            <Route path="/search" component={props => 
              <PostsContainer id={'search'} query={props.match.params.pingId}/>
            }/>
            <Route path="/">
              <PostsContainer id={'main'} />
            </Route>
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;

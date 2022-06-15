import './App.css';
import './components/spinner/spinner.styles.css';

import React from 'react';

import { NavBar } from './components/navbar/navbar.component';
import PostsContainer from './components/posts container/posts-container.component';


// Main app component
class App extends React.Component {
  render() {
    // const iconTable = getIconTable();
    return (
      <div className='App'>
        <NavBar />
        <PostsContainer />
      </div>
    );
  }
}

export default App;

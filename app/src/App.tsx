import './components/spinner/spinner.styles.css';

import { NavBar } from './components/navbar/navbar.component';

import { PostsContainer } from './components/posts container/posts-container.component';
import { FourOhFour } from './components/404/404.component';

import React from 'react';
import { Routes, Route } from "react-router-dom";

// Main app component
export default function App () {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route 
          path="/"
          element={ <PostsContainer /> }
        />
        <Route 
          path="/pinggroup/:pingId" 
          element={ <PostsContainer /> }
        />
        <Route 
          path="/search" 
          element={ <PostsContainer /> }
        />
        <Route 
          path="*"
          element={ <FourOhFour /> }
        />
      </Routes>
    </div>
  );
}
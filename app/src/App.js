import './App.css';
import getIconTable from './iconTable';

import InfiniteScroll from 'react-infinite-scroll-component';
import React from 'react';

import { PostCard } from './components/postcard/postcard.component';
import { Container } from 'react-bootstrap';

// Main app component
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pings: [],
      isFetched: false,
    }
  }

  // getIconTable = () => {
  //   const iconTable = {

  //     "METAL": "fa-music",
  //     "FURRY": "fa-paw",
  //     "DOG": "fa-dog",
  //     "MOVIES": "fa-clapperboard",
  //     "TRAVEL": "fa-map-location-dot",
  //     "ALPHABET-MAFIA": "fa-rainbow",
  //     "GAMING": "fa-gamepad",
  //     "FITNESS": "fa-person-running",
  //     "DYEL": "fa-dumbbell",
  //     "PHOTO": "fa-camera",
  //     "MAMADAS": "fa-earth-americas",
  //     "CAN": "fa-earth-americas",
  //     "USA-OR": "fa-flag-usa",
  //   };
  //   return iconTable;
  // }

  componentDidMount() {
    fetch('http://localhost:3001/api/pings/main/1')
      .then(response => response.json())
      .then(data => {
        this.setState( () => { return { pings: data, isFetched: true}})
      });
  }

  render() {
    const { pings, isFetched } = this.state;
    const iconTable = getIconTable();
    return (
      <div className="App">
        <Container>
          <h1 className="title">r/Neoliberal Pings</h1>
          <div>
            { isFetched 
                 ? pings.map((ping, index) => <PostCard key={index} ping={ping} icon={iconTable}/>) 
                 : 'Loading...' }
          </div>
        </Container>
      </div>
    );
  }
}

export default App;

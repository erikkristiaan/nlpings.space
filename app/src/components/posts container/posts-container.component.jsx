import './posts-container.styles.css'
import '../spinner/spinner.styles.css';
import { iconTable } from './iconTable';

import InfiniteScroll from 'react-infinite-scroll-component';
import React from 'react';

import { PostCard } from '../postcard/postcard.component';
import { Container } from 'react-bootstrap';


class PostsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      pings: [],
      isFetched: false,
      pageNum: 0,
    }
  }

  componentDidMount() {
    fetch(`http://localhost:3001/api/pings/main/${this.state.pageNum}`)
      .then(response => response.json())
      .then(data => {
        this.setState( () => { return { pings: data, isFetched: true, pageNum: this.state.pageNum + 1}})
      });
  }

  fetchMoreData = () => {
    fetch(`http://localhost:3001/api/pings/main/${this.state.pageNum}`)
      .then(response => response.json())
      .then(data => {
        let oldPings = this.state.pings;
        setTimeout( () => {
          this.setState( () => { return { pings: oldPings.concat(data), isFetched: true, pageNum: this.state.pageNum + 1}})
        }, 1200); // <- Add 1200 to simulate page loads
      });
  }

  render() {
    const { pings, isFetched } = this.state;

    return(
      <Container className='PostsContainer'>
        <InfiniteScroll
          dataLength={pings.length}
          hasMore={true}
          next={this.fetchMoreData}
          loader={<span className='loader' />}
          scrollThreshold={0.9}
          style={{overflow: 'visible'}}
        >
          <div>
            { isFetched 
                ? pings.map((ping, index) => <PostCard key={index} ping={ping} icon={iconTable}/>) 
                : <span className='loader' /> }
          </div>
        </InfiniteScroll>
      </Container>
    )
  }
}

export default PostsContainer;
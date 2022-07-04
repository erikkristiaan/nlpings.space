import './posts-container.styles.css'
import '../spinner/spinner.styles.css';
import { iconTable } from './iconTable';
import PostCard from '../postcard/postcard.component';

import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Container } from 'react-bootstrap';


class PostsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      pings: [],
      isFetched: false,
      pageNum: 1,
      hasMore: true,
    }
  }

  componentDidMount() {
    this.fetchMoreData();
  }

  fetchMoreData = () => {

    // TODO: Clean up some of this logic
    const searchParams = new URLSearchParams(window.location.search);

    const author = searchParams.get('a');
    const anySearchParams = searchParams.get('q');
    const host = ''; // Add localhost:(port) if running in a development environment
    let urlString;

    if (author) {
      urlString = `${host}/api/pings/user/${author}/${this.state.pageNum}`;
    } else if (anySearchParams) {
      urlString = `${host}/api/pings/${this.props.id}/${this.state.pageNum}/?q=${anySearchParams}`;
    } else {
      urlString = `${host}/api/pings/${this.props.id}/${this.state.pageNum}`;
    }

    fetch(urlString)
      .then(response => response.json())
      .then(data => {
        if (data.length === 0) {
          this.setState(() => (
            { hasMore: false }
          ));
        };
        this.setState(() => (
          { pings: this.state.pings.concat(data), 
            isFetched: true, 
            pageNum: this.state.pageNum + 1 }
        ));
      })
      .catch(err => {
        return console.error('There was an error fetching data:', err)
      });
  }

  // map pings array on to individual cards
  renderElement = () => {
    const { pings } = this.state;
    return (
      <div>
        { pings.map((ping, index) => <PostCard key={index} ping={ping} icon={iconTable}/>) }
      </div>
    )
  }

  // Return css spinner if page is currently loading
  loader = () => {
    const { pings, isFetched } = this.state;
    if (pings.length >= 10 || !isFetched) {
      return <span className='loader' />
    }
  }

  // Return a message if response is empty
  endMessage = () => {
    const { pings, isFetched } = this.state;
    if (isFetched) {
      if (pings.length === 0) {
        return (
          <div className='no-content'>
            <h5>Can't find any content. 🤔</h5>
          </div>
        );
      }
      return (
        <div className='end-message'>
          <hr />
          <h5>No more pages to load.</h5>
        </div>
      );
    }
    return this.loader();
  }

  render() {
    const { pings, isFetched, hasMore } = this.state;
    return(
      <Container className='PostsContainer'>
        <InfiniteScroll
          dataLength={pings.length}
          endMessage={this.endMessage()}
          hasMore={hasMore}
          next={this.fetchMoreData}
          loader={this.loader()}
          scrollThreshold={0.85}
          style={{overflow: 'visible'}}
        >
          <div>
            {isFetched ? this.renderElement() : null }
          </div>
        </InfiniteScroll>
      </Container>
    )
  }
}

export default PostsContainer;
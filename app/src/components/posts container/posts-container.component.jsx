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
      pageNum: 1,
      hasMore: true,
    }
  }

  componentDidMount() {
    // fetch(`http://localhost:3001/api/pings/${this.props.id}/${this.state.pageNum}`)
    //   .then(response => response.json())
    //   .then(data => {
    //     this.setState( () => { return { pings: data, isFetched: true, pageNum: this.state.pageNum + 1}})
    //   });
    this.fetchMoreData();
  }

  fetchMoreData = () => {

    // TODO: Fix this logic
    const searchParams = new URLSearchParams(window.location.search);

    const author = searchParams.get('a');
    const anySearchParams = searchParams.get('q');

    let urlString;

    if (author !== null) {
      urlString = `https://nlpings.space/api/pings/user/${author}/${this.state.pageNum}`
    } else if (anySearchParams !== null) {
      urlString = `https://nlpings.space/api/pings/${this.props.id}/${this.state.pageNum}/?q=${anySearchParams}`
    } else {
      urlString = `https://nlpings.space/api/pings/${this.props.id}/${this.state.pageNum}`
    }

    fetch(urlString)
      .then(response => response.json())
      .then(data => {
        if (data.length === 0) {
          this.setState( () => { return { hasMore: false }} )
        }
        setTimeout( () => {
          this.setState( () => { return { pings: this.state.pings.concat(data), isFetched: true, pageNum: this.state.pageNum + 1}})
        }, 0); // <- Add 1200 to simulate page loads
      });
  }

  renderElement = () => {
    const { pings } = this.state;
    return (
      <div>
        { pings.map((ping, index) => <PostCard key={index} ping={ping} icon={iconTable}/>) }
      </div>
    )
  }

  loader = () => {
    const { pings, isFetched } = this.state;
    if (pings.length >= 10 || !isFetched) {
      return <span className='loader' />
    }
  }

  endMessage = () => {
    const { pings, isFetched } = this.state;
    if (isFetched) {
      if (pings.length === 0) {
        return (
          <div className='no-content'>
            {/* <hr /> */}
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



// isFetched ?
// pings.map((ping, index) => <PostCard key={index} ping={ping} icon={iconTable}/>) : 
// <span className='loader' /> 

export default PostsContainer;
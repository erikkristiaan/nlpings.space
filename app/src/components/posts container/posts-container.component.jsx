import './posts-container.styles.css'
import '../spinner/spinner.styles.css';

// old shit
import { iconTable } from './iconTable';
import PostCard from '../postcard/postcard.component';

import React from 'react';
import { Container } from 'react-bootstrap';

// new shit
import { useState, useEffect, useRef, useCallback } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch'

const NoContent = () => {
  return(
    <div className='no-content'>
      <h5>Can't find any content. 🤔</h5>
    </div>
  );
}

const Loader = () => {
  return <span className='loader' />;
};

const EndMessage = () => {
  return(
    <div className='end-message'>
      <hr />
      <h5>No more pages to load.</h5>
    </div>
  );
}

export default function PostsContainer() {
  const location = useLocation();
  const { pingId } = useParams();

  console.log(useParams());

  // const [ pings, setPings ] = useState([]);
  // const [ isFetched, setIsFetched ] = useState(false);
  // const [ hasMore, setHasMore ] = useState(true);
  const [ pageNum, setPageNum ] = useState(0);

  // Fetch New Data
  const { loading, err, pings, hasMore } = useFetch(pingId, pageNum);

  useEffect(() => {
    setPageNum(0);
  }, [pingId])

  const observer = useRef();
  const loadMoreRef = useCallback((element) => {
    if (!loading) {
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNum((prevpage) => prevpage + 1);
        }
      });
      if (element) {
        observer.current.observe(element);
      }
    }
  }, [loading, hasMore]);

  // console.log(pageNum);
  // if (loading && pings.length === 0) return <Loader />;
  if (!loading && pings.length === 0) {
    return <NoContent />
  }
  return(
    <Container className='PostsContainer'>
      { pings.map((ping, index) => {
          if (index + 2 === pings.length) {
            return (
              <div ref={loadMoreRef} key={index}>
                <PostCard key={index} ping={ping} icon={iconTable} />
              </div>
            );
          }
          return <PostCard key={index} ping={ping} icon={iconTable} />;
        }) }
      { loading && <Loader /> }
      { (!hasMore && !loading) && <EndMessage /> }
    </Container>
  );
}










  // useEffect(() => {
  //   setIsFetched(false);
  //   setPings([]);
  //   setPageNum(1);
  //   const fetchNewData = () => {
  //     fetch(`http://localhost:3001/api/pings/${ pingId ? pingId : 'main' }/1`)
  //       .then(res => res.json())
  //       .then(data => {
  //         setPings(data);
  //         setIsFetched(true);
  //         setPageNum(1);
  //       })
  //   };
  
  //   setTimeout(() => fetchNewData(), 1000);
  // }, [pingId]);

  


//   if (isFetched) {
//     if (pings.length === 0) {
//       return(
//         <div className='no-content'>
//           <h5>Can't find any content. 🤔</h5>
//         </div>
//       );
//     } else {
//       return(
//         <Container className='PostsContainer'>
//             { pings.map((ping, index) => <PostCard key={index} ping={ping} icon={iconTable}/>) }
//         </Container>
//       );
//     }
//   } else {
//     return <span className='loader' />;
//   }
// }

// class PostsContainer extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       pings: [],
//       isFetched: false,
//       pageNum: 1,
//       hasMore: true,
//     }
//   }

//   componentDidMount() {
//     this.fetchMoreData();
//   }

//   fetchMoreData = () => {

//     // TODO: Clean up some of this logic
//     const searchParams = new URLSearchParams(window.location.search);

//     const author = searchParams.get('a');
//     const anySearchParams = searchParams.get('q');
//     const host = 'http://localhost:3001'; // Add localhost:(port) if running in a development environment
//     let urlString;

//     if (author) {
//       urlString = `${host}/api/pings/user/${author}/${this.state.pageNum}`;
//     } else if (anySearchParams) {
//       urlString = `${host}/api/pings/${this.props.id}/${this.state.pageNum}/?q=${anySearchParams}`;
//     } else {
//       urlString = `${host}/api/pings/${this.props.id}/${this.state.pageNum}`;
//     }

//     fetch(urlString)
//       .then(response => response.json())
//       .then(data => {
//         if (data.length === 0) {
//           this.setState(() => (
//             { hasMore: false }
//           ));
//         };
//         this.setState(() => (
//           { pings: this.state.pings.concat(data), 
//             isFetched: true, 
//             pageNum: this.state.pageNum + 1 }
//         ));
//       })
//       .catch(err => {
//         return console.error('There was an error fetching data:', err)
//       });
//   }

//   // map pings array on to individual cards
//   renderElement = () => {
//     const { pings } = this.state;
//     return (
//       <div>
//         { pings.map((ping, index) => <PostCard key={index} ping={ping} icon={iconTable}/>) }
//       </div>
//     )
//   }

//   // Return css spinner if page is currently loading
//   loader = () => {
//     const { pings, isFetched } = this.state;
//     if (pings.length >= 10 || !isFetched) {
//       return <span className='loader' />
//     }
//   }

//   // Return a message if response is empty
//   endMessage = () => {
//     const { pings, isFetched } = this.state;
//     if (isFetched) {
//       if (pings.length === 0) {
//         return (
//           <div className='no-content'>
//             <h5>Can't find any content. 🤔</h5>
//           </div>
//         );
//       }
//       return (
//         <div className='end-message'>
//           <hr />
//           <h5>No more pages to load.</h5>
//         </div>
//       );
//     }
//     return this.loader();
//   }

//   render() {
//     const { pings, isFetched, hasMore } = this.state;
//     return(
//       <Container className='PostsContainer'>
//         <InfiniteScroll
//           dataLength={pings.length}
//           endMessage={this.endMessage()}
//           hasMore={hasMore}
//           next={this.fetchMoreData}
//           loader={this.loader()}
//           scrollThreshold={0.85}
//           style={{overflow: 'visible'}}
//         >
//           <div>
//             {isFetched ? this.renderElement() : null }
//           </div>
//         </InfiniteScroll>
//       </Container>
//     )
//   }
// }
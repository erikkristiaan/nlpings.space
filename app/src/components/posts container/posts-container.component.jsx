import { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { iconTable } from './iconTable';
import PostCard from '../postcard/postcard.component';
import useFetch from '../../hooks/useFetch';

import './posts-container.styles.css';
import '../spinner/spinner.styles.css';

export default function PostsContainer() {
  const { pingId } = useParams();
  const [searchParams] = useSearchParams();
  const [pageNum, setPageNum] = useState(0);

  // URL params
  let location = '';
  const query = searchParams.get('q');
  const author = searchParams.get('a');

  if (author) {
    location = 'user/' + author;
  } else if (query) {
    location = 'search';
  } else if (pingId) {
    location = pingId;
  } else {
    location = 'main';
  }

  // Fetch New Data
  const { loading, err, pings, hasMore } = useFetch(location, query, pageNum);

  // Set pageNum to 0 on location change
  useEffect(() => setPageNum(0), [location, query]);

  // Observer for infiniteScroll
  const observer = useRef();
  const loadMoreRef = useCallback(
    (element) => {
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
    },
    [loading, hasMore]
  );

  const Err = () => {
    return (
      <div className='no-content'>
        <h5>There was an error fetching content. 😔</h5>
      </div>
    );
  };

  const NoContent = () => {
    return (
      <div className='no-content'>
        <h5>Can't find any content. 🤔</h5>
      </div>
    );
  };

  const Loader = () => {
    return <span className='loader' />;
  };

  const EndMessage = () => {
    return (
      <div className='end-message'>
        <hr />
        <h5>No more pages to load.</h5>
      </div>
    );
  };

  if (err) {
    return <Err />;
  } else if (!loading && pings.length === 0) {
    return <NoContent />;
  }
  return (
    <Container className='PostsContainer'>
      {pings.map((ping, index) => {
        if (index + 2 === pings.length) {
          return (
            <div ref={loadMoreRef} key={index}>
              <PostCard key={index} ping={ping} icon={iconTable} />
            </div>
          );
        }
        return <PostCard key={index} ping={ping} icon={iconTable} />;
      })}
      {loading && <Loader />}
      {!hasMore && !loading && <EndMessage />}
    </Container>
  );
}

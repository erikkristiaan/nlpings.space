import React from 'react';
import { Link } from 'react-router-dom';

import dayjs from 'dayjs';
import parse from 'html-react-parser';
import { Card, Button } from 'react-bootstrap';

import './postcard.styles.css';

export default function PostCard({ icon, ping }) {

  const { 
    author,
    body,
    parent_submission,
    permalink,
    ping_group,
    time,
  } = ping;

  const unixTime = dayjs.unix(time);
  const formattedTime = dayjs(unixTime).format('MMM D, YYYY, h:mm A');
  const iconString = `fa-solid ${icon[ping_group]}`;

  return (
    <>
      <Card className='post-card'>
        <Card.Header>
          <div className='post-card-header'>
            <h5>
              <i className={iconString}></i>&nbsp;&nbsp;{ping_group}
            </h5>
            <h6 className='date-posted'>{formattedTime}</h6>
          </div>
        </Card.Header>
        <Card.Body>
            <Card className='post-card-subheader'>
              <Card.Body className='post-card-subheader-body'>
                <p className='subtext'>
                  posted by{' '}
                  <a href={`https://www.reddit.com/u/${author}`}>u/{author}</a>{' '}
                  in {parent_submission}
                </p>
              </Card.Body>
            </Card>
          <div className='html-body'>{parse(body.html)}</div>
        </Card.Body>
        <Card.Footer>
          <Button
            variant='primary'
            href={`https://www.reddit.com${permalink}?context=10000`}
          >
            <i className='fa-solid fa-link' /> Permalink
          </Button>
          <Button
            variant='primary'
            href={`https://www.reddit.com${permalink}`.slice(0, -8)}
          >
            <i className='fa-solid fa-arrow-up-short-wide' /> Parent Submission
          </Button>
          <Button 
            variant='primary' 
            as={Link} 
            to={`/search?a=${author}`}
          >
            <i className='fa-solid fa-user' /> User Pings
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
}
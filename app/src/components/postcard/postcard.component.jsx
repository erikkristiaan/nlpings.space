import './postcard.styles.css'

import React from "react";
import { render } from "react-dom";

import { DateTime } from 'luxon';
import parse from 'html-react-parser';
import { Card, Button } from 'react-bootstrap';

class PostCard extends React.Component {

  render() {
    const p = this.props.ping;
    const icon = `fa-solid ${this.props.icon[p.ping_group]}`;
    const dt = DateTime.fromSeconds(p.time);
    const localeDT = dt.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);

    return (
      <div>
        <Card className="post-card">
          <Card.Header>
            <div className="post-card-header">
              <h5><i className={icon}></i> {p.ping_group}</h5>
              <h6 className="date-posted">{localeDT}</h6>
            </div>
          </Card.Header>
          <Card.Body>
            <div>
              <Card className="post-card-subheader">
                <Card.Body className="post-card-subheader-body">
                  <p className="subtext">posted by <a href={`https://www.reddit.com/u/${p.author}`}>u/{p.author}</a> in {p.parent_submission}</p>
                </Card.Body>
              </Card>
            </div>
            <div className="html-body">{parse(p.body.html)}</div>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" href={`https://www.reddit.com${p.permalink}`}><i className="fa-solid fa-link" /> Permalink</Button>
            <Button variant="primary"><i class="fa-solid fa-arrow-up-short-wide" /> Parent Submission</Button>
            <Button variant="primary"><i class="fa-solid fa-user" /> User Pings</Button>
            {/* <Button variant="primary"><i class="fa-solid fa-arrow-up"></i>Save</Button> */}
          </Card.Footer>
        </Card>
      </div>
    );
  };
}
  
export { PostCard };
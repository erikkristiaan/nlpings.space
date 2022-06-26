import './404.styles.css'

import React from 'react';

class FourOhFour extends React.Component {
  render(){
    return(
      <div className='four-oh-four'>
        <h2>404: Page Not Found</h2>
        <h5>The page you requested doesn't seem to exist. 😕</h5>
      </div>
    )
  }
}

export default FourOhFour;
import React from 'react';
import Button from '../components/Button';
import './nomatch.css';

const NoMatch = () => (
  <article id="no-match-page">
    <div id="sorry-text">I'm sorry, <strong>{window.location.pathname}</strong> doesn't contain a page...</div>
    <Button dest="/" text="Take me home!"/>
    <img src="images/sad_icon.svg" alt="sad-face" id="sad-face-icon"/>
  </article>
);

export default NoMatch;
import React from 'react';
import { withRouter } from 'react-router-dom';
import './navbar.css';

const MyArticle = ({image, textContent, alt, swap}) => (
  <div>
  {
    swap ?
    (
    <div className="article-content row">
      <div className="col-md-6">
        {textContent}
      </div>
      <div className="col-md-6 vcenter">
        <img
          src={image}
          alt={alt}
          className="article-image"  
        />
      </div>
    </div>
    )
    :
    (
    <div className="article-content row">
      <div className="col-md-6 vcenter">
        <img
          src={image}
          alt={alt}
          className="article-image"  
        />
      </div>
      <div className="col-md-6">
        {textContent}
      </div>
    </div>
    )
  }
  </div>
);

export default withRouter(MyArticle);
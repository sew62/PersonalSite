import React from 'react';
import { withRouter } from 'react-router-dom';
import './navbar.css';

class MyArticle extends React.Component {
  state = {
  }

  render() {
    return (
      <div className="article-content">
        <img src={this.props.image} alt="article"/>
        {this.props.textContent}
      </div>
    );
  }
};

export default withRouter(MyArticle);
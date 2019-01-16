import React from 'react';
import { withRouter } from 'react-router-dom';
import './navbar.css';

class MyArticle extends React.Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange.bind(this));
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isSmallScreen = width <= 770;
    if(isSmallScreen) {
      return (
        <div className="article-content-sm row">
          <div className="col-md-6 pad-me">
            <img
              src={this.props.image}
              alt={this.props.alt}
              className="article-image"  
            />
          </div>
          <div className="col-md-6 pad-me" dangerouslySetInnerHTML={{__html: this.props.textContent}}></div>
        </div>
      );
    }

    // Else render large screen
    return (
      <div>
      {
        this.props.swap ?
        (
        <div className="article-content row">
          <div className="col-sm-12 col-md-6" dangerouslySetInnerHTML={{__html: this.props.textContent}}></div>
          <div className="col-sm-12 col-md-6">
            <img
              src={this.props.image}
              alt={this.props.alt}
              className="article-image"  
            />
          </div>
        </div>
        )
        :
        (
        <div className="article-content row">
          <div className="col-sm-12 col-md-6">
            <img
              src={this.props.image}
              alt={this.props.alt}
              className="article-image"  
            />
          </div>
          <div className="col-sm-12 col-md-6" dangerouslySetInnerHTML={{__html: this.props.textContent}}></div>
        </div>
        )
      }
      </div>
    );
  }
}

export default withRouter(MyArticle);
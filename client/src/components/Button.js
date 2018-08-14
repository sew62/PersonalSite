import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './button.css';

const Button = ({text, dest}) => (
    <Link style={{position: "static"}}to={dest} className="btn btn-sm animated-button my-btn">{text}</Link>
);

export default withRouter(Button);
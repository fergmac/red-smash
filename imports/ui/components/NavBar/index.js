import React, { Component } from 'react';
import { Link } from 'react-router';
import AccountsUIWrapper from '../AccountsUIWrapper/';

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <span className="navbar-brand" href="#"><AccountsUIWrapper /></span>
          </div>
          <ul className="nav navbar-nav">
            <li><Link to="/leaderboard" activeStyle={{ textDecoration: 'underline' }}>Leaderboard</Link></li>
            <li><Link to="/challenges" activeStyle={{ textDecoration: 'underline' }}>Challenges</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
};

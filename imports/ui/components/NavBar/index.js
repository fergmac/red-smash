import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { browserHistory, Link } from 'react-router';
import AccountsUIWrapper from '../AccountsUIWrapper/';

const styles = {
  buttons: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    marginBottom: '5rem',
  },
  btnContainer: {
    marginLeft: '5px',
    marginRight: '5px'
  }

}
export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <span className="navbar-brand" href="#"><AccountsUIWrapper /></span>
          </div>
          <ul className="nav navbar-nav">
            <li><Link to="/leaderboard">Leaderboard</Link></li>
            <li><Link to="/challenges">Challenges</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
};

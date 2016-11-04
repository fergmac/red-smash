import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { browserHistory, Link } from 'react-router';
import styles from './styles.css';
// const styles =  {
//     navBar: {
        
//     }
// }

export default class NavBar extends Component{
  render() {
    return (
      <div>
        <ul className={styles.navBar}>
        <Link to="/leaderboard">LeaderBoard</Link>
        <Link to="/challenges">Challenges</Link>
        </ul>
      </div>
    )
  }
};

import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { browserHistory, Link } from 'react-router';

const styles =  {
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
      <div style={styles.container}>
      <div style={styles.buttons}>
        <div>
          <button className="btn btn-success btn-lg" style={styles.btnContainer}><Link to="/leaderboard">Leaderboard</Link></button>
          <button className="btn btn-success btn-lg" style={styles.btnContainer}><Link to="/challenges">Challenges</Link></button>    
        </div>
      </div>
      </div>
    )
  }
};

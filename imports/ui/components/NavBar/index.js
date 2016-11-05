import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { browserHistory, Link } from 'react-router';
import { ButtonToolbar, Button } from 'react-bootstrap';

const styles =  {
    buttons: {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center'
    }
}
export default class NavBar extends Component {
  render() {
    return (
      <div style={styles.buttons}>
        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="large" active><Link to="/leaderboard">Leaderboard</Link></Button>
          <Button bsStyle="primary" bsSize="large" active><Link to="/challenges">Challenges</Link></Button>
        </ButtonToolbar>
      </div>
    )
  }
};

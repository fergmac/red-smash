import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Modal, Button } from 'react-bootstrap';
import UserModal from '../UserModal/';
import { createContainer } from 'meteor/react-meteor-data';


export class UserViewer extends Component {
  constructor() {
    super()
    this.state = {
      showModal: false
    }
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <p>Click to get the full Modal experience!</p>

        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open.bind(this)}
          >
          View Profile
        </Button>

        <UserModal close={this.close.bind(this)} showModal={this.state.showModal} />
      </div>
    );
  }
}

export default createContainer(() => {
  // Meteor.subscribe('currentUserCompletedChallenges', Meteor.userId());
  Meteor.subscribe('currentUserCompletedChallenges');
  return {
    currentUserCompletedChallenges: Meteor.users.find({}).fetch(),
  };
}, UserViewer);

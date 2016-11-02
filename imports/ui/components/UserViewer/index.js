import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Modal, Button } from 'react-bootstrap';
import UserModal from '../UserModal/';


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

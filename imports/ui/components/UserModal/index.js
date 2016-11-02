import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Modal, Button } from 'react-bootstrap';

const styles = {
  bigStar: {
    fontSize: '40px',
    color: 'gold'
  }
}

class UserModal extends Component {
  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.close}>
        <Modal.Header closeButton>
          <Modal.Title>Franz Kafka</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-12 text-center">
              <img className="img img-circle img-thumbnail" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" />
              <div id="user-star-container"><span style={styles.bigStar}>★</span> x 105<br />47th (of 72)</div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.close}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

UserModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

export default UserModal;

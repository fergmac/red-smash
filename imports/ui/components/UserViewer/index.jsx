import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const styles = {
  bigStar: {
    fontSize: '40px',
    color: 'gold'
  }
}

export class UserViewer extends Component {
  render() {
    return (
      <div>
        <h1>Franz Kafka</h1>
        <div id="user-gravatar">
          <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" />  
        </div>
        <div id="user-star-container">
          <span style={styles.bigStar}>★</span> x 105
          <br />47th (of 72)
        </div>
      </div>
    );
  }
}

export default UserViewer;

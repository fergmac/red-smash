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
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-2">
            <img className="img img-circle img-thumbnail" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" />
            <div id="user-star-container"><span style={styles.bigStar}>★</span> x 105<br />47th (of 72)</div>
          </div>
          <div className="col-lg-4">
            <div className="well well-sm"><h4>AppDev</h4></div>
            <div className="well well-sm"><h4>is happy</h4></div>
            <div className="well well-sm"><h4>and so is</h4></div>
            <div className="well well-sm"><h4>tree sappy</h4></div>
          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>
    );
  }
}

export default UserViewer;

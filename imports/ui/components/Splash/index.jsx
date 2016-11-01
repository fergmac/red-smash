import React, { Component } from 'react';
import Paper from 'material-ui/paper';

const styles = {
  giant: {
    fontSize: '20vw',
    // transform: 'rotate(45deg)'
  }
}

export default class Splash extends Component {
  render() {
    return (
      <div>
        <h1 style={styles.giant}>RED<br />SMASH</h1>
      </div>
    );
  }
}

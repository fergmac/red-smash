import React, { Component } from 'react';
import Paper from 'material-ui/paper';

const styles = {
  giant: {
    fontSize: '20vw',
  },
}

export default class Splash extends Component {
  render() {
    return (
      <h1 style={styles.giant}>RED<br />SMASH</h1>
    );
  }
}

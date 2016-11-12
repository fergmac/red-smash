import React, { Component } from 'react';
import Paper from 'material-ui/paper';

const styles = {
  wrapper: {
    height: '500px',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
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

import React, { Component } from 'react';
import Paper from 'material-ui/paper';

const styles = {
  wrapper: {
    height: '100vh',
    // margin: '-70px -8px 0px -8px',
    margin: '-70px 0px 0px 0px',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  giant: {
    fontSize: '20vw',
    // transform: 'rotate(45deg)'
  }
}

export default class Splash extends Component {
  render() {
    return (
      <div style={styles.wrapper}>
        <h1 style={styles.giant}>RED<br />SMASH</h1>
      </div>
    );
  }
}

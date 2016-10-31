import React from 'react';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import Paper from 'material-ui/paper';

const styles = {
  background: {
    backgroundColor: "darkred",
    height: '100vh',
    margin: '-16px -8px 0px -8px',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
}

export const App = ({ children }) => (

  <div style={styles.background}>
    <Paper>
      <AccountsUIWrapper />
      {/* <Navigation /> */}
      {children}
    </Paper>
  </div>
)
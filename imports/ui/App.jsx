import React from 'react';
import { Navigation } from './components/Navigation.jsx';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';

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
    <AccountsUIWrapper />
    {/* <Navigation /> */}
    {children}
  </div>
)
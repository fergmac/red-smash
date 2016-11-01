import React from 'react';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
// import Paper from 'material-ui/paper';

// Accounts.ui.config({
//   passwordSignupFields: 'EMAIL_ONLY_NO_PASSWORD',
//   loginPath: '/',
// });

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
}

export const App = ({ children }) => (
  <div>
    <div className="navbar">
      <AccountsUIWrapper />
    </div>
    <div style={styles.wrapper}>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 text-center">
          {/* <Navigation /> */}
          {children}
        </div>
      </div>
    </div>
  </div>
)
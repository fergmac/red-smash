import React from 'react';
import AccountsUIWrapper from './components/AccountsUIWrapper/';
import NavBar from './components/NavBar';
// import Paper from 'material-ui/paper';

// Accounts.ui.config({
//   passwordSignupFields: 'EMAIL_ONLY_NO_PASSWORD',
//   loginPath: '/',
// });

export const App = ({ children }) => (
  <div>
    <div className="navbar">
      <AccountsUIWrapper />
     <NavBar />
    </div>
    <div className="container">
      <div className="row">
        <div className="col-sm-12 text-center">
          {/* <Navigation /> */}
          {children}
        </div>
      </div>
    </div>
  </div>
)
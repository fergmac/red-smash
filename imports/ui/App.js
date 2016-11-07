import React from 'react';
import AccountsUIWrapper from './components/AccountsUIWrapper/';
import NavBar from './components/NavBar';


const styles = {
  navContainer: {
    minHeight: '200px',
  },
}

export const App = ({ children }) => (
  <div>
    <div className="navbar">
      <AccountsUIWrapper />
      <NavBar />
    </div>
    <div className="container">
      <div className="row">
        <div className="col-sm-12 text-center">
          {children}
        </div>
      </div>
    </div>
  </div>
)
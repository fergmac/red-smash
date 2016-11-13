import React from 'react';
import NavBar from './components/NavBar';

export const App = ({ children }) => (
  <div>
    <NavBar />
    <div className="container">
      <div className="row">
        <div className="col-sm-12 text-center">
          {children}
        </div>
      </div>
    </div>
  </div>
)
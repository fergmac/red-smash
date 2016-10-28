import React from 'react';
import { Navigation } from './components/Navigation.jsx';

export const App = ( { children } ) => (
  <div>
    <Navigation />
    { children }
  </div>
)
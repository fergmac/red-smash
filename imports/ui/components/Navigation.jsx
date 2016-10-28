import React from 'react';
import { IndexLink, Link } from 'react-router';

export const Navigation = () => (
  <ul>
    <li><IndexLink to="/" activeClassName="active">Index</IndexLink></li>
    <li><Link to={`/helloworld/`}>Hello World!</Link></li>
    <li><Link to={`/goodnight/`}>Goodnight Moon</Link></li>
  </ul>
)
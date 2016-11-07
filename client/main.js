import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import '/imports/startup/client';
import '../imports/startup/accounts-config.js';
import { renderRoutes } from '../imports/startup/client/routes';
import App from '../imports/ui/App';
 
Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('react-root'));
});
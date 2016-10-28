import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Index } from '../../ui/components/index.jsx';
import {GoodnightMoon} from '../../ui/pages/GoodnightMoon.js';
import {HelloWorld} from '../../ui/pages/HelloWorld.js';
import {PageNotFound} from '../../ui/pages/PageNotFound.js';
import { Hello } from '../../ui/pages/Hello.js';
import { App } from '../../ui/App.jsx';

Meteor.startup( () => {
  render( 
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Index } />
        <Route path="/goodnight" component={ GoodnightMoon } />
        <Route path="/helloworld" component={ HelloWorld } />
        <Route path="/hello/:name" component={ Hello } />
        <Route path="*" component={PageNotFound} />
      </Route>
    </Router>,
    document.getElementById( 'react-root' )
  );
});

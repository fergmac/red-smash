import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Index } from '../../ui/components/index.jsx';
import { GoodnightMoon } from '../../ui/pages/GoodnightMoon.js';
import { HelloWorld } from '../../ui/pages/HelloWorld.js';
import { PageNotFound } from '../../ui/pages/PageNotFound.js';
import { Hello } from '../../ui/pages/Hello.js';
import { App } from '../../ui/App.jsx';
import { ChallengeList } from '../../ui/components/ChallengeList';
import { TeamList } from '../../ui/components/TeamList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from '../../ui/mui-theme';

export const renderRoutes = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Index } />
        <Route path="/challenges" component={ ChallengeList } />
        <Route path="/leaderboard" component={ TeamList } />
{/*        <Route path="/goodnight" component={ GoodnightMoon } />
        <Route path="/helloworld" component={ HelloWorld } />
        <Route path="/hello/:name" component={ Hello } /> */}
        <Route path="*" component={PageNotFound} />
      </Route>
    </Router>
  </MuiThemeProvider>
);


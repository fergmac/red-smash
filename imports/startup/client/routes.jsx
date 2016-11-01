import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Index } from '../../ui/components/index.jsx';
import { App } from '../../ui/App.jsx';
import ChallengeList from '../../ui/components/ChallengeList';
import TeamList from '../../ui/components/TeamList';
import { UserViewer } from '../../ui/components/UserViewer/index.jsx';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from '../../ui/mui-theme';

export const renderRoutes = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Index} />
        <Route path="/challenges" component={ChallengeList} />
        <Route path="/leaderboard" component={TeamList} />
        <Route path="/user" component={UserViewer} />
      </Route>
    </Router>
  </MuiThemeProvider>
);


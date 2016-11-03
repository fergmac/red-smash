import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Splash from '../../ui/components/Splash/';
import { App } from '../../ui/App';
import ChallengeList from '../../ui/components/ChallengeList';
import TeamList from '../../ui/components/TeamList';
import ChallengeDetails from '../../ui/components/ChallengeDetails';
import { UserViewer } from '../../ui/components/UserViewer/';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from '../../ui/mui-theme';

export const renderRoutes = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Splash} />
        <Route path="/leaderboard" component={TeamList} />
        <Route path="/user" component={UserViewer} />
        <Route path="/challenges" component={ChallengeList} />
        <Route path="/challenges/id/:id" component={ChallengeDetails} />
      {/*  <Route path="/*" component={NotFoundPage} /> */}
      </Route>
    </Router>
  </MuiThemeProvider>
);

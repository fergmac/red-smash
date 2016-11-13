import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Splash from '../../ui/components/Splash/';
import { App } from '../../ui/App';
import ChallengeList from '../../ui/components/ChallengeList';
import LeaderBoard from '../../ui/components/LeaderBoard';
import ChallengeDetails from '../../ui/components/ChallengeDetails';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Splash} />
      <Route path="/leaderboard" component={LeaderBoard} />
      <Route path="/challenges" component={ChallengeList} />
      <Route path="/challenges/id/:id" component={ChallengeDetails} />
    </Route>
  </Router>
);

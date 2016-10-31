import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Teams } from '../../../api/api-teams.js';
import { Meteor } from 'meteor/meteor';

class TeamList extends Component {
    render() {
        return (
            <div>Leader Board</div>
        );

    };
    
}
TeamList.propTypes = {
  teams: PropTypes.array.isRequired,
}

export default createContainer(() => {
  Meteor.subscribe('teams');
  return {
    teams: Teams.find().fetch(),
  };
}, TeamList);
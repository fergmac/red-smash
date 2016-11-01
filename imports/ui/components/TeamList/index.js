import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
// import { Teams } from '../../../api/api-teams.js';
import { Meteor } from 'meteor/meteor';
import Teams from '../Teams';

class TeamList extends Component {
  
    render() {
        return (
          <div>
            <button>Click to Challenge</button>
            <div>Leader Board</div>
            {this.props.teams.map((team, index) => (<Teams team={team}  key={index} />))}
         </div>
        );

    };
    
}
TeamList.propTypes = {
  teams: PropTypes.array.isRequired,
}

export default createContainer(() => {
  Meteor.subscribe('teams');
  return {
    teams: Meteor.users.find().fetch(),
  };
}, TeamList);
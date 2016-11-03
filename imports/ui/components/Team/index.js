import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';

// Team component - represents a single team item
export default class Team extends Component {


  
  render() {
    let face = this.props.team
    // console.log(JSON.stringify(face))
    return (
      <div className="row">
        <div className="col-xs-4">
          <p>{this.props.team.teamId}</p>
        </div>
        <div className="col-xs-8">
          <p>{this.props.team.starCount}</p>
        </div>
      </div>
    );
  }
}

Team.propTypes = {
  team: PropTypes.object.isRequired,
};
import React, { Component, PropTypes } from 'react'
import { createContainer } from 'meteor/react-meteor-data'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor'
import PlayersTable from '../PlayersTable'
import { Pie } from 'react-chartjs'
import { sortByKey, teamStarsFinder, pieFilling } from '../../../functions/'

// global options variable
const pieOptions = {
  responsive: true,
  scaleBeginAtZero: true,
}

class LeaderBoard extends Component {
  render() {
    const teamData = teamStarsFinder(this.props.teams)
    const pieData = pieFilling(teamData)

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1>Leader Board</h1>
            <br />
            <div className="col-lg-2"></div>
            <div className="col-lg-6">
              <Pie ref="pieChart" data={pieData} options={pieOptions} />
            </div>
            <div className="col-lg-2 text-left container">
              <h3>Legend</h3>
              <p><span className="label label-md label-primary">&nbsp;&nbsp;&nbsp;</span> {pieData.length > 0 ? `${pieData[0].label} - ${pieData[0].value}` : ''}</p>
              <p><span className="label label-md label-success">&nbsp;&nbsp;&nbsp;</span> {pieData.length > 1 ? `${pieData[1].label} - ${pieData[1].value}` : ''}</p>
              <p><span className="label label-md label-info">&nbsp;&nbsp;&nbsp;</span> {pieData.length > 2 ? `${pieData[2].label} - ${pieData[2].value}` : ''}</p>
              <p><span className="label label-md label-warning">&nbsp;&nbsp;&nbsp;</span> {pieData.length > 3 ? `${pieData[3].label} - ${pieData[3].value}` : ''}</p>
              <p><span className="label label-md label-danger">&nbsp;&nbsp;&nbsp;</span> {pieData.length > 4 ? `${pieData[4].label} - ${pieData[4].value}` : ''}</p>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 offset-lg-6">
            <PlayersTable players={this.props.teams} />
          </div>
        </div>
      </div>
    );
  };
}


LeaderBoard.propTypes = {
  teams: PropTypes.array.isRequired,
}

export default createContainer(() => {
  Meteor.subscribe('teams');
  return {
    teams: Meteor.users.find({}, { username: 1, starCount: 1, teamId: 1 }).fetch(),
  };
}, LeaderBoard);

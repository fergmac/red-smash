import { chartColours } from  '../ui/theme'

// A file for importing some commonly used functions

// a silly little function to add a suffix to the end of a number (e.g. '21' to '21st')
export const numberSuffixer = (num) => {
  if (num.toString().match(/[^\d]/) || num.length > 100000000000) {
    return num
  }

  const modulo100 = (num % 100).toString()

  switch (modulo100.substr(0, 1)) {
    case '1':
      if (num > 1 && modulo100.length > 1) {
        return num + 'th'
      }
    default:
      switch (num % 10) {
        case 1:
          return num + 'st'
        case 2:
          return num + 'nd'
        case 3:
          return num + 'rd'
        default:
          return num + 'th'
      }
  }
}

export const sortByKey = (key, order = 1) => (a, b) => {
  switch (true) {
    case a[key] < b[key]:
      return (1 * order)
    case a[key] > b[key]:
      return (-1 * order)
    default:
      return 0;
  }
}


// it will be necessary to refactor this at some point, since this of course won't scale
// an idea might be generating a new Mongo collection called "teams" or something, and
// get it to regenerate each time there's a change to the users collection, or just find
// a way for aggregates to work in Meteor-React, which would be ideal
export const teamStarsFinder = (teamsInput) => {
  let teamStats = [...new Set(
    teamsInput
      .map((user) => user.teamId))]
    .map((team) => { return { teamId: team, starCount: 0, players: [] } })

  let userArray = teamsInput

  for (i = 0; i < teamStats.length; i++) {
    for (j = 0; j < userArray.length; j++) {
      if (userArray[j].teamId === teamStats[i].teamId) {
        teamStats[i].starCount += userArray[j].starCount
        teamStats[i].players.push(userArray[j])
      }
    }
    teamStats[i].players.sort(sortByKey('starCount'))
  }
  teamStats.sort(sortByKey('starCount'))

  return teamStats
}

  // the code below is an example of a purely functional way of accomplishing above… BUT…
  // it's not complete because of an error with tracker's return on the currentUser being
  // inconsistent with the teams subscription (which comes from the users collection)…
  // this will have to be fixed, so let this serve as a starting point :
  // _teamStarsFinder() {
  //   // TODO: this should get fixed so that the current user works… booo… tracker

  //   const distinctTeams = [...new Set(
  //     this.props.teams
  //       .map((user) => user.teamId))]
  //     .map((team) => {
  //       return { teamId: team, starCount: 0, players: [] }
  //     })

  //   const teamStats = distinctTeams
  //     .reduce((dtAll, dtItem) => {
  //       this.props.teams.reduce((uaAll, uaItem) => {
  //         if (uaItem.teamId === dtItem.teamId) {
  //           dtItem.starCount += uaItem.starCount
  //           dtItem.players.push(uaItem)
  //         }
  //         return dtItem.players.sort(sortByKey('starCount'))
  //       })
  //       return dtAll
  //     }, distinctTeams)
  //   return teamStats.sort(sortByKey('starCount'))
  // }

  // a function to generate the contents of a pie chart
export const pieFilling = (teamData) => {
  const pieData = teamData.map((team, index) => {
    return {
      label: team.teamId,
      color: chartColours[index],
      highlight: chartColours[index],
      value: team.starCount,
      labelColor: 'white',
      labelFontSize: '16px'
    }
  })
  return pieData
}
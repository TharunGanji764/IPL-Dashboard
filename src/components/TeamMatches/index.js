// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import './index.css'
import MatchCard from '../MatchCard'
import LatestMatch from '../LatestMatch'

const url = 'https://apis.ccbp.in/ipl/'

class TeamMatches extends Component {
  state = {team: [], isLoading: true}

  componentDidMount() {
    this.getTeamData()
  }

  getMatchData = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    opponentTeam: data.competing_team,
    opponentTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  })

  getTeamData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`${url}${id}`)
    const data = await response.json()
    const teamData = {
      teamBanner: data.team_banner_url,
      latestMatch: this.getMatchData(data.latest_match_details),
      recentMatches: data.recent_matches.map(eachMatch =>
        this.getMatchData(eachMatch),
      ),
    }
    this.setState({team: teamData, isLoading: false})
  }

  renderMatchCard = () => {
    const {team} = this.state
    const {recentMatches} = team
    return (
      <li className="match-card">
        {recentMatches.map(eachMatch => (
          <MatchCard matchDetails={eachMatch} key={eachMatch.id} />
        ))}
      </li>
    )
  }

  renderLatestMatch = () => {
    const {team} = this.state
    const {latestMatch, teamBanner} = team
    return (
      <div className="team-details-container">
        <img src={teamBanner} alt="team banner" className="team-banner" />
        <LatestMatch latestmatch={latestMatch} />
        {this.renderMatchCard()}
      </div>
    )
  }

  getclassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'CSK':
        return 'csk'
      case 'RR':
        return 'rr'
      case 'MI':
        return 'mi'
      case 'SH':
        return 'srh'
      case 'DC':
        return 'dc'
      default:
        return ''
    }
  }

  render() {
    const {isLoading} = this.state
    const className = `team-container ${this.getclassName()}`
    return (
      <div className={className}>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          this.renderLatestMatch()
        )}
      </div>
    )
  }
}
export default TeamMatches

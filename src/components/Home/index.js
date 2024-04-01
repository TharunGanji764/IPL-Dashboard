// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const teamsData = data.teams
    const newData = teamsData.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamImage: eachItem.team_image_url,
    }))
    this.setState({teamsList: newData, isLoading: false})
  }

  renderTeamsList = () => {
    const {teamsList} = this.state
    return (
      <ul className="team-card-container">
        {teamsList.map(eachTeam => (
          <TeamCard teamsData={eachTeam} key={eachTeam.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="dashboard-bg">
        <div className="dashboard-heading">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          this.renderTeamsList()
        )}
      </div>
    )
  }
}
export default Home

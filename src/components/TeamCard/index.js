// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamsData} = props
  const {name, teamImage, id} = teamsData
  return (
    <li className="team-container">
      <Link to={`/team-matches/${id}`} className="link">
        <img src={teamImage} alt={name} className="team-logo" />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}
export default TeamCard

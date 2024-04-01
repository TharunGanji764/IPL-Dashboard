// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {result, opponentTeam, opponentTeamLogo, matchStatus} = matchDetails

  let status
  if (matchStatus === 'Won') {
    status = 'won'
  } else {
    status = 'lost'
  }

  return (
    <li>
      <img
        src={opponentTeamLogo}
        alt={`competing team ${opponentTeam}`}
        className="team-logo"
      />
      <p className="team-Name">{opponentTeam}</p>
      <p className="match-result">{result}</p>
      <p className={status}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard

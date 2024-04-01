// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestmatch} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    opponentTeam,
    opponentTeamLogo,
    firstInnings,
    secondInnings,
  } = latestmatch

  return (
    <div className="match-container">
      <h1 className="match-heading">Latest Matches</h1>
      <div className="container">
        <div className="match-details">
          <p className="team-name">{opponentTeam}</p>
          <p className="date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="result">{result}</p>
        </div>
        <img
          src={opponentTeamLogo}
          alt={`latest match ${opponentTeam}`}
          className="opponent-team-logo"
        />
        <div className="innings-details">
          <p className="innings-heading">First Innings</p>
          <p className="innings">{firstInnings}</p>
          <p className="innings-heading">Second Innings</p>
          <p className="innings">{secondInnings}</p>
          <p className="innings-heading">Math Of The Match</p>
          <p className="innings">{manOfTheMatch}</p>
          <p className="innings-heading">Umpires</p>
          <p className="innings">{umpires}</p>
        </div>
      </div>
    </div>
  )
}
export default LatestMatch

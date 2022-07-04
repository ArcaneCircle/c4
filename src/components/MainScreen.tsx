import { useC4Context } from '~/context/C4Context'

interface MainScreenProps {
  onClick: () => void
  children?: React.ReactElement
}

const MainScreen = (props: MainScreenProps) => {
  const { game, players, playerAddr, playerName } = useC4Context()
  const isIncluded = players.some((p) => p.addr === playerAddr)
  const handleJoin = () => {
    const text = playerName + " joined Connect4"
    window.webxdc.sendUpdate({ payload: { game: game, players: players }, info: text }, text)
  }
  return (
    <div className="mainscreen" >
      <h1>Connect Four</h1>
      <p>Hi, {playerName}! This is the classic Connect Four game</p>
      {/* <p>Once there are two players, you could start playing</p> */}
      {players.length > 0 && <h2>Players</h2>}
      <ul>
        {players.map(player => <li>{player.name}</li>)}
      </ul>
      {(players.length < 2 && !isIncluded) && <button onClick={handleJoin}>Join</button>}
      {players.length === 2 && <button onClick={props.onClick} >Click to start</button>}
    </div>
  )
}

export default MainScreen

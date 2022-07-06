import { useC4Context } from '~/context/C4Context'

const MainScreen = (props: MainScreenProps) => {
  const { players, setPlayers, playerAddr, playerName } = useC4Context()
  const isIncluded = players.some((p) => p.addr === playerAddr)
  const handleJoin = () => {
    const newPlayers = [...players, { name: playerName, addr: playerAddr, color: players.length === 0 ? '#000' : '#FFF' }]
    setPlayers(newPlayers)
    const text = playerName + " joined Connect4"
    window.webxdc.sendUpdate({ payload: { move: -1, moves: [], players: newPlayers }, info: text }, text)
  }
  return (
    <div className="mainscreen" >
      <span className='player1'></span>
      <h1>Connect Four</h1>
      <p>Hi, {playerName}! This is the classic Connect Four game</p>
      {players.length > 0 && <>
        <h2>Players:</h2>
        <ul>
          {players.map(player => <li key={player.addr}>{player.name}</li>)}
        </ul>
      </>}
      {(players.length < 2 && !isIncluded) && <button onClick={handleJoin}>Join</button>}
      {players.length === 2 && <button onClick={props.onClick} >Click to start</button>}
      <span className='player2'></span>
    </div>
  )
}

export default MainScreen

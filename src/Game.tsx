import Board from './components/Board'
import MainScreen from './components/MainScreen'
import { useC4Context } from '~/context/C4Context'
import { ReceivedStatusUpdate } from 'webxdc'

export const Game: React.FC<{}> = () => {
  const { setPlayers, players, setMoves, setLastMove, playerAddr } = useC4Context()
  const [started, setStarted] = useState(false)

  useEffect(() => {
    window.webxdc.setUpdateListener((update: ReceivedStatusUpdate<C4Update>) => {
      if (update.serial && update.max_serial && update.serial === update.max_serial) {
        const { move: newMove, moves: newMoves, players: newPlayers } = update.payload
        setMoves(newMoves)
        setLastMove(newMove)
        if (update.payload.type) {
          setPlayers(newPlayers)
        } else if (newPlayers.length === 1 && newPlayers[0].addr === playerAddr) {
          const summary = newPlayers[0].name + " is waiting for another player"
          window.webxdc.sendUpdate({ payload: { move: -1, moves: [], players: newPlayers, type: "create" }, info: summary, summary }, summary)
          setPlayers(newPlayers)
        } else if (newPlayers.length === 2 && newPlayers[0].addr === playerAddr) {
          const summary = newPlayers[0].name + " vs " + newPlayers[1].name
          window.webxdc.sendUpdate({ payload: { move: -1, moves: [], players: newPlayers, type: "join" }, info: summary, summary }, summary)
          setPlayers(newPlayers)
        }
      }
    })
  }, [])

  useEffect(() => {
    if (players.length > 1) {
      setStarted(true)
    }
  }, [players.length])

  return (
    <>
      <div className="mycontainer">
        {started
          ? <>
            <Board />
          </>
          : <MainScreen onClick={() => setStarted(true)} />}
      </div>
    </>
  )
}

import Board from './components/Board'
import MainScreen from './components/MainScreen'
import { useC4Context } from '~/context/C4Context'
import { ReceivedStatusUpdate } from 'webxdc'

export const Game: React.FC<{}> = () => {
  const { setPlayers, players, moves, setMoves, setLastMove } = useC4Context()
  const [started, setStarted] = useState(false)

  useEffect(() => {
    window.webxdc.setUpdateListener((update: ReceivedStatusUpdate<C4Update>) => {
      if (update.serial && update.max_serial && update.serial === update.max_serial) {
        const { move: newMove, moves: newMoves, players: newPlayers } = update.payload
        if (newMoves && (moves.length < newMoves.length || newMoves.length === 0)) {
          setMoves(newMoves)
          setLastMove(newMove)
          if (players.length === newPlayers.length && players[0].addr !== newPlayers[0].addr) setPlayers(newPlayers)
        }
        if (players.length < newPlayers.length) setPlayers(newPlayers)
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

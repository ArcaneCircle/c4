import { useC4Context } from '~/context/C4Context'
import { editName } from '~/utils/editName'


const Status = (props: StatusProps) => {
    const { players, playerAddr, setMoves, setPlayers, setLastMove, moves, lastMove } = useC4Context();
    const isPlaying = players.some((p) => p.addr === playerAddr)
    const isTurn = isPlaying ? props.color === players.find(p => p.addr === playerAddr)?.color : false
    const handleSurrender = () => {
        if (isTurn) {
            setMoves([])
            setLastMove(-1)
            const newPlayers = [players[1], players[0]]
            newPlayers[0].color = '#000'
            newPlayers[1].color = '#FFF'

            if (props.color === '#000') {
                newPlayers[0].won++
            } else if (props.color === '#FFF') {
                newPlayers[1].won++
            }

            setPlayers(newPlayers)
            const summary = editName(newPlayers[0].name, 8) + " vs " + editName(newPlayers[1].name, 8)

            const text = "New Game: " + newPlayers[0].name + " vs " + newPlayers[1].name + " in DeltaConnect"
            window.webxdc.sendUpdate({ payload: { move: -1, moves: [] as number[], players: newPlayers }, info: text, summary: summary }, text)
        }
    }
    const handleSendAgain = () => {
        window.webxdc.sendUpdate({ payload: { move: lastMove, moves: moves, players: players } }, "Sending state again")
    }
    return (
        <section className={props.blur ? 'status blur' : 'status'}>
            <p className="font-bold"><span className='p1icon h-4 w-4 inline-flex'></span> {players[0].name} ({players[0].won})</p>
            <p className='italic'>vs</p>
            <p className='font-bold'><span className='p2icon h-4 w-4 inline-flex'></span> {players[1].name} ({players[1].won})</p>
            {isPlaying && <button className='btn uppercase' onClick={isTurn ? handleSurrender : handleSendAgain}>{isTurn ? "Surrender" : "Send Again"}</button>}
        </section>
    )
}

export default Status
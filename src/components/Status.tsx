import { useC4Context } from '~/context/C4Context'


const Status = (props: StatusProps) => {
    const { players, playerAddr, setMoves, setPlayers, setLastMove } = useC4Context();
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
            const summary = newPlayers[0].name + " (" + newPlayers[0].won + ") " + " vs " + " (" + newPlayers[1].won + ") " + newPlayers[1].name

            const part = newPlayers[0].won + newPlayers[1].won
            const text = newPlayers[0].name + " vs " + newPlayers[1].name + " (" + part + ")"
            window.webxdc.sendUpdate({ payload: { move: -1, moves: [] as number[], players: newPlayers }, info: text, summary: summary }, text)
        }
    }
    return (
        <section className={props.blur ? 'status blur' : 'status'}>
            <p className="font-bold"><span className='p1icon h-4 w-4 inline-flex'></span> {players[0].name} ({players[0].won})</p>
            <p className='italic'>vs</p>
            <p className='font-bold'><span className='p2icon h-4 w-4 inline-flex'></span> {players[1].name} ({players[1].won})</p>
            {isPlaying && <button className={isTurn ? 'btn uppercase' : 'btn-disabled uppercase'} onClick={handleSurrender}>Surrender</button>}
        </section>
    )
}

export default Status
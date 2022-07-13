import { Player } from "connect4-engine"
import { useC4Context } from '~/context/C4Context'

interface WinnerProps {
    winner: Player
    players: WebxdcPlayer[]
}

const WinnerScreen = (props: WinnerProps) => {
    const { players, setPlayers, setMoves, setLastMove } = useC4Context();
    const newGame = () => {
        setMoves([])
        setLastMove(-1)
        const newPlayers = [players[1], players[0]]
        newPlayers[0].color = '#000'
        newPlayers[1].color = '#FFF'

        if (props.winner.color === '#000') {
            newPlayers[1].won++
        } else if (props.winner.color === '#FFF') {
            newPlayers[0].won++
        }

        setPlayers(newPlayers)
        const summary = newPlayers[0].name + " (" + newPlayers[0].won + ") " + " vs " + " (" + newPlayers[1].won + ") " + newPlayers[1].name

        const part = newPlayers[0].won + newPlayers[1].won + 1
        const text = newPlayers[0].name + " vs " + newPlayers[1].name + " (" + part + ")"
        window.webxdc.sendUpdate({ payload: { move: -1, moves: [] as number[], players: newPlayers }, info: text, summary: summary }, text)
    }
    return (
        <div className="winner" onClick={newGame}>
            <span className={props.winner.color === '#000' ? "red" : "yellow"}>
                {props.winner.color === '#000' ? props.players[0].name : props.players[1].name}
            </span>
        </div>
    )
}

export default WinnerScreen
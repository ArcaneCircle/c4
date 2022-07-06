import { Player } from "connect4-engine"

interface WinnerProps {
    winner: Player
    players: WebxdcPlayer[]
}

const WinnerScreen = (props: WinnerProps) => {
    return (
        <div className="winner"><span className={props.winner.color === '#000' ? "red" : "yellow"}>{props.winner.color === '#000' ? props.players[0].name : props.players[1].name}</span></div>
    )
}

export default WinnerScreen
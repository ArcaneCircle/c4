import { useC4Context } from '~/context/C4Context'


const Status = (props: StatusProps) => {
    const { players, playerAddr } = useC4Context();
    const isPlaying = players.some((p) => p.addr === playerAddr)
    const isTurn = isPlaying ? props.color === players.find(p => p.addr === playerAddr)?.color : false

    return (
        <section className={props.blur ? 'status blur' : 'status'}>
            <p className="font-bold"><span className='p1icon h-4 w-4 inline-flex'></span> {players[0].name} ({players[0].won})</p>
            <p className='italic'>vs</p>
            <p className='font-bold'><span className='p2icon h-4 w-4 inline-flex'></span> {players[1].name} ({players[1].won})</p>
            {isTurn && <button className='btn uppercase'>Surrender</button>}
        </section>
    )
}

export default Status
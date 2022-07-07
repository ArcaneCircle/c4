import { useC4Context } from '~/context/C4Context'


const Status = (props: HeaderProps) => {
    const { players } = useC4Context();
    return (
        <section className={props.blur ? 'status blur' : 'status'}>
            <p className="font-bold"><span className='p1icon h-4 w-4 inline-flex'></span> {players[0].name} ({players[0].won})</p>
            <p className='italic'>vs</p>
            <p className='font-bold'><span className='p2icon h-4 w-4 inline-flex'></span> {players[1].name} ({players[1].won})</p>
            <button className='btn'>Resign</button>
        </section>
    )
}

export default Status
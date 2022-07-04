import { useC4Context } from '~/context/C4Context'

interface MainScreenProps {
  onClick: () => void
  children?: React.ReactElement
}

const MainScreen = (props: MainScreenProps) => {
  const { players } = useC4Context()
  return (
    <div className="mainscreen" >
      <h1>Connect Four</h1>
      <p>This is the classic Connect Four game</p>
      {/* <p>Once there are two players, you could start playing</p> */}
      {players.length > 0 && <h2>Players</h2>}
      {players.length === 2 && <button onClick={props.onClick} >Click to start</button>}
    </div>
  )
}

export default MainScreen

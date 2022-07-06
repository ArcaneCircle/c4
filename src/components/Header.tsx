import { useC4Context } from '~/context/C4Context'

const Header = (props: HeaderProps) => {
  const { players, moves, playerAddr } = useC4Context()
  const isFirstPlayerTurn = moves.length % 2 === 0
  return (
    <header className={props.blur ? "blur" : ""}>
      <div className={isFirstPlayerTurn ? 'player1' : 'player2'}></div>
      <h2 >{isFirstPlayerTurn ? players[0].addr === playerAddr ? 'Your' : players[0].name + '\'s' : players[1].addr === playerAddr ? 'Your' : players[1].name + '\'s'} turn</h2>
    </header>
  )
}

export default Header

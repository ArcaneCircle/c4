import { useC4Context } from '~/context/C4Context'

const Header = (props: HeaderProps) => {
  const { players, moves } = useC4Context()
  const isFirstPlayerTurn = moves.length % 2 === 0
  return (
    <header className={props.blur ? "blur" : ""}>
      <div className={isFirstPlayerTurn ? 'player1' : 'player2'}></div>
      <h2>{isFirstPlayerTurn ? players[0].name ?? 'Player 1' : players[1].name ?? 'Player 2'}&apos;s turn</h2>
    </header>
  )
}

export default Header

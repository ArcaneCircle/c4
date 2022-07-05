import { useC4Context } from '~/context/C4Context'

const Header = () => {
  const { activePlayer, players } = useC4Context()
  return (
    <div className="header">
      <div className={activePlayer.color === '#000' ? 'player1' : 'player2'}></div>
      <h2>{activePlayer.color === players[0].color ? players[0].name ?? 'Player 1' : players[1].name ?? 'Player 2'}&apos;s turn</h2>
    </div>
  )
}

export default Header

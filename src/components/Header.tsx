import { useC4Context } from '~/context/C4Context'

const Header = () => {
  const { game, activePlayer, setActivePlayer, players } = useC4Context()
  useEffect(() => {
    setActivePlayer(game.state.playing)
  }, [game.state.playing])
  return (
        <div className="header">
            <div className={activePlayer.color === '#000' ? 'player1' : 'player2'}></div>
            <h2>{activePlayer.color === '#000' ? players[0] ?? 'Player 1' : players[1] ?? 'Player 2'}&apos;s turn</h2>
        </div>
  )
}

export default Header

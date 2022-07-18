import Ball from './Ball'
import Header from './Header'
import { Connect4, Player } from 'connect4-engine'
import { C4Context } from '~/context/C4Context'
import WinnerScreen from './WinnerScreen'
import Status from './Status'

const Board = () => {
  return (
    <C4Context.Consumer>
      {({ playerAddr, playerName, players, gameArray, setGameArray, moves, setMoves, lastMove }) => {
        const game = new Connect4([new Player('#000'), new Player('#FFF')])
        moves.map(move => game.insert(move))
        let lastMoveIndex = lastMove
        for (let i = 0; i < 6; i++) {
          if (game.state.board[lastMove + 7 * i] !== null) {
            lastMoveIndex = lastMove + 7 * i
            break
          }
        }

        return <>
          <Header blur={!!game.state.winner} />
          <section className={game.state.winner ? 'board blur' : 'board'}>
            {gameArray.map((cell, index) => {
              return <Ball key={index} onClick={() => {
                const col = game.getColumnByIndex(index)
                const isPlaying = players.some((p) => p.addr === playerAddr)
                const isTurn = isPlaying ? game.state.playing.color === players.find(p => p.addr === playerAddr)?.color : false

                if (isTurn && game.insert(col)) {
                  const newMoves = [...moves, col]
                  setMoves(newMoves)
                  const nextPlayer = players.find(p => p.addr !== playerAddr)
                  const text = game.state.winner ? "DeltaConnect: " + playerName + " won!" : "DeltaConnect: " + nextPlayer?.name + "'s turn"
                  window.webxdc.sendUpdate({ payload: { move: col, moves: newMoves, players }, info: text }, text)
                  setGameArray(game.state.board)
                }
              }}>{game.state.board[index] === null ? <div></div> : <div className={game.state.board[index].color === '#000' ? index === lastMoveIndex ? 'dropdown player1' : 'player1' : index === lastMoveIndex ? 'dropdown player2' : 'player2'}></div>}</Ball>
            })}
          </section>
          <Status blur={!!game.state.winner} color={game.state.playing.color} />
          {game.state.winner && <WinnerScreen winner={game.state.winner} players={players} />}
        </>
      }}
    </C4Context.Consumer>
  )
}

export default Board

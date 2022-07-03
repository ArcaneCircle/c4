/* eslint-disable no-console */
import Ball from './Ball'
import { C4Context } from '~/context/C4Context'

const Board = () => {
  return (
    <C4Context.Consumer>
      {({ game, gameArray, setGameArray }) => {
        // console.log(gameArray.length)
        return <section className="board">
          {gameArray.map((cell, index) => {
            return <Ball key={index} onClick={() => {
              const col = game.getColumnByIndex(index)
              console.log(col)
              if (game.insert(col))
                console.log('se pudo jugar\n', game.state.board)
              setGameArray(game.state.board)
            }}>{gameArray[index] === null ? <div>vacía</div> : <div className={gameArray[index].color === '#000' ? 'player1' : 'player2'}>{gameArray[index].color}</div>}</Ball>
          })}
        </section>
      }}
    </C4Context.Consumer>
  )
}

export default Board

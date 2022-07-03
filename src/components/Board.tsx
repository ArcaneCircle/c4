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
            }}><p>{gameArray[index] === null ? 'vacía' : 'no vacía'}</p></Ball>
          })}
        </section>
      }}
    </C4Context.Consumer>
  )
}

export default Board

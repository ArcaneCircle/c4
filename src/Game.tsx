/* eslint-disable no-console */
// import React, { useEffect, useState } from 'react'
import { Connect4, Connect4GameStatus, Player } from 'connect4-engine'
import Board from './components/Board'

/**
 * Game is the main React component.
 */
export const Game: React.FC<{}> = () => {
  const game = new Connect4([new Player('#000'), new Player('#FFF')])
  // const [activePlayer, setActivePlayer] = useState(game.state.playing)
  const [won, setWon] = useState(false)
  const [started, setStarted] = useState(false)

  console.log(game.state.board)
  console.log(game.state.status === Connect4GameStatus.IN_PROGRESS)

  // function gameLoop() {
  //   console.log(logic.getChipsPlayed(activePlayer))
  //   console.log(logic.didWin(activePlayer))
  //   while (true) {
  //     const column = promptActivePlayerForMove()
  //     if (!logic.canPlaceChip(column))
  //       continue

  //     logic.placeChip(activePlayer, column)
  //     if (logic.didWin(activePlayer)) {
  //       setWon(true)
  //       break
  //     }

  //     swapActivePlayer()
  //   }
  // }

  // function promptActivePlayerForMove(): number {
  //   return 0
  // }

  // function swapActivePlayer() {
  //   if (activePlayer === Player.One)
  //     setActivePlayer(Player.Two)
  //   else
  //     setActivePlayer(Player.One)
  // }

  // function onClickOverlay() {
  //   overlay = false
  //   gameLoop()
  // }

  return (
    <>
      <div className="mycontainer"
        onClick={() => setStarted(true)}
      >
        <h2 className="overlay__text">
          Connect 4
        </h2>
        {started && <Board />}
        {won && <div id="game-over" onClick={() => setWon(false)}>Game Over</div>}
      </div>
    </>
  )
}

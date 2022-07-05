/* eslint-disable no-console */
// import React, { useEffect, useState } from 'react'
import Board from './components/Board'
import Header from './components/Header'
import MainScreen from './components/MainScreen'
// import { Connect4 } from 'connect4-engine'
import { useC4Context } from '~/context/C4Context'
import { ReceivedStatusUpdate } from 'webxdc'

export const Game: React.FC<{}> = () => {
  const { setPlayers, players, moves, setMoves } = useC4Context()
  useEffect(() => {
    console.log('useEffect triggered')
    window.webxdc.setUpdateListener((update: ReceivedStatusUpdate<C4Update>) => {
      console.log("incomming update")
      const { moves: newMoves, players: newPlayers } = update.payload
      if (newMoves && moves.length < newMoves.length) {
        setMoves(newMoves)
      }
      if (players.length < newPlayers.length) setPlayers(newPlayers)
    })
  }, [])

  const [started, setStarted] = useState(players.length > 1)
  return (
    <>
      <div className="mycontainer">
        {started
          ? <>
            <Board />
          </>
          : <MainScreen onClick={() => setStarted(true)} />}
      </div>
    </>
  )
}

/* eslint-disable no-console */
// import React, { useEffect, useState } from 'react'
import Board from './components/Board'
import Header from './components/Header'
import MainScreen from './components/MainScreen'
// import { Connect4 } from 'connect4-engine'
import { useC4Context } from '~/context/C4Context'
import { ReceivedStatusUpdate } from 'webxdc'

export const Game: React.FC<{}> = () => {
  const { setGameArray } = useC4Context()
  useEffect(() => {
    console.log('useEffect triggered')
    window.webxdc.setUpdateListener((update: ReceivedStatusUpdate<C4Update>) => {
      const { game } = update.payload
      if (game) {
        setGameArray(game.state.board)
      }
    })
  }, [])

  const [started, setStarted] = useState(false)
  return (
    <>
      <div className="mycontainer">
        {started
          ? <>
            <Header />
            <Board />
          </>
          : <MainScreen onClick={() => setStarted(true)} />}
      </div>
    </>
  )
}

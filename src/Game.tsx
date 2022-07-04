/* eslint-disable no-console */
// import React, { useEffect, useState } from 'react'
import Board from './components/Board'
import Header from './components/Header'
import MainScreen from './components/MainScreen'

export const Game: React.FC<{}> = () => {
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

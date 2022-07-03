/* eslint-disable no-console */
// import React, { useEffect, useState } from 'react'
import Board from './components/Board'
import Header from './components/Header'

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
          : <div className="mainscreen" onClick={() => setStarted(true)}>Click to start</div>}
      </div>
    </>
  )
}

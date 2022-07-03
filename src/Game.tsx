/* eslint-disable no-console */
// import React, { useEffect, useState } from 'react'
import Board from './components/Board'

export const Game: React.FC<{}> = () => {
  const [started, setStarted] = useState(false)

  return (
    <>
      <div className="mycontainer">
        {started
          ? <Board />
          : <div className="mainscreen" onClick={() => setStarted(true)}>Click to start</div>}
      </div>
    </>
  )
}

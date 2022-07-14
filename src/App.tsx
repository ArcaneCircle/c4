import React from 'react'
import { Game } from '~/Game'
import { C4Provider } from '~/context/C4Context'

/**
 * App is the root React component.
 */
export const App: React.FC<{}> = () => {
  return (
    <C4Provider>
      <Game />
    </C4Provider>
  )
}

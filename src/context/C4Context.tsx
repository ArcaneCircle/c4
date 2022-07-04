import React, { createContext, useContext, useState } from 'react'
import { Connect4, Player } from 'connect4-engine'

interface WebxdcPlayer {
  name: string
  addr: string
}
interface C4ContextProps {
  game: Connect4
  playerName: string
  playerAddr: string
  columnSelected: number
  setColumnSelected: React.Dispatch<React.SetStateAction<number>>
  activePlayer: Player
  setActivePlayer: React.Dispatch<React.SetStateAction<Player>>
  players: WebxdcPlayer[]
  setPlayers: React.Dispatch<React.SetStateAction<WebxdcPlayer[]>>
  gameArray: Player[]
  setGameArray: React.Dispatch<React.SetStateAction<Player[]>>
  won: boolean
  setWon: React.Dispatch<React.SetStateAction<boolean>>
}

const game = new Connect4([new Player('#000'), new Player('#FFF')])

const playerName = window.webxdc.selfName;
const playerAddr = window.webxdc.selfAddr;

export const C4Context = createContext<C4ContextProps>({
  game,
  playerName,
  playerAddr,
  columnSelected: 0,
  setColumnSelected: () => { },
  activePlayer: new Player('#000'),
  setActivePlayer: () => { },
  players: [],
  setPlayers: () => { },
  gameArray: [],
  setGameArray: () => { },
  won: false,
  setWon: () => { },
})

interface C4ProviderProps {
  children: React.ReactElement
}

export const C4Provider = ({ children }: C4ProviderProps) => {
  const [columnSelected, setColumnSelected] = useState<number>(0)
  const [gameArray, setGameArray] = useState<Player[]>(game.state.board)
  const [activePlayer, setActivePlayer] = useState<Player>(game.state.playing)
  const [won, setWon] = useState<boolean>(false)
  const [players, setPlayers] = useState<WebxdcPlayer[]>([])

  return (
    <C4Context.Provider value={
      {
        game,
        playerName,
        playerAddr,
        columnSelected,
        setColumnSelected,
        activePlayer,
        setActivePlayer,
        players,
        setPlayers,
        gameArray,
        setGameArray,
        won,
        setWon,
      }
    }>
      {children}
    </C4Context.Provider>
  )
}

export const useC4Context = (): C4ContextProps => useContext(C4Context)

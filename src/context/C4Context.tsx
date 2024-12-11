import React, { createContext, useContext, useState } from "react";
import { Connect4, Player } from "connect4-engine";

const game = new Connect4([new Player("#000"), new Player("#FFF")]);

const playerName = window.webxdc.selfName;
const playerAddr = window.webxdc.selfAddr;

export const C4Context = createContext<C4ContextProps>({
  game,
  playerName,
  playerAddr,
  lastMove: -1,
  setLastMove: () => {},
  moves: [],
  setMoves: () => {},
  columnSelected: 0,
  setColumnSelected: () => {},
  activePlayer: new Player("#000"),
  setActivePlayer: () => {},
  players: [],
  setPlayers: () => {},
  gameArray: [],
  setGameArray: () => {},
  won: false,
  setWon: () => {},
});

interface C4ProviderProps {
  children: React.ReactElement;
}

export const C4Provider = ({ children }: C4ProviderProps) => {
  const [columnSelected, setColumnSelected] = useState<number>(0);
  const [lastMove, setLastMove] = useState<number>(-1);
  const [moves, setMoves] = useState<number[]>([]);
  const [gameArray, setGameArray] = useState<Player[]>(game.state.board);
  const [activePlayer, setActivePlayer] = useState<Player>(game.state.playing);
  const [won, setWon] = useState<boolean>(false);
  const [players, setPlayers] = useState<WebxdcPlayer[]>([]);

  return (
    <C4Context.Provider
      value={{
        game,
        playerName,
        playerAddr,
        lastMove,
        setLastMove,
        moves,
        setMoves,
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
      }}
    >
      {children}
    </C4Context.Provider>
  );
};

export const useC4Context = (): C4ContextProps => useContext(C4Context);

import { useC4Context } from "~/context/C4Context";
import { SendingStatusUpdate } from "@webxdc/types";

const MainScreen = (props: MainScreenProps) => {
  const [clicked, setClicked] = useState(false);
  const { players, playerAddr, playerName } = useC4Context();
  const isIncluded = players.some((p) => p.addr === playerAddr);
  const handleJoin = () => {
    const newPlayers = [
      ...players,
      {
        name: playerName,
        addr: playerAddr,
        color: players.length === 0 ? "#000" : "#FFF",
        won: 0,
      },
    ];
    setClicked(true);
    const update: SendingStatusUpdate<C4Update> = {
      payload: { move: -1, moves: [], players: newPlayers, type: "join" },
    };
    if (players.length > 0) {
      const text = playerName + " wants to join the game";
      update.notify = { [players[0].addr]: text };
    }
    window.webxdc.sendUpdate(update, "");
  };
  return (
    <div className="mainscreen">
      <span className="player1"></span>
      <h1>Connect4</h1>
      <p>Hi, {playerName}! This is a clon of the classic Connect Four game</p>
      {players.length > 0 && (
        <>
          <h2>Players:</h2>
          <ul>
            {players.map((player) => (
              <li key={player.addr}>{player.name}</li>
            ))}
          </ul>
        </>
      )}
      {players.length < 2 && !isIncluded && !clicked ? (
        <button onClick={handleJoin}>Join</button>
      ) : (
        <Waiting first={players[0]?.addr === playerAddr} />
      )}
      <span className="player2"></span>
    </div>
  );
};

const Waiting = (props: WaitingProps) =>
  props.first ? (
    <p>Waiting for another player...</p>
  ) : (
    <p>Waiting for the other player to accept...</p>
  );

export default MainScreen;

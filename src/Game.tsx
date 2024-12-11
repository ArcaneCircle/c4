import Board from "~/components/Board";
import MainScreen from "~/components/MainScreen";
import { useC4Context } from "~/context/C4Context";
import { ReceivedStatusUpdate } from "@webxdc/types";

import { editName } from "~/utils/editName";

export const Game: React.FC<{}> = () => {
  const { setPlayers, players, setMoves, setLastMove, playerAddr } =
    useC4Context();
  const [started, setStarted] = useState(false);

  useEffect(() => {
    window.webxdc.setUpdateListener(
      (update: ReceivedStatusUpdate<C4Update>) => {
        if (
          update.serial &&
          update.max_serial &&
          update.serial === update.max_serial
        ) {
          const {
            move: newMove,
            moves: newMoves,
            players: newPlayers,
          } = update.payload;
          setMoves(newMoves);
          setLastMove(newMove);
          if (update.payload.type) {
            if (newPlayers.length === 2) setPlayers([newPlayers[0]]);
            if (newPlayers.length === 1 && newPlayers[0].addr === playerAddr) {
              const summary =
                editName(newPlayers[0].name, 12) +
                " is waiting for another player";
              window.webxdc.sendUpdate(
                {
                  payload: { move: -1, moves: [], players: newPlayers },
                  info: summary,
                  summary,
                  notify: { "*": summary },
                },
                "",
              );
            } else if (
              newPlayers.length === 2 &&
              newPlayers[0].addr === playerAddr
            ) {
              const summary =
                editName(newPlayers[0].name, 8) +
                " vs " +
                editName(newPlayers[1].name, 8);
              const info = "Game started! " + summary;
              window.webxdc.sendUpdate(
                {
                  payload: { move: -1, moves: [], players: newPlayers },
                  info,
                  summary,
                  notify: { [newPlayers[1].addr]: "Game started! " + summary },
                },
                "",
              );
            }
          } else {
            setPlayers(newPlayers);
          }
        }
      },
    );
  }, []);

  useEffect(() => {
    if (players.length > 1) {
      setStarted(true);
    }
  }, [players.length]);

  return (
    <>
      <div className="mycontainer">
        {started ? (
          <>
            <Board />
          </>
        ) : (
          <MainScreen onClick={() => setStarted(true)} />
        )}
      </div>
    </>
  );
};

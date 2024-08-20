import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

import Player from "@/@types/Player";

interface GameProviderProps {
  children: ReactNode;
}

interface GameContextProps {
  players: Player[];
  initialLifes: number;
  setInitialLifes: Dispatch<SetStateAction<number>>;
  includePlayer: ({ name, lifes }: Player) => void;
  increaseInitialLifes: () => void;
  decreaseInitialLifes: () => void;
  restoreAllPlayerLifes: () => void;
  clearAllPlayers: () => void;
  changeLifes: ({
    amount,
    playerName,
    option,
  }: {
    amount: number;
    playerName: string;
    option: "increase" | "decrease";
  }) => void;
}

export const GameContext = createContext({} as GameContextProps);

export function GameProvider({ children }: GameProviderProps) {
  const [players, setPlayers] = useState<Player[]>([]);
  const [initialLifes, setInitialLifes] = useState(3);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Marca que o componente foi montado no cliente
    setIsMounted(true);

    // Carrega os jogadores do localStorage quando o componente for montado
    const storage = localStorage.getItem("fodinha-players");
    const storedPlayers = storage ? JSON.parse(storage as string) : [];
    setPlayers(storedPlayers);
  }, []);

  useEffect(() => {
    // Atualiza o localStorage apenas se o componente estiver montado
    if (isMounted)
      localStorage.setItem("fodinha-players", JSON.stringify(players));
  }, [players, isMounted]);

  function includePlayer({ name, lifes }: Player) {
    if (!name) return alert("Forneça um nome!");
    if (name.length > 30)
      return alert("Nome muito grande! Máximo 30 caracteres.");

    setPlayers((previousPlayers: Player[]) => [
      ...previousPlayers,
      { name, lifes },
    ]);
  }

  function changeLifes({
    amount,
    playerName,
    option,
  }: {
    amount: number;
    playerName: string;
    option: "increase" | "decrease";
  }) {
    setPlayers((previousPlayers: Player[]) => {
      const updatedPlayers: Player[] = previousPlayers.map(
        (currentPlayer: Player) => {
          if (currentPlayer.name === playerName) {
            return {
              ...currentPlayer,
              lifes:
                option === "increase"
                  ? Math.min(currentPlayer.lifes + amount, initialLifes)
                  : currentPlayer.lifes - amount,
            };
          }
          return currentPlayer;
        }
      );
      return updatedPlayers;
    });
  }

  function clearAllPlayers() {
    const response: boolean = confirm(
      "Tem certeza que deseja excluír todos os jogadores?"
    );
    if (response) setPlayers([]);
  }

  function restoreAllPlayerLifes() {
    setPlayers((previousPlayers: Player[]) => {
      const allPlayersRestoredLifes: Player[] = previousPlayers.map(
        (currentPlayer: Player) => {
          currentPlayer.lifes = initialLifes;
          return currentPlayer;
        }
      );
      return allPlayersRestoredLifes;
    });
  }

  function increaseInitialLifes() {
    if (initialLifes >= 8) return alert("Permitido no máximo 8 vidas!");
    setInitialLifes((lifes) => lifes + 1);
  }

  function decreaseInitialLifes() {
    if (initialLifes <= 1) return alert("Minímo de 1 vida permitida!");
    setInitialLifes((lifes) => lifes - 1);
  }

  return (
    <GameContext.Provider
      value={{
        players,
        initialLifes,
        changeLifes,
        includePlayer,
        clearAllPlayers,
        setInitialLifes,
        increaseInitialLifes,
        decreaseInitialLifes,
        restoreAllPlayerLifes,
      }}
    >
      {isMounted ? children : null} {/* Renderiza apenas após a montagem */}
    </GameContext.Provider>
  );
}

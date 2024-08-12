import Input from "../UI/Input";
import Button from "../UI/Button";
import { ChangeEvent, useContext } from "react";
import { GameContext } from "@/context/GameContext";

export default function Header() {
  const { playerName, initialLifes, setPlayerName, includePlayer } =
    useContext(GameContext);
  return (
    <div className="w-full flex justify-center items-center gap-4 py-6 px-4">
      <Input
        placeholder="Nome do Jogador"
        value={playerName}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setPlayerName(e.target.value)
        }
      />
      <Button
        onClick={() => includePlayer({ name: playerName, lifes: initialLifes })}
      >
        Adicionar
      </Button>
    </div>
  );
}

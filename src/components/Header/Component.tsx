import { GameContext } from "@/context/GameContext";
import { ChangeEvent, useContext, useState } from "react";

import Button from "../UI/Button";
import Input from "../UI/Input";

export default function Header() {
  const [playerName, setPlayerName] = useState<string>("");
  const { initialLifes, includePlayer } = useContext(GameContext);

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
        onClick={() => {
          includePlayer({ name: playerName, lifes: initialLifes });
          setPlayerName("");
        }}
      >
        Adicionar
      </Button>
    </div>
  );
}

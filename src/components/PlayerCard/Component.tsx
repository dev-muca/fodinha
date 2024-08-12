import { useContext } from "react";
import { twMerge } from "tailwind-merge";
import { TiHeartFullOutline } from "react-icons/ti";

import { GameContext } from "@/context/GameContext";

import Player from "@/@types/Player";

export default function PlayerCard({ name, lifes }: Player) {
  const { changeLifes } = useContext(GameContext);
  const defaultClass = twMerge(
    "w-full flex flex-row justify-between items-center gap-2 text-xl font-medium h-10 py-8",
    lifes > 0 ? "text-white" : "text-red-600"
  );

  return (
    <li className={defaultClass}>
      <button
        onClick={() =>
          changeLifes({ amount: 1, playerName: name, option: "increase" })
        }
        className={twMerge(lifes < 1 && "line-through")}
      >
        {name}:
      </button>

      <button
        onClick={() =>
          changeLifes({ amount: 1, playerName: name, option: "decrease" })
        }
        className="w-full text-xl flex flex-row justify-end"
      >
        {Array.from({ length: lifes }, (_, i) => (
          <span key={i}>
            <TiHeartFullOutline size={22} />
          </span>
        ))}
      </button>
    </li>
  );
}

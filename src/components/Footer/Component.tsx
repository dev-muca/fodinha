import { GrFormAdd, GrFormSubtract } from "react-icons/gr";
import { FaHandHoldingHeart, FaUserAltSlash } from "react-icons/fa";

import Button from "../UI/Button";
import { useContext } from "react";
import { GameContext } from "@/context/GameContext";

export default function Footer() {
  const {
    initialLifes,
    increaseInitialLifes,
    decreaseInitialLifes,
    restoreAllPlayerLifes,
    clearAllPlayers,
  } = useContext(GameContext);
  return (
    <footer className="w-full absolute bottom-0 p-4">
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-4">
          <Button onClick={clearAllPlayers}>
            <FaUserAltSlash size={18} className="bg-white" />
          </Button>
          <Button onClick={restoreAllPlayerLifes}>
            <FaHandHoldingHeart size={18} className="bg-white" />
          </Button>
        </div>
        <div className="flex items-center gap-6">
          <Button onClick={decreaseInitialLifes}>
            <GrFormSubtract size={20} className="bg-white" />
          </Button>
          <p className="text-white text-xl font-medium">{initialLifes}</p>
          <Button onClick={increaseInitialLifes}>
            <GrFormAdd size={20} className="bg-white" />
          </Button>
        </div>
      </div>
    </footer>
  );
}

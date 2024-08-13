import { useContext } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PlayerCard from "@/components/PlayerCard";
import Title from "@/components/Title";
import { GameContext } from "@/context/GameContext";

export default function Home() {
  const { players } = useContext(GameContext);
  return (
    <>
      <Title />

      <Header />
      <ul className="w-full px-6 py-4 divide-y-[1px]">
        {players.length > 0 &&
          players.map((jogador, index) => (
            <PlayerCard key={index} name={jogador.name} lifes={jogador.lifes} />
          ))}
      </ul>
      <Footer />
    </>
  );
}

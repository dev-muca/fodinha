import { twMerge } from "tailwind-merge";

import Menu from "@/components/Menu";
import Title from "@/components/Title";
import Button from "@/components/UI/Button";
import Container from "@/components/UI/Container";

import useTruco from "./hooks/useTruco";

export default function Fodinha() {
  const { ourAttemps, theirAttemps, changeAttemps } = useTruco();

  const buttonsConfig = [
    {
      className: "bg-inherit text-white opacity-30",
      text: "-1",
      who: "our",
      amount: -1,
    },
    {
      className: "bg-inherit text-white opacity-30",
      text: "-1",
      who: "their",
      amount: -1,
    },
    {
      className: "bg-inherit bg-white",
      text: "Truco (+3)",
      who: "our",
      amount: 3,
    },
    {
      className: "bg-inherit bg-white",
      text: "Truco (+3)",
      who: "their",
      amount: 3,
    },
    {
      className: "bg-inherit text-white",
      text: "Seis! (+6)",
      who: "our",
      amount: 6,
    },
    {
      className: "bg-inherit text-white",
      text: "Seis! (+6)",
      who: "their",
      amount: 6,
    },
    {
      className: "bg-inherit text-white",
      text: "Nove! (+9)",
      who: "our",
      amount: 9,
    },
    {
      className: "bg-inherit text-white",
      text: "Nove! (+9)",
      who: "their",
      amount: 9,
    },
    {
      className: "bg-inherit text-white",
      text: "Doze! (+12)",
      who: "our",
      amount: 12,
    },
    {
      className: "bg-inherit text-white",
      text: "Doze! (+12)",
      who: "their",
      amount: 12,
    },
  ];

  return (
    <Container>
      <Title text="Marcador de Truco 🃏" />
      <Menu />
      <div className="grid grid-cols-2 grid-rows-2 justify-center items-center px-8 text-center text-white">
        <h3 className="text-2xl">Nós</h3>
        <h3 className="text-2xl">Eles</h3>
        <h3
          className={twMerge(
            "text-6xl font-bold p-8",
            ourAttemps == 11 && "text-red-600"
          )}
          onClick={() => changeAttemps({ who: "our", amount: 1 })}
        >
          {ourAttemps}
        </h3>
        <h3
          className={twMerge(
            "text-6xl font-bold p-8",
            theirAttemps == 11 && "text-red-600"
          )}
          onClick={() => changeAttemps({ who: "their", amount: 1 })}
        >
          {theirAttemps}
        </h3>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 justify-center items-center gap-8 px-8 mt-12 text-center text-white">
        {buttonsConfig.map(({ className, text, who, amount }, index) => (
          <Button
            key={index}
            className={className}
            onClick={() => changeAttemps({ who, amount })}
          >
            {text}
          </Button>
        ))}
      </div>
    </Container>
  );
}

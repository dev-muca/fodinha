import { twMerge } from "tailwind-merge";

import Menu from "@/components/Menu";
import Title from "@/components/Title";
import Button from "@/components/UI/Button";

import useTruco from "./hooks/useTruco";

export default function Fodinha() {
  const { ourAttemps, theirAttemps, increaseAttemps } = useTruco();

  return (
    <>
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
          onClick={() => increaseAttemps({ who: "our", amount: 1 })}
        >
          {ourAttemps}
        </h3>
        <h3
          className={twMerge(
            "text-6xl font-bold p-8",
            theirAttemps == 11 && "text-red-600"
          )}
          onClick={() => increaseAttemps({ who: "their", amount: 1 })}
        >
          {theirAttemps}
        </h3>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 justify-center items-center gap-8 px-8 mt-20 text-center text-white">
        <Button onClick={() => increaseAttemps({ who: "our", amount: 3 })}>
          Truco (+3){" "}
        </Button>
        <Button onClick={() => increaseAttemps({ who: "their", amount: 3 })}>
          Truco (+3)
        </Button>
        <Button
          className="bg-inherit text-white"
          onClick={() => increaseAttemps({ who: "our", amount: 6 })}
        >
          Seis! (+6)
        </Button>
        <Button
          className="bg-inherit text-white"
          onClick={() => increaseAttemps({ who: "their", amount: 6 })}
        >
          Seis! (+6)
        </Button>
        <Button
          className="bg-inherit text-white"
          onClick={() => increaseAttemps({ who: "our", amount: 9 })}
        >
          Nove! (+9)
        </Button>
        <Button
          className="bg-inherit text-white"
          onClick={() => increaseAttemps({ who: "their", amount: 9 })}
        >
          Nove! (+9)
        </Button>
        <Button
          className="bg-inherit text-white"
          onClick={() => increaseAttemps({ who: "our", amount: 12 })}
        >
          Doze! (+12)
        </Button>
        <Button
          className="bg-inherit text-white"
          onClick={() => increaseAttemps({ who: "their", amount: 12 })}
        >
          Doze! (+12)
        </Button>
      </div>
    </>
  );
}

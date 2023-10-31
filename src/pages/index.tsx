import { ChangeEvent, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

interface Jogador {
  nome: string;
  vidas: number;
}

export default function Home() {
  const [vidasIniciais, setVidasIniciais] = useState(3);
  const [nome, setNome] = useState("");
  const [jogadores, setJogadores] = useState<Jogador[]>([]);

  useEffect(() => console.log(jogadores), [jogadores]);

  function adicionarJogador({ nome, vidas }: Jogador) {
    if (!nome.length) return alert("Forneça um nome!");
    if (nome.length > 30) return alert("Nome muito grande!");

    setJogadores((jogadoresAnteriores) => [...jogadoresAnteriores, { nome, vidas }]);

    setNome("");
  }

  function descontarVida(jogadorNome: string) {
    setJogadores((jogadoresAnteriores) => {
      const jogadoresAtualizados = jogadoresAnteriores.map((jogador) => {
        if (jogador.nome === jogadorNome) {
          return {
            ...jogador,
            vidas: jogador.vidas - 1,
          };
        }
        return jogador;
      });
      return jogadoresAtualizados;
    });
  }

  function restaurarVidas() {
    setJogadores((jogadoresAnteriores) => {
      const jogadoresVidasRestauradas = jogadoresAnteriores.map((jogador) => {
        jogador.vidas = vidasIniciais;
        return jogador;
      });
      return jogadoresVidasRestauradas;
    });
  }

  return (
    <>
      <h1 className="w-full text-center text-3xl font-medium mt-8 text-white">Marcador de Fodinha 👌</h1>
      <hr className="mt-8" />
      <div className="w-full flex justify-center items-center gap-4 py-6 px-4">
        <input
          className="w-full border rounded px-2 py-1 outline-white text-white"
          placeholder="Nome do Jogador"
          value={nome}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setNome(e.target.value)}
        />
        <button
          className="rounded border bg-slate-600 hover:bg-slate-400 px-2 py-1 text-white"
          onClick={() => adicionarJogador({ nome: nome, vidas: vidasIniciais })}
        >
          Adicionar
        </button>
      </div>
      <ul className="w-full px-6 py-4 divide-y-[1px]">
        {jogadores.length > 0 &&
          jogadores.map((jogador, index) => (
            <button
              key={index}
              className={twMerge(
                "w-full flex flex-row justify-between items-center gap-2 text-xl font-medium h-10 py-8",
                jogador.vidas > 0 ? "text-white" : "text-red-600"
              )}
              onClick={() => descontarVida(jogador.nome)}
            >
              <span className={twMerge(jogador.vidas > 0 ? null : "line-through")}>{jogador.nome}:</span>

              <span className="text-xl">
                {Array.from({ length: jogador.vidas }, (_, i) => (
                  <span key={i}> ♥ </span>
                ))}
              </span>
            </button>
          ))}
      </ul>
      <footer className="w-full absolute bottom-0 p-4">
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-4">
            <button
              className="rounded border-white border hover:bg-red-600 px-2 py-1 text-lg text-white"
              onClick={() => setJogadores([])}
            >
              💀
            </button>
            <button
              className="rounded border-white border hover:bg-green-600 px-2 py-1 text-lg text-white"
              onClick={() => restaurarVidas()}
            >
              💚
            </button>
          </div>
          <div className="flex items-center gap-6">
            <button
              className="rounded border-white border px-2 py-1 text-lg text-white"
              onClick={() =>
                vidasIniciais <= 1
                  ? alert("Não é possível jogar com menos de 1 vida!")
                  : setVidasIniciais((vidas) => vidas - 1)
              }
            >
              ➖
            </button>
            <p className="text-white text-xl font-medium">{vidasIniciais}</p>
            <button
              className="rounded border-white border px-2 py-1 text-lg text-white"
              onClick={() =>
                vidasIniciais >= 8 ? alert("Permitido no máximo 8 vidas!") : setVidasIniciais((vidas) => vidas + 1)
              }
            >
              ➕
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}

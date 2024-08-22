import { useState, useEffect } from "react";

export default function useTruco() {
  const [ourAttemps, setOurAttemps] = useState(0);
  const [theirAttemps, setTheirAttemps] = useState(0);

  useEffect(() => {
    if (ourAttemps >= 12 || theirAttemps >= 12) {
      alert(
        `• • • FIM DE JOGO • • •\n\n${
          ourAttemps > 11 ? "Nós vencemos!" : ""
        }\n${theirAttemps > 11 ? "Eles venceram!" : ""}`
      );
      clearAttemps();
    }
  }, [ourAttemps, theirAttemps]);

  function clearAttemps() {
    setTheirAttemps(0);
    setOurAttemps(0);
  }

  function changeAttemps({ who, amount }: { who: string; amount: number }) {
    if (who === "our") {
      setOurAttemps((currenteAttempsValue) => {
        return !currenteAttempsValue && amount == -1
          ? currenteAttempsValue
          : currenteAttempsValue + amount;
      });
    }
    if (who === "their") {
      setTheirAttemps((currenteAttempsValue) => {
        return !currenteAttempsValue && amount == -1
          ? currenteAttempsValue
          : currenteAttempsValue + amount;
      });
    }
    return;
  }

  return { ourAttemps, theirAttemps, changeAttemps };
}

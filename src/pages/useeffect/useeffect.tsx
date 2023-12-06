import { useState, useEffect } from "react";
import Topo from "@/components/Topo";

export default function useeffect() {
  const [cont, setCont] = useState<number>(0);
  const [aux, setAux] = useState<number>(0);

  useEffect(() => {
    alert("UseEffeect disparado!");
  }, [aux]);

  function add() {
    let a = aux;
    a++;
    setAux(a);
  }

  return (
    <div>
      <Topo />
      Teste useEffect
      <p>{`Valor de cont: ${cont}`}</p>
      <p>{`Valor de cont: ${cont}`}</p>
      <button onClick={add} className="btnPadrao">
        Adicionar 1
      </button>
    </div>
  );
}

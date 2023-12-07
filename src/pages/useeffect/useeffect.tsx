import { useState, useEffect } from "react";
import Topo from "@/components/Topo";
import Globais from "@/components/Globais";

export default function UseEffect() {
  const [cont, setCont] = useState<number>(0);
  const [aux, setAux] = useState<number>(0);

  useEffect(() => {
    alert("UseEffeect disparado!");
    Globais.canal = "CFBDrone";
    Globais.curso = "TypeScript";
    Globais.ano = "2099";
  }, []);

  function add() {
    let a = aux;
    a++;
    setAux(a);
  }

  return (
    <div>
      <div>
        <Topo />
        Teste useEffect
        <p>{`Valor de cont: ${cont}`}</p>
        <p>{`Valor de cont: ${cont}`}</p>
        <button onClick={add} className="btnPadrao">
          Adicionar 1
        </button>
      </div>
      <div>
        <p>{Globais.canal}</p>
        <p>{Globais.curso}</p>
        <p>{Globais.ano}</p>
      </div>
    </div>
  );
}

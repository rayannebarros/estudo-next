import { useEffect, useState } from "react";
import Topo from "@/components/Topo";
import Globais from "@/components/Globais";

const cursos = ["HTML", "React", "TypeScript", "CSS"];
const jcursos = [
  { curso: "HTML" },
  { curso: "CSS" },
  { curso: "React" },
  { curso: "TypeScript" },
];

export default function inputs() {
  const [nome, setNome] = useState<string>("");
  const [curso, setCurso] = useState<string>(cursos[0]);

  useEffect(() => {
    Globais.curso = "React";
  }, []);

  function fcursos() {
    return cursos.map((c: any) => {
      return <option value={c}>{c}</option>;
    });
  }

  const ccursos = jcursos.map((c: any) => {
    return <option value={c.curso}>{c.curso}</option>;
  });

  return (
    <div>
      <Topo />
      <div className="campoForm">
        <label>Nome</label>
        <input
          type="text"
          value={nome}
          onChange={(evt) => setNome(evt.target.value)}
        />
      </div>
      <div className="campoForm">
        <label>Curso</label>
        {/* <select value={curso} onChange={(evt) => setCurso(evt.target.value)}>
          <option value=""></option>
          <option value="HTML">HTML</option>
          <option value="React">React</option>
          <option value="TypeScript">TypeScript</option>
          <option value="CSS">CSS</option>
        </select> */}
        <select value={curso} onChange={(evt) => setCurso(evt.target.value)}>
          {ccursos}
        </select>
      </div>
      <div>Nome digitado: {nome}</div>
      <div>Curso escolhido: {curso}</div>
      <div>
        <p>{Globais.canal}</p>
        <p>{Globais.curso}</p>
        <p>{Globais.ano}</p>
      </div>
    </div>
  );
}

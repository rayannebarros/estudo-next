import Link from "next/link";

export default function Topo() {
  return (
    <div className="flex flex-col justify-between items-center bg-zinc-300 h-[130px]">
      <div>Logo</div>
      <div className="flex flex-col justify-center items-center">
        <div className="text-3xl">Curso de React Next JS</div>
        <div className="subtituloTopo">Projeto de Estudo</div>
      </div>
      <nav className="flex gap-5">
        <Link href={"/"}>Home</Link>
        <Link
          href={{
            pathname: "/produtos/produtos",
            query: { nome: "Rayanne", curso: "React Next" },
          }}
        >
          Produtos
        </Link>
        <Link href={"/teste/teste"}>Teste</Link>
        <Link href={"/usestate/usestate"}>State</Link>
        <Link href={"/inputs/inputs"}>Inputs</Link>
        <Link href={"/useeffect/useeffect"}>UseEffect</Link>
        <Link href={"/filtragem/filtragem"}>Filtragem</Link>
      </nav>
    </div>
  );
}

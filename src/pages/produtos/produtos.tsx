import Card from "@/components/Card";
import Topo from "@/components/Topo";
const produtos = [
  {
    id: 0,
    produto: "Mouse",
    valor: 49.9,
    desconto: 0,
    disponivel: true,
  },
  {
    id: 1,
    produto: "Teclado",
    valor: 69.9,
    desconto: 0,
    disponivel: true,
  },
  {
    id: 2,
    produto: "Monitor",
    valor: 659.9,
    desconto: 10,
    disponivel: true,
  },
  {
    id: 3,
    produto: "CPU",
    valor: 829.9,
    desconto: 0,
    disponivel: true,
  },
  {
    id: 4,
    produto: "Cx Som",
    valor: 39.9,
    desconto: 0,
    disponivel: true,
  },
  {
    id: 5,
    produto: "Microfone",
    valor: 65.0,
    desconto: 5,
    disponivel: true,
  },
];

function calcDesc(v: number, d: number) {
  return v - d;
}

function calcDesc2(v: number, d: number) {
  return v - d / 2;
}

export default function produtosPagina() {
  return (
    <div>
      <Topo />
      <div className="flex justify-center gap-3">
        {produtos.map((e: any) => {
          if (e.disponivel) {
            return (
              <Card
                key={e.id}
                id={e.id}
                produto={e.produto}
                valor={e.valor}
                desconto={e.desconto}
                funcao={calcDesc}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

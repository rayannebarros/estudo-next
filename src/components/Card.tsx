interface CardProps {
  id: number;
  produto: string;
  valor: number;
  desconto: number;
  funcao: any;
}

export default function Card(props: CardProps) {
  return (
    <div
      className={`flex justify-center flex-col ${
        props.desconto > 0 ? "border-red-700" : "border-blue-700"
      } border-4 rounded-sm p-1`}
    >
      <div>Produto: {props.produto}</div>
      <div>Valor: {props.valor}</div>
      {props.desconto > 0 && (
        <div>
          <div>Desconto: {props.desconto}</div>
          <div>Preço Venda: R$ {props.funcao(props.valor, props.desconto)}</div>
        </div>
      )}
    </div>
  );
}

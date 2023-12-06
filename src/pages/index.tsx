// import Image from "next/image";
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });
import Topo from "@/components/Topo";
import Card from "@/components/Card";

const nome = "Rayanne Barros";
let curso = "Engenharia de Computação";

export default function Home() {
  return (
    <div>
      <Topo />
      <div style={testecss}>
        <div>Curso de react Next</div>
        <div>TypeScript</div>
        <div style={{ color: "#f00", backgroundColor: "#bbb" }}>React</div>
      </div>
    </div>
  );
}

const testecss = {
  display: "flex",
  justifyContent: "center",
  alignItens: "center",
  color: "#00f",
  backgroundColor: "#eee",
  fontSize: "20px",
};

import { useState } from "react";
import Topo from "@/components/Topo";
import DisplayState from "@/components/DisplayState";

export default function UseState() {
  let [cont, setCont] = useState<number>(10);
  return (
    <div>
      <Topo />
      Testando useState
      <DisplayState valor={cont} fvalor={setCont}></DisplayState>
    </div>
  );
}

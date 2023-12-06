import { useState } from "react";
import DisplayState from "@/components/DisplayState";
export default function usestate() {
  let [cont, setCont] = useState<number>(10);

  return (
    <div>
      Testando useState
      <DisplayState valor={cont} fvalor={setCont}></DisplayState>
    </div>
  );
}

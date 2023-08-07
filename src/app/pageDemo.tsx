import Clock from "@/page/Demo1";
import {Property} from "csstype";
import Color = Property.Color;

export default function Home() {

   const color:any ="";
   const time:any = Date.now();

  return (
    <main>
        <Clock color={color} time={time}></Clock>
    </main>
  )
}

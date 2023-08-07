import TextComponent from "@/page/test";
import Clock from "@/page/Demo1";
import {Property} from "csstype";
import Color = Property.Color;

export default function Home() {

    const words = ['小轩窗', '正梳妆']
    const color="#FF1111"
    const time = new Date()

  return (
    <main>
      <div>Page组件</div>
        <div id="test"></div>
        <TextComponent words={words} value="miss miss"></TextComponent>
        <Clock color={color} time={time.toTimeString()} display={true}></Clock>
    </main>
  )
}

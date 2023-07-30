import Image from 'next/image'
import TextComponent from "@/page/test";

export default function Home() {

   const words = ['小轩窗', '正梳妆']

  return (
    <main>
      <div>Page组件</div>
        <div id="test"></div>
        <TextComponent words={words} value="miss miss"></TextComponent>
    </main>
  )
}

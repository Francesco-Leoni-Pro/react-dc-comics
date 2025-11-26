import style from "./AppMain.module.css"
import LogoStrip from "./LogoStrings"

export default function AppMain() {
  return (
    <main className={`${style["bg-black"]} ${style["text-white"]} py-100`}>
      <h3>{"-->Element goes here<--"}</h3>
      <LogoStrip />
    </main>
  )
}
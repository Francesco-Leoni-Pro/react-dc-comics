import style from "./AppMain.module.css"
import LogoStrip from "./LogoStrings"

export default function AppMain() {
  return (
    <main className={`${style.main} ${style["bg-black"]} ${style["text-white"]}`}>
      <div className={style.section}>
        <div className={style.textContainer}>
          <h3 className={style.textLeft}>{"-->Element goes here<--"}</h3>
        </div>
        <div className={style.logoContainer}>
          <LogoStrip />
        </div>
      </div>
    </main>
  )
}
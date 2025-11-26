import Logo from "../assets/img/dc-logo.png"
import style from "./AppHeader.module.css"

export default function AppHeader() {
  return (
    <header className="flex justify-content-between align-items-center">
      <img src={Logo} alt="DC Logo" />
      <nav className={style.nav}>
        <ul className="flex g-20">
          <li>
            <a href="">CHARACTERS</a>
          </li>
          <li className={style.active}>
            <a href="">COMICS</a>
          </li>
          <li>
            <a href="">MOVIES</a>
          </li>
          <li>
            <a href="">TV</a>
          </li>
          <li>
            <a href="">GAMES</a>
          </li>
          <li>
            <a href="">COLLECTIBLES</a>
          </li>
          <li>
            <a href="">VIDEOS</a>
          </li>
          <li>
            <a href="">FANS</a>
          </li>
          <li>
            <a href="">NEWS</a>
          </li>
          <li>
            <a href="">SHOP</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
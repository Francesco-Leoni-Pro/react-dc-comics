import Logo from "../assets/img/dc-logo.png"
import style from "./AppHeader.module.css"

export default function AppHeader() {
  return (
    <header className="flex justify-content-between align-items-center">
      <img src={Logo} alt="DC Logo" />
      <nav className={style.nav}>
        <ul className="flex g-20">
          <li>
            <a href="">Characters</a>
          </li>
          <li className={style.active}>
            <a href="">Comics</a>
          </li>
          <li>
            <a href="">Movies</a>
          </li>
          <li>
            <a href="">TV</a>
          </li>
          <li>
            <a href="">Games</a>
          </li>
          <li>
            <a href="">Collectibles</a>
          </li>
          <li>
            <a href="">Videos</a>
          </li>
          <li>
            <a href="">Fans</a>
          </li>
          <li>
            <a href="">News</a>
          </li>
          <li>
            <a href="">Shop</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
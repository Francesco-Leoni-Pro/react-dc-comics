import Logo from "../assets/img/dc-logo.png";
import style from "./AppHeader.module.css";

const navLinks = [
  "CHARACTERS",
  "COMICS",
  "MOVIES",
  "TV",
  "GAMES",
  "COLLECTIBLES",
  "VIDEOS",
  "FANS",
  "NEWS",
  "SHOP"
];

export default function AppHeader() {
  return (
    <header className="flex justify-content-between align-items-center">
      <img src={Logo} alt="DC Logo" />
      <nav className={style.nav}>
        <ul className="flex g-20">
          {navLinks.map((link, index) => (
            <li key={index} className={link === "COMICS" ? style.active : ""}>
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
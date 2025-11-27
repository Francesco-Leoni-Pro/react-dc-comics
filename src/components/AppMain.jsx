import style from "./AppMain.module.css";
import LogoStrip from "./LogoStrings";
import Jumbotron from "../assets/img/jumbotron.jpg";
import comics from "../assets/comics";

export default function AppMain() {
  return (
    <main
      className={`${style.main} ${style["bg-black"]} ${style["text-white"]}`}
      style={{ backgroundImage: `url(${Jumbotron})` }}
    >
      <div className={style.section}>
        <div className={style.textContainer}>
          <h3 className={style.textLeft}>CURRENT SERIES</h3>
        </div>
      </div>
      <div className={style.comicsGrid}>
        {comics.map((comic) => (
          <div key={comic.id} className={style.comicCard}>
            <img src={comic.thumb} alt={comic.title} />
            <h4>{comic.title.toUpperCase()}</h4>
            {/* Prezzo rimosso */}
          </div>
        ))}
      </div>
      <div className={style.logoContainer}>
        <LogoStrip />
      </div>
    </main>
  );
}
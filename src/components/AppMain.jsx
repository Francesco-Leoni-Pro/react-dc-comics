import style from "./AppMain.module.css";
import LogoStrip from "./LogoStrings";
import Jumbotron from "../assets/img/jumbotron.jpg";
import ComicCard from "./ComicCard";

export default function AppMain({ comics }) {
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
          <ComicCard key={comic.id} comic={comic} />
        ))}
      </div>

      <div className={style.logoContainer}>
        <LogoStrip />
      </div>
    </main>
  );
}
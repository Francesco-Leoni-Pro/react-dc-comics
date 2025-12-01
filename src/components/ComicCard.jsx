import style from "./AppMain.module.css"; // usa lo stesso CSS di AppMain per semplicità

export default function ComicCard({ comic }) {
  return (
    <div className={style.comicCard}>
      <img src={comic.thumb} alt={comic.title} />
      <h4>{comic.title.toUpperCase()}</h4>
      {/* Prezzo rimosso */}
    </div>
  );
}
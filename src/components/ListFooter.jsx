import BgMain from "../assets/img/footer-bg.jpg";
import LogoOverlay from "../assets/img/dc-logo-bg.png";
import style from "./ListFooter.module.css";

export default function ListFooter() {
  return (
    <div
      className={style.footerMain}
      style={{
        backgroundImage: `url(${LogoOverlay}), url(${BgMain})`
      }}
    >
      <div className={style.listContainer}>
        
        {/* Colonna sinistra: DC COMICS + SHOP */}
        <div className={style.leftColumn}>
          {/* DC COMICS */}
          <div className={style.listBlock}>
            <h3>DC COMICS</h3>
            <ul>
              <li>Characters</li>
              <li>Comics</li>
              <li>Movies</li>
              <li>TV</li>
              <li>Games</li>
              <li>Videos</li>
              <li>News</li>
            </ul>
          </div>

          {/* SHOP */}
          <div className={style.listBlock}>
            <h3>SHOP</h3>
            <ul>
              <li>Shop DC</li>
              <li>Shop DC Collectibles</li>
            </ul>
          </div>
        </div>

        {/* Colonna destra: DC + SITES */}
        <div className={style.rightColumn}>
          {/* DC */}
          <div className={style.listBlock}>
            <h3>DC</h3>
            <ul>
              <li>Terms of Use</li>
              <li>Privacy Policy (New)</li>
              <li>Ad Choices</li>
              <li>Advertising</li>
              <li>Jobs</li>
              <li>Subscriptions</li>
              <li>Talent Workshops</li>
              <li>CPSC Certificates</li>
              <li>Ratings</li>
              <li>Shop Help</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* SITES */}
          <div className={style.listBlock}>
            <h3>SITES</h3>
            <ul>
              <li>DC</li>
              <li>MAD Magazine</li>
              <li>DC Kids</li>
              <li>DC Universe</li>
              <li>DC Power Visa</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
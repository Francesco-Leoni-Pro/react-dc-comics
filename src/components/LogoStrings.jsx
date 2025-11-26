import Logo1 from "../assets/img/buy-comics-digital-comics.png";
import Logo2 from "../assets/img/buy-comics-merchandise.png";
import Logo3 from "../assets/img/buy-comics-shop-locator.png";
import Logo4 from "../assets/img/buy-comics-subscriptions.png";
import Logo5 from "../assets/img/buy-dc-power-visa.svg";
import style from "./LogoStrings.module.css";

export default function LogoStrip() {
  return (
    <div className={style.logoStrip}>
      <div className={style.logoItem}>
        <img src={Logo1} alt="Digital Comics" />
        <span>Digital Comics</span>
      </div>
      <div className={style.logoItem}>
        <img src={Logo2} alt="Merchandise" />
        <span>Merchandise</span>
      </div>
      <div className={style.logoItem}>
        <img src={Logo3} alt="Shop Locator" />
        <span>Shop Locator</span>
      </div>
      <div className={style.logoItem}>
        <img src={Logo4} alt="Subscriptions" />
        <span>Subscriptions</span>
      </div>
      <div className={style.logoItem}>
        <img src={Logo5} alt="DC Power Visa" />
        <span>DC Power Visa</span>
      </div>
    </div>
  );
}
import style from "./FooterBottom.module.css";

import Facebook from "../assets/img/footer-facebook.png";
import Twitter from "../assets/img/footer-twitter.png";
import Youtube from "../assets/img/footer-youtube.png";
import Pinterest from "../assets/img/footer-pinterest.png";
import Periscope from "../assets/img/footer-periscope.png";

export default function FooterBottom() {
  return (
    <div className={style.footerBottom}>
      
      <button className={style.signupBtn}>SIGN-UP NOW!</button>

      <div className={style.socialSection}>
        <span className={style.followText}>FOLLOW US</span>
        
        <div className={style.socialIcons}>
          <img src={Facebook} alt="Facebook" />
          <img src={Twitter} alt="Twitter" />
          <img src={Youtube} alt="YouTube" />
          <img src={Pinterest} alt="Pinterest" />
          <img src={Periscope} alt="Periscope" />
        </div>
      </div>

    </div>
  );
}
import Image from "next/image";
import styles from "../styles/newrelease.module.scss";
import fbIcon from "../../public/icons/icon_FB.svg";
import igIcon from "../../public/icons/icon_IG.svg";
import spIcon from "../../public/icons/icon_SP.svg";
import ttIcon from "../../public/icons/icon_TT.svg";
// npm install @mailchimp/mailchimp_marketing

export default function LayoutNewRelease(props) {
  return (
    <div className="layout">
      <header>
        <div>
          <div className={styles.navigation}>
            <div className="navSocials">
              <a href="https://www.facebook.com/Chair.The.Band" target="_blank">
                <Image priority src={fbIcon} alt="Facebook" />
              </a>{" "}
              <a href="https://www.instagram.com/kocham.chair/" target="_blank">
                <Image priority src={igIcon} alt="Instagram" />
              </a>
              <a
                href="https://open.spotify.com/artist/1Lo9afReVMAV0luzxUdHX1?si=XH4TbMElSGuCJ1-CJdFR0g"
                target="_blank"
              >
                <Image priority src={spIcon} alt="Spotify" />
              </a>{" "}
              <a
                href="https://www.tiktok.com/@chair.band?_t=8cVT9ADObSk&"
                target="_blank"
              >
                <Image priority src={ttIcon} alt="Tik Tok" />
              </a>
            </div>
            <h2>Chair</h2>
          </div>
        </div>
      </header>

      <div>{props.children}</div>
    </div>
  );
}

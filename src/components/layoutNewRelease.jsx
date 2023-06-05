import Image from "next/image";
import styles from "../styles/newsletter.module.scss";
import Link from "next/link";
import { useState, useEffect } from "react";
import useWindowDimensions from "../hooks/window";
import fbIcon from "../../public/icons/icon_FB.svg";
import igIcon from "../../public/icons/icon_IG.svg";
import spIcon from "../../public/icons/icon_SP.svg";
import ttIcon from "../../public/icons/icon_TT.svg";
import burger_icon from "../../public/icons/burger_icon.png";
import closed_burger from "../../public/icons/closed_burger.png";
import { sendNewsletter } from "./database";
import { motion, AnimatePresence } from "framer-motion";
import Newsletter from "./newsletter";

// npm install @mailchimp/mailchimp_marketing

export default function Layout(props) {
  return (
    <div className="layout">
      <header>
        <div className="fixed">
          <nav>
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
            <div>Chair</div>
          </nav>
        </div>
      </header>

      <main>{props.children}</main>
    </div>
  );
}

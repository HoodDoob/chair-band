import { useRef } from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/newrelease.module.scss";
import LayoutNewRelease from "../components/layoutNewRelease";
import Image from "next/image";
import Image_1 from "../../public/images/korolowo/Image1.webp";
import Image_2 from "../../public/images/korolowo/Image2.webp";
import Image_3 from "../../public/images/korolowo/Image3.webp";
import Image_4 from "../../public/images/korolowo/Image4.webp";
import Image_5 from "../../public/images/korolowo/Image5.webp";
import Image_6 from "../../public/images/korolowo/Image6.webp";
import Image_7 from "../../public/images/korolowo/Image7.webp";
import Image_8 from "../../public/images/korolowo/Image8.webp";
import Image_9 from "../../public/images/korolowo/Image9.webp";
import Image_10 from "../../public/images/korolowo/Image10.webp";
import Image_11 from "../../public/images/korolowo/Image11.webp";
import Image_12 from "../../public/images/korolowo/Image12.webp";
import Image_13 from "../../public/images/korolowo/Image13.webp";
import Image_14 from "../../public/images/korolowo/Image14.webp";
import Image_15 from "../../public/images/korolowo/Image15.webp";
import Image_16 from "../../public/images/korolowo/Image16.webp";
export default function NewRelease() {
  return (
    <>
      <Head>
        <title>Chair - go!</title>
      </Head>
      <LayoutNewRelease>
        <div className={`${styles.hero}`}>
          <div className={`${styles.title}`}>Korolowo</div>
          <div className={`${styles.content}`}>
            <a
              href="https://adm.ffm.to/ChairGo"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.a1}`}
            >
              &rarr; Pre-save &larr;
            </a>
            <a
              className={`${styles.a2}`}
              href="https://www.youtube.com/watch?v=ySTCPIbg7so"
              target="_blank"
            >
              Teledysk
            </a>
            {/* <a
              className={`${styles.a2}`}
              href="https://www.youtube.com/watch?v=ySTCPIbg7so"
              target="_blank"
            >
              Teledysk
            </a> */}
            {/* <iframe
              className={`${styles.iframe}`}
              title="myFrame"
              src="https://open.spotify.com/embed/track/2PBMZJc5DhDFcUOq56Za2Q?utm_source=generator&theme=0"
              width="300px"
              // maxWidth="100px"
              // height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin"
            ></iframe> */}
          </div>
        </div>

        <div className={styles.background}>
          <div className={styles.imgContNR}>
            <Image quality="80" priority="true" src={Image_1} alt="Instagram" />
          </div>
          <div className={styles.imgContNR}>
            <Image quality="80" loading="lazy" src={Image_2} alt="Instagram" />
          </div>
          <div className={styles.imgContNR}>
            <Image quality="80" loading="lazy" src={Image_3} alt="Instagram" />
          </div>
          <div className={styles.imgContNR}>
            <Image quality="80" loading="lazy" src={Image_4} alt="Instagram" />
          </div>{" "}
          <div className={styles.imgContNR}>
            <Image quality="80" loading="lazy" src={Image_5} alt="Instagram" />
          </div>
          <div className={styles.imgContNR}>
            <Image quality="80" loading="lazy" src={Image_6} alt="Instagram" />
          </div>
          <div className={styles.imgContNR}>
            <Image quality="80" loading="lazy" src={Image_7} alt="Instagram" />
          </div>
          <div className={styles.imgContNR}>
            <Image quality="80" loading="lazy" src={Image_8} alt="Instagram" />
          </div>{" "}
          <div className={styles.imgContNR}>
            <Image quality="80" loading="lazy" src={Image_9} alt="Instagram" />
          </div>
          <div className={styles.imgContNR}>
            <Image quality="80" loading="lazy" src={Image_10} alt="Instagram" />
          </div>
          <div className={styles.imgContNR}>
            <Image quality="80" loading="lazy" src={Image_11} alt="Instagram" />
          </div>
          <div className={styles.imgContNR}>
            <Image quality="80" loading="lazy" src={Image_12} alt="Instagram" />
          </div>{" "}
          <div className={styles.imgContNR}>
            <Image quality="80" loading="lazy" src={Image_13} alt="Instagram" />
          </div>
          <div className={styles.imgContNR}>
            <Image quality="80" loading="lazy" src={Image_14} alt="Instagram" />
          </div>
          <div className={styles.imgContNR}>
            <Image quality="80" loading="lazy" src={Image_15} alt="Instagram" />
          </div>
          <div className={styles.imgContNR}>
            <Image quality="80" loading="lazy" src={Image_16} alt="Instagram" />
          </div>
          {/* <Image loading="lazy" src={Image_2} alt="Instagram" />
          <Image loading="lazy" src={Image_1} alt="Instagram" />
          <Image loading="lazy" src={Image_2} alt="Instagram" /> */}
        </div>
      </LayoutNewRelease>
    </>
  );
}

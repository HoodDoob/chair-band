import Link from "next/link";
import Head from "next/head";
import styles from "../styles/newrelease.module.scss";
import LayoutNewRelease from "../components/layoutNewRelease";
import Image from "next/image";
import Image_1 from "../../public/images/korolowo/Image_1.webp";
import Image_2 from "../../public/images/korolowo/Image_2.webp";
import Image_3 from "../../public/images/korolowo/Image_3.webp";
import Image_4 from "../../public/images/korolowo/Image_4.webp";
export default function NewRelease() {
  return (
    <>
      <Head>
        <title>Korolowo</title>
      </Head>
      <LayoutNewRelease>
        <div className={styles.background}>
          <div className={styles.imgContNR}>
            <Image loading="lazy" src={Image_1} alt="Instagram" />
          </div>
          <div className={styles.imgContNR}>
            <Image loading="lazy" src={Image_2} alt="Instagram" />
          </div>
          <div className={styles.imgContNR}>
            <Image loading="lazy" src={Image_3} alt="Instagram" />
          </div>
          <div className={styles.imgContNR}>
            <Image loading="lazy" src={Image_4} alt="Instagram" />
          </div>{" "}
          <div className={styles.imgContNR}>
            <Image loading="lazy" src={Image_1} alt="Instagram" />
          </div>
          <div className={styles.imgContNR}>
            <Image loading="lazy" src={Image_2} alt="Instagram" />
          </div>
          <div className={styles.imgContNR}>
            <Image loading="lazy" src={Image_3} alt="Instagram" />
          </div>
          <div className={styles.imgContNR}>
            <Image loading="lazy" src={Image_4} alt="Instagram" />
          </div>
          {/* <Image loading="lazy" src={Image_2} alt="Instagram" />
          <Image loading="lazy" src={Image_1} alt="Instagram" />
          <Image loading="lazy" src={Image_2} alt="Instagram" /> */}
        </div>
      </LayoutNewRelease>
    </>
  );
}

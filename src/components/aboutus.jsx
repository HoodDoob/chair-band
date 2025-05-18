import styles from "../styles/page.module.scss";
import Image from "next/image";
import ChairModeButton from "../components/chairmodeButton";
import { TextModifierContext } from "./TextModifier";
import { useEffect, useContext } from "react";
import babyCura from "../../public/images/babyCura.png";
import babyHubert from "../../public/images/babyHubert.png";

import aboutus_1 from "../../public/images/aboutus_1.webp";
import aboutus_2 from "../../public/images/aboutus_2.webp";
import aboutus_3 from "../../public/images/aboutus_3.webp";
require("isomorphic-fetch");

// npm install --save isomorphic-fetch

export default function AboutUs({ images, pageState, setPageState }) {
  const { modifyEnabled, modifyAllText } = useContext(TextModifierContext);

  useEffect(() => {
    if (modifyEnabled) {
      modifyAllText();
    }
  }, []);

  // console.log(
  //   images[0]._embedded["wp:featuredmedia"][0].media_details.sizes.full
  //     .source_url
  // );

  return (
    <div className={styles.animationCont}>
      <div className={`${styles.gridSetup} ${styles.grid2}`}>
        <div className={styles.imgcont} id={styles.firstimage}>
          <Image
            src={
              aboutus_1
              // images[2]._embedded["wp:featuredmedia"][0].media_details.sizes
              //   .full.source_url
            }
            alt=""
            // width={`100`}
            // height={100}
            layout="fill"
            loading="eager"

            // objectFit="contain"
          />
        </div>
        {/* <Wordpress images={images} /> */}
        <div className={styles.title}>
          <h1>about us</h1>
          {/* <h2>(written by AI)</h2> */}
        </div>
        <div className={styles.text_div} id={styles.firsttext}>
          <p>
            It all began with an online conversation about chairs. Absurd,
            funny, and unexpectedly full of understanding. That’s how Chair
            started – a musical duo that, from the beginning, aimed to be more
            than just a band. It was a shared exploration of labels and a search
            for our own language. Chair is where tenderness meets aggression,
            punk guitars mix with acoustic grooves. Musically, we’re inspired by
            REM, Talking Heads or Viagra Boys, but memes and the absurdity of
            everyday life contributes to our style too.
          </p>
        </div>
        <div className={styles.imgcont} id={styles.secondimage}>
          <Image
            src={
              aboutus_2
              // images[1]._embedded["wp:featuredmedia"][0].media_details.sizes
              //   .full.source_url
            }
            alt=""
            // width={`100`}
            // height={100}
            layout="fill"
            loading="eager"
            // objectFit="contain"
          />
        </div>
        <div className={styles.text_div} id={styles.secondtext}>
          {/* <p>
            We like being unpredictable, angry, moved, reckless and scared.
            Always honest.
          </p> */}
        </div>
        <div className={styles.imgcont} id={styles.thirdimage1}>
          <Image
            src={
              aboutus_3
              // images[0]._embedded["wp:featuredmedia"][0].media_details.sizes
              //   .full.source_url
            }
            alt=""
            layout="fill"
            loading="eager"
          />{" "}
        </div>
        <div className={styles.babyImgCont}>
          <ChairModeButton pageState={pageState} setPageState={setPageState}>
            <Image
              id={styles.babyHubert2}
              className={`${styles.baby} `}
              src={babyHubert}
              alt="baby hubert"
              loading="eager"
            />{" "}
          </ChairModeButton>
          <div className={styles.imgcont} id={styles.thirdimage2}>
            <Image
              src={
                aboutus_3
                // images[0]._embedded["wp:featuredmedia"][0].media_details.sizes
                //   .full.source_url
              }
              alt=""
              layout="fill"
              loading="eager"
            />{" "}
          </div>
        </div>
        <div className={styles.text_div} id={styles.thirdtext}>
          <p>
            Over the past three years, we’ve released two EPs and played nearly
            a hundred shows – from OFF Festival and Męskie Granie to art
            galleries, restaurants, and abandoned factories. Our stage
            experience ranges from supporting sold-out shows at Stodoła to
            playing for a handful of friends in a basement in Poznań. Our EPs
            were named Album of the Week on stations like Radio 357, Czwórka,
            and Trójka. We’ve performed three times on national morning TV, and
            most recently – got 4 YES’s on Must Be The Music.
          </p>
          <br></br>
          <p>
            We’re not always a band that’s easy to "get." But we’re hungry – for
            space, for risk, for the chance to show what we’re capable of. And
            that is what we’re all about.
          </p>
          <div className={styles.imgcont2}>
            <ChairModeButton pageState={pageState} setPageState={setPageState}>
              <Image
                id={styles.babyCura}
                className={styles.baby}
                src={babyCura}
                alt="baby cura"
                loading="eager"
              />
            </ChairModeButton>
            <ChairModeButton pageState={pageState} setPageState={setPageState}>
              <Image
                id={styles.babyHubert1}
                className={styles.baby}
                src={babyHubert}
                alt="baby hubert"
                loading="eager"
              />
            </ChairModeButton>
          </div>
        </div>
      </div>
      <div>
        {/* <ChairModeButton
          pageState={pageState}
          setPageState={setPageState}
        ></ChairModeButton> */}
      </div>
    </div>
  );
}

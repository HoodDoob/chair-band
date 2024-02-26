import styles from "../styles/page.module.scss";
import Image from "next/image";
import aboutus_1 from "../../public/images/contact.webp";
import manager from "../../public/images/manager.png";
import managerText from "../../public/images/managerText.gif";
import { useContext, useEffect, useRef } from "react";
import { TextModifierContext } from "./TextModifier";

export default function Contact() {
  const elementRef = useRef(null);
  const { modifyEnabled, modifyAllText } = useContext(TextModifierContext);

  const handleClick = () => {
    elementRef.current.classList.add(`${styles.asiaPopDown}`);
  };
  // const [managerState, setManagerState] = useState(true);

  useEffect(() => {
    if (modifyEnabled) {
      modifyAllText();
    }
  }, []);
  return (
    <div className={`${styles.gridSetup} ${styles.gridAB}`}>
      <div className={styles.imgcont2} id={styles.contImg}>
        <Image priority src={aboutus_1} alt="" />
      </div>
      <div className={styles.title}>
        <h1>contact</h1>
        <h2>(speak to the manager pls)</h2>
      </div>
      <div className={styles.contText}>
        <div className={styles.cont1}>
          <h2>Chair Management</h2>
        </div>
        <div className={styles.cont2}>
          <h2>Alicja Herda</h2>
        </div>
        <div className={styles.cont3}>
          <a href="mailto: herda.alicja@gmail.com?subject=I Love Chair">
            herda.alicja@gmail.com
          </a>
        </div>
        <div className={styles.cont4}>
          <a
            href="https://drive.google.com/drive/folders/15t8lfZrdoaF6SE-QmqbRMZrYaTn221kg?usp=share_link"
            target="_blank"
          >
            Click here for our<br></br> press release
          </a>
        </div>

        <div className={styles.cont5}>
          <a href="mailto: chair.bandstuff@gmail.com?subject=Chair Booking">
            Book us now!
          </a>
        </div>
      </div>
      {/* LITTLE MANAGER */}
      <div ref={elementRef} className={styles.managerCont}>
        <div className={styles.asiaPopup}>
          <Image
            src={managerText}
            alt="the manager text"
            onClick={handleClick}
            className={styles.asiaGif}
          />
          <Image src={manager} alt="Chair's manager" onClick={handleClick} />
        </div>
      </div>
      {/* END MANAGER */}
    </div>
  );
}

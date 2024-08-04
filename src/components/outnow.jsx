import styles from "../styles/page.module.scss";
import Link from "next/link";
import { TextModifierContext } from "./TextModifier";
import { useContext, useEffect } from "react";

export default function Outnow() {
  const { modifyEnabled, modifyAllText } = useContext(TextModifierContext);

  useEffect(() => {
    if (modifyEnabled) {
      modifyAllText();
    }
  }, []);
  return (
    <div className={styles.newrelbox}>
      <h4>Our newest EP</h4>
      <p className={styles.dots}>****************************************</p>
      <div>
        <h3>GENTLE MEN</h3>
        {/* <h3>(3.23)</h3> */}
      </div>
      <p className={styles.dots}>----------------------------------------</p>
      <div>
        <p>out now</p>
        <Link
          href="https://youtu.be/sg-qtqaDe8k?si=E8GCdFmki4i_zGn_"
          target="_blank"
        >
          LISTEN HERE
        </Link>
      </div>
    </div>
  );
}

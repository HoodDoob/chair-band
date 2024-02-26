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
      <h4>Our new song</h4>
      <p className={styles.dots}>****************************************</p>
      <div>
        <h3>LOVE AD 2</h3>
        {/* <h3>(3.23)</h3> */}
      </div>
      <p className={styles.dots}>----------------------------------------</p>
      <div>
        <p>out now</p>
        <Link
          href="https://youtu.be/Fb8GuXZTkOU?si=ZOL7buie2g6FIy9k"
          target="_blank"
        >
          LISTEN HERE
        </Link>
      </div>
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import styles from "../styles/newrelease.module.scss";
import Layout from "@/components/layout";

export default function NewRelease() {
  return (
    <>
      <Head>
        <title>Korolowo</title>
      </Head>
      <Layout></Layout>
      {/* <div className={styles.newrelCont}>
        <h1>Not yet, actually</h1>
        <h2>
          <Link href="/">Back to home</Link>
        </h2>
      </div> */}
    </>
  );
}

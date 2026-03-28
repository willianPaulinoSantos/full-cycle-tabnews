import Head from "next/head";
import Image from "next/image";
import styles from "./index.module.css";

function Home() {
  return (
    <>
      <Head>
        <title>Para você, morzinha</title>
        <meta name="description" content="Um recadinho especial." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={styles.page}>
        <div className={styles.inner}>
          <div className={styles.photoFrame}>
            <div className={styles.photoInner}>
              <Image
                src="/morzinha.png"
                alt="Um momento nosso"
                fill
                sizes="(max-width: 480px) 100vw, 28rem"
                className={styles.photo}
                priority
              />
            </div>
          </div>
          <span className={styles.heart} aria-hidden>
            ♥
          </span>
          <p className={styles.message}>
            Oi morzinha, <em>te amo</em>, vou fumar um cigarrin e ja volto.
          </p>
        </div>
      </main>
    </>
  );
}

export default Home;

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my project Next.js!
        </h1>

        <p className={styles.description}>
          Buat aplikasi di 
          <code className={styles.code}>pages/.js</code>
        </p>

        <div className={styles.grid}>
          <Link href="/home" className={styles.card}>
            <h2>Web Apps 1 &rarr;</h2>
            <p>Aplikasi landing page, belum berhasil di upload ke vercel</p>
          </Link>

          
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={82} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

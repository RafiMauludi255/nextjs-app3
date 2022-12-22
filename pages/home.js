import Head from "next/head";
import Navbar from "./komponen/Navbar";
import styles from'../styles/home.module.css'
import Image from "next/image";
import analyze from "../image/marketing.svg"
import bill from "../image/bill.svg"
import contactless from "../image/contactless.svg"
import shop from "../image/shop.svg"
import ranking from "../image/ranking.svg"
import typing from "../image/womantyping.svg"
import Link from "next/Link";

export default function home() {
    return (
        <div className={styles.body}>
        <div className="container">
            <Head>
                <title>Halaman Utama</title>
            </Head>

            <Navbar />
           
           <div className={styles.hero}>
            <span>The safer way for people</span>
            <h1>Grow your<br />assets under<br />management</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam saepe optio quod veritatis molestiae officiis corrupti dolores, error non, nobis quam sapiente.</p>
            <Btn />
            <Image className={styles.imageHero} src={analyze} width={1000} height={500} alt="hero"/>
           </div>

            <AboutLanding /> 

            <Box />  

            <HistoryPage />

            <PromisingPage />

            <EmailPage />
            <Footer />
        </div>
        </div>
    )
}

function Btn() {
    return (
    <>
    <button className={styles.btn}>Get Started &rarr;</button>
    </>
    )
}

function AboutLanding() {
    return (
        <div className={styles.AboutLanding}>
            <p>About us</p>
            <h1>We provide our experts services<br/> around the world</h1>
        </div>
    )
}

function Box() {
    return (
        <div className={styles.flex}>
        <div className={styles.box}>
            <div className={styles.content}>
            <h3>Secured Platform</h3>
            <p>We help you to build powerful<br/>human centric product and<br/>users will love it.</p>
            <span><Link href="/about">Learn More &rarr;</Link></span>
            <div className={styles.imgBox}>
                <Image src={bill} width={250} height={200} alt="bill"/>
            </div>
            </div>
        </div>

        <div className={styles.box2}>
            <div className={styles.content}>
            <h3>Updated Solution</h3>
            <p>Our agency experts will<br/>provide you with a full stack of<br/>services.</p>
            <span><Link href="/about">Learn More &rarr;</Link></span>
            <div className={styles.imgBox}>
                <Image src={contactless} width={250} height={200} alt="contactless" />
            </div>
            </div>
        </div>
 </div>       
    )
}

function HistoryPage() {
    return (
        <div className={styles.HistoryPage}>
            <p>History</p>
            <h1>our agency it's about the people and for<br/>the people wordlwide</h1>
            <div className={styles.bgBox}>
            <Image className={styles.imgHistory} src={shop} width={800} height={550} alt="shop"/>
            <div className={styles.square}>
                <h2>extra ordinary<br/>services which<br/>attract more</h2>
                <span><Link href="/about">Visit History &rarr;</Link></span>
            </div>
            </div>
        </div>
    )
}

function PromisingPage() {
    return (
        <div className={styles.PromisingPage}>
            <p>promising</p>
            <h1>ready to discuss<br/>your rock star<br/>product? Let's<br/>discuss it.</h1>
            <button>Take Plants &rarr;</button>
            <Image src={ranking} width={800} height={600} className={styles.ImagePromising} alt="ranking"/>
        </div>
    )
}

function EmailPage() {
    return (
        <div className={styles.EmailPage}>
            <Image src={typing} width={700} height={440} alt="typing"/>
            <div className={styles.btnEmail}>
             
                <h2>Join our email</h2>
                <div className={styles.flexBtn}>
                <input type="text"></input><button>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

function Footer() {
    return (
        <div className={styles.footer}>
            <footer>Made it by <Link href="https://github.com/RafiMauludi255"><code>Muhammad Rafi Mauludi</code></Link></footer>
        </div>
    )
}
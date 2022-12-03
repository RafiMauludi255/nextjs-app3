import Head from "next/head";
import Link from "next/link";
import Navbar from "./komponen/Navbar";

export default function about() {
    return (
        <div className="container">
            <Head>
                <title>Halaman About</title>
            </Head>
            <Navbar />
            <h1>Hello About</h1>
            
        </div>
    )
}
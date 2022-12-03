import Head from "next/head";
import Navbar from "./komponen/Navbar";
export default function Profiler() {
    return (
        
        <div className="container">
            
            <Head>
                <title>Halaman Profile</title>
            </Head>
            <Navbar />

            <h1>Halaman Profile</h1>
        </div>
    )
}
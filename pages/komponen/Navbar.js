import style from '../../styles/home.module.css'
import Link from 'next/link'

export default function navbar() {
    return (
      <div className={style.font}>
        <nav className={style.navbar}>
          <span className='logo'><Link href="/home">Unflip</Link></span>

          <ul>
            <li><Link href='/'>Products</Link></li>
            <li><Link>UseCases</Link></li>
            <li><Link href='/about'>AboutUs</Link></li>
            <li><Link href='/profile'>ForConsumers</Link></li>
           <Btn />
          </ul>
        </nav>
      </div>
    )
}

function Btn() {
  return <button>ContactUs</button>
}

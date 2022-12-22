
import style from '../../styles/home.module.css'

export default function navbar() {
    return (
      <div className={style.font}>
        <nav className={style.navbar}>
          <span className='logo'>Unflip</span>

          <ul>
            <li><Link href='/'>Products</Link></li>
            <li><Link>Use&nbsp;Cases</Link></li>
            <li><Link href='/about'>About&nbsp;Us</Link></li>
            <li><Link href='/profile'>For&nbsp;Consumers</Link></li>
           <Btn />
          </ul>
        </nav>
      </div>
    )
}

function Btn() {
  return <button>Contact&nbsp;Us</button>
}

import style from '../../styles/home.module.css'

export default function navbar() {
    return (
      <div className={style.font}>
        <nav className={style.navbar}>
          <span className='logo'>Unflip</span>

          <ul>
            <li><a href='/'>Products</a></li>
            <li><a>Use&nbsp;Cases</a></li>
            <li><a href='/about'>About&nbsp;Us</a></li>
            <li><a href='/profile'>For&nbsp;Consumers</a></li>
           <Btn />
          </ul>
        </nav>
      </div>
    )
}

function Btn() {
  return <button>Contact&nbsp;Us</button>
}
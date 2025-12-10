import style from "./Header.module.css"
import { Link } from "react-router-dom"

function Header() {
    return(
    <>
        <header>
            <nav className= {style.nav}>
                <ul className={style.ul}>
                    <Link  to="#"><li className={style.li}>New Drops 🔥<img src="" alt="" /></li></Link>
                    <Link to="#"><li className={style.li}>Men</li></Link>
                    <Link  to="#"><li className={style.li}>Women</li></Link>
                </ul>
            </nav>
            <img src="./img/Logo.svg" alt="" loading="lazy"/>

            <div className={style.icons}>
                <img src="./img/searchicon.svg" alt="" loading="lazy"/>
                <img src="./img/profileicon.svg" alt="" loading="lazy"/>
                <button className={style.button}></button>
            </div>

        </header>
    </>
)
}
export default Header
import './Footer.css'
import { Link, NavLink } from 'react-router-dom';
export function Footer(){
    return(
        <footer>
            <div className="container">
                <div className="footer__inner">
                    <Link to="/" className='logo__all'>
                        <img src="/src/assets/img/Logo.png" alt="" />
                    </Link>
                    <nav className="footer__nav">
                        <NavLink to="/" className="footer__nav-link">Главная</NavLink>
                        <NavLink to="/catalog" className="footer__nav-link">Каталог</NavLink>
                        <NavLink to="/about" className="footer__nav-link">О нас</NavLink>
                    </nav>
                </div>
            </div>
        </footer>
    );
}

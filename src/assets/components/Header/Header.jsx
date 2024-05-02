import './Header.css'
import { Link, NavLink } from 'react-router-dom';
export function Header(){
    return(
        <header>
            <div className="container">
                <div className="header__inner">
                    
                    <nav className="header__nav nav">
                        <NavLink to="/" className="header__nav-link">Главная</NavLink>
                        <NavLink to="/catalog" className="header__nav-link">Каталог</NavLink>
                        <NavLink to="/about" className="header__nav-link">О нас</NavLink>
                    </nav>
                    <Link to="/" className='logo__all'>
                        <img src="/src/assets/img/Logo.png" alt="" />
                    </Link>
                    <div className="cart-block">
                    <a href="#">
                        <svg width="30" height="30" viewBox="0 0 38 38" fill="black" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.833 30C9.81634 30 8.18468 31.65 8.18468 33.6667C8.18468 35.6834 9.81634 37.3334 11.833 37.3334C13.8497 37.3334 15.4997 35.6834 15.4997 33.6667C15.4997 31.65 13.8497 30 11.833 30ZM0.833008 0.666687V4.33335H4.49967L11.0997 18.2484L8.62467 22.74C8.33134 23.2534 8.16634 23.8584 8.16634 24.5C8.16634 26.5167 9.81634 28.1667 11.833 28.1667H33.833V24.5H12.603C12.3463 24.5 12.1447 24.2984 12.1447 24.0417L12.1997 23.8217L13.8497 20.8334H27.508C28.883 20.8334 30.093 20.0817 30.7163 18.945L37.2797 7.04669C37.4263 6.79002 37.4997 6.47835 37.4997 6.16669C37.4997 5.15835 36.6747 4.33335 35.6663 4.33335H8.55134L6.82801 0.666687H0.833008ZM30.1663 30C28.1497 30 26.518 31.65 26.518 33.6667C26.518 35.6834 28.1497 37.3334 30.1663 37.3334C32.183 37.3334 33.833 35.6834 33.833 33.6667C33.833 31.65 32.183 30 30.1663 30Z" fill="black" fill-opacity="0.87"/>
                        </svg>
                    </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

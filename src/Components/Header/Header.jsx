import React from 'react';
import './header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import { Link } from 'react-scroll';

const Header = () => {

    const mobile = window.innerWidth <= 768 ? true : false
    const [menuOpen, setMenuOpen] = React.useState(false)

    return (
        <header className='header'>
            <img src={Logo} alt="FitClub Logo" className='logo' />
            {!menuOpen && mobile ? (
                <div
                    style={{
                        backgroundColor: 'var(--appColor)',
                        padding: '0.5rem',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                    onClick={() => setMenuOpen(true)}
                >
                    <img src={Bars} alt="menuBars icon" style={{ width: '1.5rem', height: "1.5rem" }} />
                </div>
            ) : (
                <ul className='header-menu'>

                    <li>
                        <Link
                            activeClass='active'
                            to='home'
                            spy={true}
                            smooth={true}
                            onClick={() => setMenuOpen(false)}
                        >Home</Link>
                    </li>

                    <li>
                        <Link
                            to='programs'
                            spy={true}
                            smooth={true}
                            onClick={() => setMenuOpen(false)}
                        >Programs</Link>
                    </li>

                    <li>
                        <Link
                            to='reasons'
                            spy={true}
                            smooth={true}
                            onClick={() => setMenuOpen(false)}
                        >Why us</Link>
                    </li>

                    <li>
                        <Link
                            to='plans'
                            spy={true}
                            smooth={true}
                            onClick={() => setMenuOpen(false)}
                        >Plans</Link>
                    </li>

                    <li>
                        <Link
                            to='testimonials'
                            spy={true}
                            smooth={true}
                            onClick={() => setMenuOpen(false)}
                        >Testimonials</Link>
                    </li>
                </ul>
            )}
        </header >
    );
}

export default Header;

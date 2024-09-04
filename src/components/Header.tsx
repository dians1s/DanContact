import React from "react";

const Header = () => {
    return (
        <>
            <div className="header__stickyfix"></div>
            <header className="header flexCenter">
                <ul className="header__list">
                    <li className="header__item flexCenter">
                        <a href="/" className="flexCenter">
                            <svg width="36px" height="36px" viewBox="0 0 91 91" version="1.1" xmlns="http://www.w3.org/2000/svg"><g>
                                <path fill="color: white;" d="M89.4,57.2c2.1-1.8,1.2-5.1-0.8-6.4c-9.8-6.2-18.8-13-26.3-22c-2.3-2.8-6.2-0.2-6.5,2.7   c-0.4,3.9-0.7,7.7-1,11.6c-3.6-0.3-7.3-0.6-10.9-1c-3.8-0.3-8.2-1.4-11.8,0.4c-0.1,0.1-0.3,0.2-0.4,0.3c-2,1.8-2.7,5.1-3,8.5   c-5.4-5.7-11.3-10.6-17.8-15.1c6.2-5.3,12.2-10.8,17.9-16.7c0.1,1.8,0.3,3.6,0.4,5.4c0.2,1.9,1.6,3.9,3.8,3.8   c5.2-0.4,10.4-0.8,15.6-1.3c4.9-0.4,4.9-8.1,0-7.6c-4.1,0.4-8.2,0.7-12.3,1.1c-0.3-3.3-0.7-6.7-0.9-10c-0.2-3-4-5.1-6.3-2.6   C20.5,17.4,11,25.6,1.6,33.8c-2,1.7-1.2,5,0.8,6.2c9.7,6.1,19,13,26.6,21.7c2,2.3,5.4,0.3,5.6-2.3c0.2-3.3,1.5-8.2,1.1-12.2   c2.4,0.7,5,0.8,7.4,1.1c4.7,0.7,9.3,1.3,14,2c1.6,0.2,4-0.4,4.3-2.4c0.3-2.5,0.7-5,1-7.5c5.3,5.4,11.3,10.1,17.5,14.5   c-6.1,5.3-12,10.9-17.7,16.7c-0.2-1.8-0.3-3.7-0.5-5.5c-0.2-1.9-1.6-3.9-3.8-3.8c-5.1,0.4-10.2,0.8-15.3,1.2   c-4.9,0.4-4.9,8.1,0,7.6c4-0.3,8-0.7,11.9-1c0.3,3.3,0.6,6.7,0.9,10c0.3,3,4,5.2,6.3,2.6C70.2,73.3,79.9,65.4,89.4,57.2z"/>
                            </g></svg>
                        </a>
                    </li>
                    <li className="header__item flexCenter">
                        <input className="header__search flexCenter" type="text" placeholder="Поиск..." />
                    </li>
                    <li className="header__item flexCenter">
                        <button className="header__notifications flexCenter" type="button">
                            <svg width="28px" height="28px" viewBox="0 0 16 16" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 5C3 2.23858 5.23858 0 8 0C10.7614 0 13 2.23858 13 5V8L15 10V12H1V10L3 8V5Z" fill="#000000"/>
                                <path d="M7.99999 16C6.69378 16 5.58254 15.1652 5.1707 14H10.8293C10.4175 15.1652 9.30621 16 7.99999 16Z" fill="#000000"/>
                            </svg>
                        </button>
                    </li>
                    <li className="header__item flexCenter">
                        <a href="/" className="header__item__register flexCenter">Регистрация</a>
                    </li>
                </ul>
            </header>
        </>
    );
}

export default Header;
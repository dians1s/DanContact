import React from "react";

const SideMenu = () => {

    return (
        <nav className="sideMenu">
            <ul className="sideMenu__list">
                <li className="sideMenu__item">
                    <a href="/"><span>Моя страница</span></a>
                </li>
                <li className="sideMenu__item">
                    <a href="/">Новости</a>
                </li>
                <li className="sideMenu__item">
                    <a href="/">Сообщения</a>
                </li>
                <li className="sideMenu__item">
                    <a href="/">Группы</a>
                </li>
                <li className="sideMenu__item">
                    <a href="/">Музыка</a>
                </li>
            </ul>
        </nav>
    )
};

export default SideMenu;
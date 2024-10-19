import './HeaderStyle.css';

import { NavLink } from 'react-router-dom';
import { useEffect, useRef } from 'react';

import logo from "./../../../img/image/logo.png";
import icons from "./../../../img/icons/icons.svg";


const Header = () => {
    const navRightContainerRef = useRef();

    useEffect(() => {
        const onClick = e => {
            if (!navRightContainerRef.current.contains(e.target)) {
                closeHeaderModals();
            }
        };
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, []);

    function hoverShowHiddenModal(event, status) {
        let modalElement = event.target.closest('.extra-bl-rel').querySelector(".extra-bl-abs");
        modalElement.classList.toggle('extra-bl-abs--visible', status);
    }

    function closeHeaderModals(modal = null) {
        document.querySelectorAll(".extra-bl-abs").forEach(el => {
            if (el !== modal) {
                el.classList.remove('extra-bl-abs--visible');
            }
        });
    }

    function clickShowHiddenModal(event) {
        let modalElement = event.target.closest('.extra-bl-rel').querySelector(".extra-bl-abs");
        closeHeaderModals(modalElement);
        modalElement.classList.toggle('extra-bl-abs--visible');
    }

    return (
        <header className="header">
            <nav className="header-navbar">
                <div className="header-nav-row">

                    <div className="hd-nav-container nav-container-left">
                        <NavLink to="/home">
                            <img className="header-logo" src={logo} alt="logo" />
                        </NavLink>

                        <div className="hd-title">
                            <span>Leader Learning centre</span>
                        </div>
                        <div className="extra-bl-rel" onMouseEnter={(event) => hoverShowHiddenModal(event, true)}
                            onMouseLeave={(event) => hoverShowHiddenModal(event, false)}>
                            <div className="hd-add-btn-blck">
                                <svg className="hd-plus-icon">
                                    <use href={`${icons}#plus_in_circle`}></use>
                                </svg>
                            </div>
                            <div className="extra-bl-abs">
                                <div className="extra-bl-abs-arrow"></div>
                                <div className="extra-bl-container">
                                    <ul className="blue-opt-list">
                                        <li>
                                            <a href="#">
                                                <svg className="blue-opt-list-icon">
                                                    <use href={`${icons}#plus_in_circle`}></use>
                                                </svg>
                                                Новый студент
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hd-nav-container">
                        <div className="hd-search-block">
                            <input className="search-input" type="text" placeholder="Search" />
                            <div className="search-icon-bl">
                                <svg className="search-icon">
                                    <use href={`${icons}#search`}></use>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="hd-nav-container nav-container-right hd-nav-container-right" ref={navRightContainerRef}>
                        <div className="extra-bl-rel">
                            <div className="hd-lang-bl" onClick={(event) => clickShowHiddenModal(event)}>
                                ru
                            </div>
                            <div className="extra-bl-abs">
                                <div className="extra-bl-abs-arrow"></div>
                                <div className="extra-bl-container">
                                    <ul className="blue-opt-list">
                                        <li>
                                            <a href="#">uz - O'zbekcha</a>
                                        </li>

                                        <li>
                                            <a href="#">ru - Русский</a>
                                        </li>

                                        <li>
                                            <a href="#">en - English</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="extra-bl-rel">
                            <div className="hd-notif-block"
                                onClick={(event) => clickShowHiddenModal(event)}>
                                <svg className="hd-bell-icon">
                                    <use href={`${icons}#bell`}></use>
                                </svg>
                            </div>
                            <div className="extra-bl-abs">
                                <div className="extra-bl-abs-arrow"></div>
                                <div className="extra-bl-container">
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="hd-user-name-bl">Юсуф Худойбердиев</div>
                        </div>

                        <div className="extra-bl-rel">
                            <div className="hd-user-account-photo-bl"
                                onClick={(event) => clickShowHiddenModal(event)}>
                                {/* <img className="hd-user-account-photo" href="" alt="User Account" /> */}
                                <svg className="hd-user-icon">
                                    <use href={`${icons}#user`}></use>
                                </svg>
                            </div>
                            <div className="extra-bl-abs">
                                <div className="extra-bl-abs-arrow"></div>
                                <div className="extra-bl-container extra-bl-container-userinfo">
                                    <ul className="hd-user-opt-list">
                                        <li>
                                            <a href="#">Аккаунт</a>
                                        </li>

                                        <li>
                                            <a href="#">Выход</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>
        </header >
    );
}

export default Header;

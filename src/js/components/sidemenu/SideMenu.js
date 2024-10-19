import './style.css';

import { NavLink, useLocation } from 'react-router-dom';

import icons from "./../../../img/icons/icons.svg";


const SideMenu = () => {
    const location = useLocation(); // Получаем текущий путь

    return (
        <aside className="aside-menu">
            <div className="aside-menu-block">
                <nav className="side-menu-nav">
                    <div className="side-menu-nav-item-bl">
                        <NavLink to="/teachers/list"
                            className={({ isActive }) => isActive || location.pathname.startsWith("/teachers") ? 'side-menu-nav-item-link--active' : ''}>
                            <div className="side-mn-bl-upline"></div>
                            <div className="side-menu-svg-bl">
                                <svg className="side-menu-svg">
                                    <use href={`${icons}#teacher`}></use>
                                </svg>
                                <span className="side-menu-svg-bl-title">Препод-ли</span>
                            </div>
                        </NavLink>
                    </div>

                    <div className="side-menu-nav-item-bl">
                        <NavLink to="/students/list"
                            className={({ isActive }) => isActive || location.pathname.startsWith("/students") ?  'side-menu-nav-item-link--active' : ''}>
                            <div className={`side-mn-bl-upline ${location.pathname === '/students/list' ? 'side-mn-bl-upline--active' : ''}`}></div>
                            <div className="side-menu-svg-bl">
                                <svg className={`side-menu-svg ${location.pathname === '/students/list' ? 'side-menu-svg--active' : ''}`}>
                                    <use href={`${icons}#student`}></use>
                                </svg>
                                <span className={`side-menu-svg-bl-title ${location.pathname === '/students/list' ? 'side-menu-svg-bl-title--active' : ''}`}>Студенты</span>
                            </div>
                        </NavLink>
                    </div>

                    <div className="side-menu-nav-item-bl">
                        <NavLink to="/groups/list"
                            className={({ isActive }) => isActive ? 'side-menu-nav-item-link--active' : ''}>
                            <div className={`side-mn-bl-upline ${location.pathname === '/groups/list' ? 'side-mn-bl-upline--active' : ''}`}></div>
                            <div className="side-menu-svg-bl">
                                <svg className={`side-menu-svg ${location.pathname === '/groups/list' ? 'side-menu-svg--active' : ''}`}>
                                    <use href={`${icons}#group`}></use>
                                </svg>
                                <span className={`side-menu-svg-bl-title ${location.pathname === '/groups/list' ? 'side-menu-svg-bl-title--active' : ''}`}>Группы</span>
                            </div>
                        </NavLink>
                    </div>

                    <div className="side-menu-nav-item-bl">
                        <NavLink to="/courses"
                            className={({ isActive }) => isActive ? 'side-menu-nav-item-link--active' : ''}>
                            <div className={`side-mn-bl-upline ${location.pathname === '/courses' ? 'side-mn-bl-upline--active' : ''}`}></div>
                            <div className="side-menu-svg-bl">
                                <svg className={`side-menu-svg ${location.pathname === '/courses' ? 'side-menu-svg--active' : ''}`}>
                                    <use href={`${icons}#list_catalog`}></use>
                                </svg>
                                <span className={`side-menu-svg-bl-title ${location.pathname === '/courses' ? 'side-menu-svg-bl-title--active' : ''}`}>Курсы</span>
                            </div>
                        </NavLink>
                    </div>

                    <div className="side-menu-nav-item-bl">
                        <NavLink to="/settings"
                            className={({ isActive }) => isActive ? 'side-menu-nav-item-link--active' : ''}>
                            <div className={`side-mn-bl-upline ${location.pathname === '/settings' ? 'side-mn-bl-upline--active' : ''}`}></div>
                            <div className="side-menu-svg-bl">
                                <svg className={`side-menu-svg ${location.pathname === '/settings' ? 'side-menu-svg--active' : ''}`}>
                                    <use href={`${icons}#settings_1`}></use>
                                </svg>
                                <span className={`side-menu-svg-bl-title ${location.pathname === '/settings' ? 'side-menu-svg-bl-title--active' : ''}`}>Настройки</span>
                            </div>
                        </NavLink>
                    </div>
                </nav>

            </div>
        </aside>
    );
}

export default SideMenu;
import './GroupProfileStyle.css'
import icons from "./../../../../img/icons/icons.svg";
import { useState } from 'react';

const GroupProfile = () => {
    const [activeTab, setActiveTab] = useState('attendance');

    return (
        <main className="mainwn-min-size">
            <div className="group-prof-main-bl">
                <div className="mn-title-bl">
                    <h1>A102 ・ A1&A2 ・ Nurova Maftuna</h1>
                </div>
                <div className="horizontal-separated-windows-30to70 --margin-top10px">
                    {/* Сторона с информацией о группе и создания заметок */}
                    <div className="left-window-part-30">

                        {/* Блок инфорации о группе */}
                        <div className="group-info-block">
                            <div className="group-data-block">
                                <div className="group-main-info-block">
                                    <p className="group-main-info-text"><span>Курс: </span>A1&A2</p>
                                    <p className="group-main-info-text"><span>Преподававтель: </span>Mardiyeva Sitora</p>
                                    <p className="group-main-info-text"><span>Цена: </span>420 000 UZS</p>
                                    <p className="group-main-info-text"><span>Время: </span>Четные дни ・ 10:00</p>
                                    <p className="group-main-info-text"><span>Кабинеты: </span>Trust</p>
                                    <p className="group-main-info-text"><span>Вместимость комнаты: </span>20</p>
                                    <p className="group-main-info-text"><span>Даты обучения: </span><br />10.09.2024 — 10.01.2025</p>
                                    <p className="group-main-info-id-field">(id: 116359)</p>
                                    <div className="school-branches">
                                        <p className="school-info-block-title">Филиалы:</p>
                                        <div className="school-branch-badge">Leader Learning centre</div>
                                    </div>
                                </div>
                                <div className="group-action-buttons-block">
                                    <a>
                                        <div className="action-button button-orange">
                                            <svg>
                                                <use href={`${icons}#pencil`}></use>
                                            </svg>
                                        </div>
                                    </a>
                                    <a>
                                        <div className="action-button button-red">
                                            <svg>
                                                <use href={`${icons}#trashbin`}></use>
                                            </svg>
                                        </div>
                                    </a>
                                    <a>
                                        <div className="action-button button-yellow">
                                            <svg>
                                                <use href={`${icons}#mail`}></use>
                                            </svg>
                                        </div>
                                    </a>
                                    <a>
                                        <div className="action-button button-orange">
                                            +
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="info-block-separator"></div>

                            <div className="small-filter-block">
                                <div className="small-filter">
                                    <input className="small-filter-input" type="text" placeholder="Выберите фильтр" />
                                    <div className="small-filter-triangle-block">
                                        <div className="small-filter-triangle"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="small-students-list-block">
                                <table className="small-students-list">
                                    <tbody>

                                        <tr className="small-students-list-item">
                                            <td className="small-students-list-item-name-td">
                                                <a className="small-students-list-link">
                                                    Begmurodov Sunnat
                                                </a>
                                            </td>
                                            <td>
                                                <div className="small-students-list-item-phonenum-td">
                                                    (90) 123-45-67
                                                </div>
                                            </td>
                                            <td>
                                                <a className="small-students-functional-link">
                                                    <svg className="index-card-svg">
                                                        <use href={`${icons}#menu_2`}></use>
                                                    </svg>
                                                </a>
                                            </td>
                                        </tr>

                                        <tr className="small-students-list-item">
                                            <td className="small-students-list-item-name-td">
                                                <a className="small-students-list-link">
                                                    Jo'raqulov Bobomurod
                                                </a>
                                            </td>
                                            <td>
                                                <div className="small-students-list-item-phonenum-td">
                                                    (77) 157-65-64
                                                </div>
                                            </td>
                                            <td>
                                                <a className="small-students-functional-link">
                                                    <svg className="index-card-svg">
                                                        <use href={`${icons}#menu_2`}></use>
                                                    </svg>
                                                </a>
                                            </td>
                                        </tr>

                                        <tr className="small-students-list-item">
                                            <td className="small-students-list-item-name-td">
                                                <a className="small-students-list-link">
                                                    Melikova Xadiya
                                                </a>
                                            </td>
                                            <td>
                                                <div className="small-students-list-item-phonenum-td">
                                                    (97) 892-83-33
                                                </div>
                                            </td>
                                            <td>
                                                <a className="small-students-functional-link">
                                                    <svg className="index-card-svg">
                                                        <use href={`${icons}#menu_2`}></use>
                                                    </svg>
                                                </a>
                                            </td>
                                        </tr>

                                        <tr className="small-students-list-item">
                                            <td className="small-students-list-item-name-td">
                                                <a className="small-students-list-link">
                                                    Zokirov Kamron
                                                </a>
                                            </td>
                                            <td>
                                                <div className="small-students-list-item-phonenum-td">
                                                    (91) 187-77-89
                                                </div>
                                            </td>
                                            <td>
                                                <a className="small-students-functional-link">
                                                    <svg className="index-card-svg">
                                                        <use href={`${icons}#menu_2`}></use>
                                                    </svg>
                                                </a>
                                            </td>
                                        </tr>

                                        <tr className="small-students-list-item">
                                            <td className="small-students-list-item-name-td">
                                                <a className="small-students-list-link">
                                                    Fayozov Javohir
                                                </a>
                                            </td>
                                            <td>
                                                <div className="small-students-list-item-phonenum-td">
                                                    (94) 364-05-19
                                                </div>
                                            </td>
                                            <td>
                                                <a className="small-students-functional-link">
                                                    <svg className="index-card-svg">
                                                        <use href={`${icons}#menu_2`}></use>
                                                    </svg>
                                                </a>
                                            </td>
                                        </tr>

                                        <tr className="small-students-list-item">
                                            <td className="small-students-list-item-name-td">
                                                <a className="small-students-list-link">
                                                    To'shbo'riyev Xasan
                                                </a>
                                            </td>
                                            <td>
                                                <div className="small-students-list-item-phonenum-td">
                                                    (94) 364-05-19
                                                </div>
                                            </td>
                                            <td>
                                                <a className="small-students-functional-link">
                                                    <svg className="index-card-svg">
                                                        <use href={`${icons}#menu_2`}></use>
                                                    </svg>
                                                </a>
                                            </td>
                                        </tr>

                                        <tr className="small-students-list-item">
                                            <td className="small-students-list-item-name-td">
                                                <a className="small-students-list-link">
                                                    Djabarkulov Ayubjon
                                                </a>
                                            </td>
                                            <td>
                                                <div className="small-students-list-item-phonenum-td">
                                                    (90) 445-05-54
                                                </div>
                                            </td>
                                            <td>
                                                <a className="small-students-functional-link">
                                                    <svg className="index-card-svg">
                                                        <use href={`${icons}#menu_2`}></use>
                                                    </svg>
                                                </a>
                                            </td>
                                        </tr>


                                    </tbody>
                                </table>
                            </div>

                            <div className="show-archived-block">
                                <a className="show-archived-link">Показать архивированных студентов</a>
                            </div>

                        </div>

                        {/* Заметки */}
                        <div class="notes-block">
                            <div class="notes-colored-block"></div>
                            <div class="notes-content-block">
                                <div class="notes-message-block">
                                    <p class="notes-title">Заметка</p>
                                </div>
                                <a>
                                    <div class="action-button button-flag">
                                        <svg>
                                            <use href={`${icons}#flag`}></use>
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </div>

                    </div>

                    <div className="right-window-part-70">

                        {/* {Вкладки на выбор} */}
                        <div className="tabs-wrapper">
                            <div className="tabs-container">
                                <a className={`tab-link ${activeTab === 'attendance' ? 'tab-link--active' : ''}`} onClick={() => setActiveTab('attendance')}>
                                    Посещаемость
                                    <div className="tab-link-underline"></div>
                                </a>
                                <a className={`tab-link ${activeTab === 'online-classes' ? 'tab-link--active' : ''}`} onClick={() => setActiveTab('online-classes')}>
                                    Онлайн-уроки и материалы
                                    <div className="tab-link-underline"></div>
                                </a>
                                <a className={`tab-link ${activeTab === 'prices' ? 'tab-link--active' : ''}`} onClick={() => setActiveTab('prices')}>
                                    Цены со скидкой
                                    <div className="tab-link-underline"></div>
                                </a>
                                <a className={`tab-link ${activeTab === 'exams' ? 'tab-link--active' : ''}`} onClick={() => setActiveTab('exams')}>
                                    Экзамены
                                    <div className="tab-link-underline"></div>
                                </a>
                                <a className={`tab-link ${activeTab === 'history' ? 'tab-link--active' : ''}`} onClick={() => setActiveTab('history')}>
                                    История
                                    <div className="tab-link-underline"></div>
                                </a>
                                <a className={`tab-link ${activeTab === 'comments' ? 'tab-link--active' : ''}`} onClick={() => setActiveTab('comments')}>
                                    Комментарии
                                    <div className="tab-link-underline"></div>
                                </a>
                            </div>
                            <div className="tabs-divider"></div>
                        </div>

                        <div className={`main-big-tab-container ${activeTab === 'attendance' ? 'main-big-tab-container--active' : ''}`}>
                            <div className="attendance-container">
                                <div className="attendance-top-block">
                                    <div className="attendance-title-block">Посещаемость</div>
                                    <div className="attendance-navigation-block"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}

export default GroupProfile;

import './studentProfile.css';

import icons from "./../../../img/icons/icons.svg";

import React, { useState, useEffect } from 'react';




const StudentProfile = () => {
    const [activeTab, setActiveTab] = useState('groups');

    let teacherData = null;

    return (
        <main className="mainwn-min-size">
            <div className='stud-prof-main-bl'>

                <div className="about-student-side">

                    <div className="student-profile-container">
                        <div className="student-profile-content">
                            <div className="student-info-block">
                                <div className="student-main-info-block">
                                    <div className="student-flex-part">
                                        <div className="student-main-info-block-left">
                                            <div className="student-photo-block">
                                                {teacherData?.photo ? (
                                                    <img src="" alt="Фото преподавателя" className="student-photo" />
                                                ) : (
                                                    <div className="student-photo">
                                                        <svg className="student-photo-svg">
                                                            <use href={`${icons}#user`}></use>
                                                        </svg>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="student-name-block">
                                                <div className="student-name">Maxmudova Kumush</div>
                                                <p className="student-id">(id: 12345)</p>

                                            </div>

                                            <div className="student-balance">
                                                <div class="balance-amount">-30 000 UZS</div>
                                                <p class="student-info-block-title">&nbsp;- баланс</p>
                                            </div>

                                            <div className="student-contact-info">
                                                <p>Телефон: <br></br><span>90 123 45 67</span></p>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="student-info-header">
                                                <div className="student-action-buttons">
                                                    <a>
                                                        <div className="action-button button-edit">
                                                            <svg>
                                                                <use href={`${icons}#pencil`}></use>
                                                            </svg>
                                                        </div>
                                                    </a>
                                                    <a>
                                                        <div className="action-button button-message">
                                                            <svg>
                                                                <use href={`${icons}#mail`}></use>
                                                            </svg>
                                                        </div>
                                                    </a>
                                                    <a>
                                                        <div className="action-button button-trashbin">
                                                            <svg>
                                                                <use href={`${icons}#trashbin`}></use>
                                                            </svg>
                                                        </div>
                                                    </a>
                                                    <a>
                                                        <div className="action-button button-clock">
                                                            <svg>
                                                                <use href={`${icons}#clock`}></use>
                                                            </svg>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='student-info-block-separator'></div>

                                    <div className="student-add-date-block">
                                        <p class="student-info-block-title">Дата добавления:</p>
                                        <div className="date-badge">&nbsp;18 октября 2023 г.</div>
                                    </div>

                                    <div className="student-branches">
                                        <p class="student-info-block-title">Филиал:</p>
                                        <div className="branch-badge">Leader Learning centre</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="notes-block">
                        <div className="notes-colored-block"></div>
                        <div className="notes-content-block">
                            <div className="notes-message-block">
                                <p className="notes-title">Комментарии к студенту</p>
                            </div>
                            <a>
                                <div className="action-button button-flag">
                                    <svg>
                                        <use href={`${icons}#flag`}></use>
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>

                <div className="student-full-info-side">
                    {/* {Вкладки студента на выбор} */}
                    <div className="tabs-wrapper">
                        <div className="tabs-container">
                            <a className={`tab-link ${activeTab === 'groups' ? 'tab-link--active' : ''}`} onClick={() => setActiveTab('groups')}>
                                Группы
                                <div className="tab-link-underline"></div>
                            </a>
                            <a className={`tab-link ${activeTab === 'comments' ? 'tab-link--active' : ''}`} onClick={() => setActiveTab('comments')}>
                                Комментарии
                                <div className="tab-link-underline"></div>
                            </a>
                            <a className={`tab-link ${activeTab === 'calls' ? 'tab-link--active' : ''}`} onClick={() => setActiveTab('calls')}>
                                История звонков
                                <div className="tab-link-underline"></div>
                            </a>
                            <a className={`tab-link ${activeTab === 'sms' ? 'tab-link--active' : ''}`} onClick={() => setActiveTab('sms')}>
                                SMS-оповещения
                                <div className="tab-link-underline"></div>
                            </a>
                            <a className={`tab-link ${activeTab === 'history' ? 'tab-link--active' : ''}`} onClick={() => setActiveTab('history')}>
                                История аккаунта
                                <div className="tab-link-underline"></div>
                            </a>
                            <a className={`tab-link ${activeTab === 'order_history' ? 'tab-link--active' : ''}`} onClick={() => setActiveTab('order_history')}>
                                История заявки
                                <div className="tab-link-underline"></div>
                            </a>
                        </div>
                        <div className="tabs-divider"></div>
                    </div>

                </div>

            </div>
        </main >
    )
}

export default StudentProfile;

import './studentProfile.css';

import icons from "./../../../img/icons/icons.svg";

import React, { useState, useEffect } from 'react';




const StudentProfile = () => {
    const [activeTab, setActiveTab] = useState('groups');

    let teacherData = null;

    return (
        <main className="mainwn-min-size extrapadding">
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

                                    <div className="student-func-buttons">
                                        <div className="multibutton-block-flex multibutton-blue">
                                            <div className="multibutton">
                                                <div className="multibutton-block">
                                                    <svg>
                                                        <use href={`${icons}#group`}></use>
                                                    </svg>
                                                    <p className="multibutton-block-text">
                                                        Добавить в группу
                                                    </p>
                                                </div>
                                                <div className="triangle-block">
                                                    <div className="multibutton-triangle"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="multibutton-block-flex multibutton-green">
                                            <div className="multibutton">
                                                <div className="multibutton-block">
                                                    <svg>
                                                        <use href={`${icons}#cash_pack1`}></use>
                                                    </svg>
                                                    <p className="multibutton-block-text">
                                                        Добавить оплату
                                                    </p>
                                                </div>
                                                <div className="triangle-block">
                                                    <div className="multibutton-triangle"></div>
                                                </div>
                                            </div>
                                        </div>
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


                    {/* Список групп студента */}
                    <div className="student-groups-list">

                        <div className="student-group-card">
                            <div className="student-group-card-content">
                                <div className="student-group-info-flex">

                                    <div className="student-group-info-left">
                                        <div className="group-name">
                                            <div className="group-name-block">
                                                <p className="group-name-gray-bg">IELTS05</p>
                                            </div>
                                            <div className="group-course-name">IELTS</div>
                                            <div className="group-teacher-name">Hasanov Suxrob</div>
                                        </div>
                                    </div>

                                    <div className="student-group-info-right">
                                        <div className="group-exist-date">19.09.2024 —</div>
                                        <div className="group-exist-date">03.02.2025</div>
                                        <div className="group-exist-date">Четные дни • 14:00</div>
                                    </div>
                                </div>

                                <div className='student-info-block-separator'></div>

                                <div className="student-group-info-flex">
                                    <div className="student-group-flex-info">
                                        <p className="student-group-info-text"><span>Статус:</span> Активен (Оплачивает обучение)</p>
                                        <p className="student-group-info-text"><span>Дата добавления:</span> 23.09.2024</p>
                                        <p className="student-group-info-text"><span>Дата активации:</span> 24.09.2024</p>
                                        <p className="student-group-info-text"><span>Стоимость для студента:</span> 540 000 UZS</p>
                                    </div>
                                    <div className="student-info-header">
                                        <div className="student-action-buttons">
                                            <a>
                                                <div className="action-button button-pause">
                                                    <svg>
                                                        <use href={`${icons}#pause`}></use>
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="student-group-card">
                            <div className="student-group-card-content">
                                <div className="student-group-info-flex">

                                    <div className="student-group-info-left">
                                        <div className="group-name">
                                            <div className="group-name-block">
                                                <p className="group-name-gray-bg">IELTS05</p>
                                            </div>
                                            <div className="group-course-name">IELTS</div>
                                            <div className="group-teacher-name">Hasanov Suxrob</div>
                                        </div>
                                    </div>

                                    <div className="student-group-info-right">
                                        <div className="group-exist-date">19.09.2024 —</div>
                                        <div className="group-exist-date">03.02.2025</div>
                                        <div className="group-exist-date">Четные дни • 14:00</div>
                                    </div>
                                </div>

                                <div className='student-info-block-separator'></div>

                                <div className="student-group-info-flex">
                                    <div className="student-group-flex-info">
                                        <p className="student-group-info-text"><span>Статус:</span> Активен (Оплачивает обучение)</p>
                                        <p className="student-group-info-text"><span>Дата добавления:</span> 23.09.2024</p>
                                        <p className="student-group-info-text"><span>Дата активации:</span> 24.09.2024</p>
                                        <p className="student-group-info-text"><span>Стоимость для студента:</span> 540 000 UZS</p>
                                    </div>
                                    <div className="student-info-header">
                                        <div className="student-action-buttons">
                                            <a>
                                                <div className="action-button button-pause">
                                                    <svg>
                                                        <use href={`${icons}#pause`}></use>
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="student-group-card">
                            <div className="student-group-card-content">
                                <div className="student-group-info-flex">

                                    <div className="student-group-info-left">
                                        <div className="group-name">
                                            <div className="group-name-block">
                                                <p className="group-name-gray-bg">IELTS05</p>
                                            </div>
                                            <div className="group-course-name">IELTS</div>
                                            <div className="group-teacher-name">Hasanov Suxrob</div>
                                        </div>
                                    </div>

                                    <div className="student-group-info-right">
                                        <div className="group-exist-date">19.09.2024 —</div>
                                        <div className="group-exist-date">03.02.2025</div>
                                        <div className="group-exist-date">Четные дни • 14:00</div>
                                    </div>
                                </div>

                                <div className='student-info-block-separator'></div>

                                <div className="student-group-info-flex">
                                    <div className="student-group-flex-info">
                                        <p className="student-group-info-text"><span>Статус:</span> Активен (Оплачивает обучение)</p>
                                        <p className="student-group-info-text"><span>Дата добавления:</span> 23.09.2024</p>
                                        <p className="student-group-info-text"><span>Дата активации:</span> 24.09.2024</p>
                                        <p className="student-group-info-text"><span>Стоимость для студента:</span> 540 000 UZS</p>
                                    </div>
                                    <div className="student-info-header">
                                        <div className="student-action-buttons">
                                            <a>
                                                <div className="action-button button-pause">
                                                    <svg>
                                                        <use href={`${icons}#pause`}></use>
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Заголовок месячного баланса*/}
                    <h1 className="title-text">Статус баланса за месяц</h1>

                    {/* Блок статуса баланса за месяц */}
                    <div className="month-balance">
                        <div className="month-balance-content">

                            <div className="balance-block positive-balance">
                                <div className="month-balance-date">2024 M10 1</div>
                                <div className="month-balance-sum">105,000</div>
                            </div>

                            <div className="balance-block negative-balance">
                                <div className="month-balance-date">2024 M09 1</div>
                                <div className="month-balance-sum">-135,000</div>
                            </div>

                        </div>
                    </div>

                    {/* Заголовок истории оплаты*/}
                    <h1 className="title-text">Платежи</h1>


                    {/* Блок "Платежи" */}
                    <div className="student-payments">
                        <div className="student-payments-content">
                            <table className="payments-table">
                                <tbody>
                                    <tr>
                                        <th className="payments-table-th" aria-colindex={1}>Дата</th>
                                        <th className="payments-table-th" aria-colindex={2}>Тип</th>
                                        <th className="payments-table-th" aria-colindex={3}>Сумма</th>
                                        <th className="payments-table-th" aria-colindex={4}>Комментарии</th>
                                        <th className="payments-table-th" aria-colindex={5}>Сотрудник</th>
                                        <th className="payments-table-th" aria-colindex={6}></th>
                                    </tr>

                                    <tr className="payment-table-tr--grey">
                                        <td className="payment-table-td"><div className="td-payment-date">05.10.2024</div></td>
                                        <td className="payment-table-td"><div className="td-payment-staus-block"><div className="td-payment-staus td-payment-staus--positive">оплата</div></div></td>
                                        <td className="payment-table-td"><div><span className="td-payment-sum td-payment-sum--positive">+690 000</span> UZS</div></td>
                                        <td className="payment-table-td">
                                            <div className="group-name-block"><p className="group-name-gray-bg group-name-darkgray-bg">IELTS05</p>&nbsp;3 ур.</div>
                                            <div className="td-payment-comment-grey">24.09.2024—31.10.2024</div>
                                        </td>
                                        <td className="payment-table-td">
                                            <div className="td-payment-comment">admin</div>
                                            <div className="td-payment-comment-grey">05.10.2024 16:59:47</div>
                                        </td>
                                        <td className="payment-table-td">
                                            <div className="multibutton-block-flex multibutton-blue payment-multibutton-table-td">
                                                <div className="multibutton">
                                                    <div className="multibutton-block">
                                                        <svg>
                                                            <use href={`${icons}#printer`}></use>
                                                        </svg>
                                                        <p className="multibutton-block-text">
                                                            Распечатать
                                                        </p>
                                                    </div>
                                                    <div className="triangle-block">
                                                        <div className="multibutton-triangle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr className="">
                                        <td className="payment-table-td"><div className="td-payment-date">05.10.2024</div></td>
                                        <td className="payment-table-td"><div className="td-payment-staus-block"><div className="td-payment-staus">система</div></div></td>
                                        <td className="payment-table-td"><div><span className="td-payment-sum">-125 000</span> UZS</div></td>
                                        <td className="payment-table-td">
                                            <div className="group-name-block"><p className="group-name-gray-bg group-name-darkgray-bg">IELTS05</p>&nbsp;3 ур.</div>
                                            <div className="td-payment-comment-grey">24.09.2024—31.10.2024</div>
                                        </td>
                                        <td className="payment-table-td">
                                            <div className="td-payment-comment">admin</div>
                                            <div className="td-payment-comment-grey">05.10.2024 16:59:47</div>
                                        </td>
                                        <td className="payment-table-td">
                                            <div className="multibutton-block-flex multibutton-blue payment-multibutton-table-td">
                                                <div className="multibutton">
                                                    <div className="multibutton-block">
                                                        <svg>
                                                            <use href={`${icons}#printer`}></use>
                                                        </svg>
                                                        <p className="multibutton-block-text">
                                                            Распечатать
                                                        </p>
                                                    </div>
                                                    <div className="triangle-block">
                                                        <div className="multibutton-triangle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr className="payment-table-tr--grey">
                                        <td className="payment-table-td"><div className="td-payment-date">05.10.2024</div></td>
                                        <td className="payment-table-td"><div className="td-payment-staus-block"><div className="td-payment-staus">система</div></div></td>
                                        <td className="payment-table-td"><div><span className="td-payment-sum">-60 000</span> UZS</div></td>
                                        <td className="payment-table-td">
                                            <div className="group-name-block"><p className="group-name-gray-bg group-name-darkgray-bg">IELTS05</p>&nbsp;3 ур.</div>
                                            <div className="td-payment-comment-grey">24.09.2024—31.10.2024</div>
                                        </td>
                                        <td className="payment-table-td">
                                            <div className="td-payment-comment">admin</div>
                                            <div className="td-payment-comment-grey">05.10.2024 16:59:47</div>
                                        </td>
                                        <td className="payment-table-td">
                                            <div className="multibutton-block-flex multibutton-blue payment-multibutton-table-td">
                                                <div className="multibutton">
                                                    <div className="multibutton-block">
                                                        <svg>
                                                            <use href={`${icons}#printer`}></use>
                                                        </svg>
                                                        <p className="multibutton-block-text">
                                                            Распечатать
                                                        </p>
                                                    </div>
                                                    <div className="triangle-block">
                                                        <div className="multibutton-triangle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>


                                </tbody>
                            </table>

                        </div>
                    </div>

                </div>
            </div>
        </main >
    )
}

export default StudentProfile;

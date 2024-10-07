import './studentProfile.css';

import icons from "./../../../img/icons/icons.svg";

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import StudentGroupsTab from './GroupsTab/StudentGroupsTab';
import { fetchStudent } from '../../../utils/api';


const StudentProfile = () => {
    const { id: studentId } = useParams();
    const [activeTab, setActiveTab] = useState('groups');
    const [studentData, setStudentData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const loadTeacherData = async () => {
            if (!studentId) return;
            try {
                const studentData = await fetchStudent(studentId);
                console.log(studentData);
                setStudentData(studentData);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        loadTeacherData();
    }, [studentId]);



    if (isLoading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return <div>Ошибка: {error}</div>;
    }


    return (
        <main className="mainwn-min-size extrapadding">
            <div className='stud-prof-main-bl'>

                <div className="about-student-side">

                    <div className="student-profile-block">
                        <div className="student-profile-content">
                            <div className="student-info-block">
                                <div className="student-main-info-block">
                                    <div className="student-flex-part">
                                        <div className="student-main-info-block-left">
                                            <div className="student-photo-block">
                                                {studentData?.photo ? (
                                                    <img src={studentData.photo} alt="Фото преподавателя" className="student-photo" />
                                                ) : (
                                                    <div className="student-photo">
                                                        <svg className="student-photo-svg">
                                                            <use href={`${icons}#user`}></use>
                                                        </svg>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="student-name-block">
                                                <div className="student-name">{studentData.fullname}</div>
                                                <p className="student-id">(id: {studentData.id})</p>

                                            </div>

                                            <div className="student-balance">
                                                <div className={`balance-amount ${studentData.balance >= 0 ? 'balance-amount--positive' : 'balance-amount--negative'}`}>{studentData.balance} UZS</div>
                                                <p className="student-info-block-title">&nbsp;- баланс</p>
                                            </div>

                                            <div className="student-contact-info">
                                                <p>Телефон: <br></br><span>{studentData.phone_number}</span></p>
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
                                        <p className="student-info-block-title">Дата добавления:</p>
                                        <div className="date-badge">&nbsp;{studentData.date_created}</div>
                                    </div>

                                    <div className="student-branches">
                                        <p className="student-info-block-title">Филиал:</p>
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

                    <div className={`main-big-tab-container ${activeTab === 'groups' ? 'main-big-tab-container--active' : ''}`}>
                        <StudentGroupsTab studentData={studentData}/>
                    </div>

                    <div className={`main-big-tab-container ${activeTab === 'comments' ? 'main-big-tab-container--active' : ''}`}>
                        <div className="big-nothing-found-bl1">Здесь пока ничего нет</div>
                    </div>
                    <div className={`main-big-tab-container ${activeTab === 'calls' ? 'main-big-tab-container--active' : ''}`}>
                        <div className="big-nothing-found-bl1">Здесь пока ничего нет</div>
                    </div>
                    <div className={`main-big-tab-container ${activeTab === 'sms' ? 'main-big-tab-container--active' : ''}`}>
                        <div className="big-nothing-found-bl1">Здесь пока ничего нет</div>
                    </div>
                    <div className={`main-big-tab-container ${activeTab === 'history' ? 'main-big-tab-container--active' : ''}`}>
                        <div className="big-nothing-found-bl1">Здесь пока ничего нет</div>
                    </div>
                    <div className={`main-big-tab-container ${activeTab === 'order_history' ? 'main-big-tab-container--active' : ''}`}>
                        <div className="big-nothing-found-bl1">Здесь пока ничего нет</div>
                    </div>


                </div>
            </div>
        </main >
    )
}

export default StudentProfile;

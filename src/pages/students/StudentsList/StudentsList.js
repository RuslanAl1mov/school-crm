import React, { useState } from "react";
import "./style.css";
import icons from "./../../../img/icons/icons.svg";
import { NavLink } from 'react-router-dom';
import StudentAddModalForm from "./../../../components/students/studentAddModalForm/StudentAddModalForm";

const StudentsList = () => {
    // Стейт для управления модальным окном
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Функция для открытия модального окна
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    // Функция для закрытия модального окна
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <main className="mainwn-min-size">
            <div className="stud-li-pg-content-bl">
                <div className="mn-title-add-btn-bl">
                    <div className="mn-title-bl">
                        <h1>Студенты</h1>
                        <span>Количество — 5</span>
                    </div>

                    <div className="mn-title-btn-bl">
                        {/* Кнопка для открытия модального окна */}
                        <a onClick={handleOpenModal}>Добавить</a>
                    </div>
                </div>

                <div className="students-main-content">
                    <div className="students-list">
                        <table className="students-list-table">
                            <tbody>
                                <tr>
                                    <th></th>
                                    <th><input type='checkbox' /></th>
                                    <th>Имя</th>
                                    <th>Телефон</th>
                                    <th>Группы</th>
                                    <th>Учителя</th>
                                    <th>Даты обучения</th>
                                    <th>Баланс</th>
                                    <th></th>
                                </tr>

                                <tr className="student-card">
                                    <td>
                                        <a className="student-card-link">
                                            1.
                                        </a>
                                    </td>
                                    <td>
                                        <a className="student-card-link">
                                            <input type='checkbox' />
                                        </a>
                                    </td>
                                    <td>
                                        <NavLink to="/teachers/profile/1" className="student-card-link">
                                            <span id="student-name">
                                                Dilshodov Axmat
                                            </span>
                                        </NavLink>
                                    </td>
                                    <td>
                                        <NavLink to="/teachers/profile/1" className="student-card-link">
                                            91 234 56 78
                                        </NavLink>
                                    </td>
                                    <td>
                                        <NavLink to="/teachers/profile/1" className="student-card-link">
                                            4 группы
                                        </NavLink>
                                    </td>
                                    <td>
                                        <NavLink to="/teachers/profile/1" className="student-card-link">
                                            4 группы
                                        </NavLink>
                                    </td>
                                    <td>
                                        <NavLink to="/teachers/profile/1" className="student-card-link">
                                            4 группы
                                        </NavLink>
                                    </td>
                                    <td>
                                        <NavLink to="/teachers/profile/1" className="student-card-link">
                                            4 группы
                                        </NavLink>
                                    </td>
                                    <td>
                                        <a className="student-card-link" id="student-actions">
                                            <svg className="index-card-svg">
                                                <use href={`${icons}#menu_2`}></use>
                                            </svg>
                                        </a>
                                    </td>
                                </tr>

                                <tr className="student-card">
                                    <td>
                                        <a className="student-card-link">
                                            2.
                                        </a>
                                    </td>
                                    <td>
                                        <a className="student-card-link">
                                            <input type='checkbox' />
                                        </a>
                                    </td>
                                    <td>
                                        <NavLink to="/teachers/profile/1" className="student-card-link">
                                            <span id="student-name">
                                            Bayonov Faridun
                                            </span>
                                        </NavLink>
                                    </td>
                                    <td>
                                        <NavLink to="/teachers/profile/1" className="student-card-link">
                                            91 234 56 78
                                        </NavLink>
                                    </td>
                                    <td>
                                        <NavLink to="/teachers/profile/1" className="student-card-link">
                                            4 группы
                                        </NavLink>
                                    </td>
                                    <td>
                                        <NavLink to="/teachers/profile/1" className="student-card-link">
                                            4 группы
                                        </NavLink>
                                    </td>
                                    <td>
                                        <NavLink to="/teachers/profile/1" className="student-card-link">
                                            4 группы
                                        </NavLink>
                                    </td>
                                    <td>
                                        <NavLink to="/teachers/profile/1" className="student-card-link">
                                            4 группы
                                        </NavLink>
                                    </td>
                                    <td>
                                        <a className="student-card-link" id="student-actions">
                                            <svg className="index-card-svg">
                                                <use href={`${icons}#menu_2`}></use>
                                            </svg>
                                        </a>
                                    </td>
                                </tr>

                                <tr className="student-card">
                                    <td>
                                        <a className="student-card-link">
                                            3.
                                        </a>
                                    </td>
                                    <td>
                                        <a className="student-card-link">
                                            <input type='checkbox' />
                                        </a>
                                    </td>
                                    <td>
                                        <NavLink to="/teachers/profile/1" className="student-card-link">
                                            <span id="student-name">
                                            Fayozov Javohir
                                            </span>
                                        </NavLink>
                                    </td>
                                    <td>
                                        <NavLink to="/teachers/profile/1" className="student-card-link">
                                            91 234 56 78
                                        </NavLink>
                                    </td>
                                    <td>
                                        <NavLink to="/teachers/profile/1" className="student-card-link">
                                            4 группы
                                        </NavLink>
                                    </td>
                                    <td>
                                        <NavLink to="/teachers/profile/1" className="student-card-link">
                                            4 группы
                                        </NavLink>
                                    </td>
                                    <td>
                                        <NavLink to="/teachers/profile/1" className="student-card-link">
                                            4 группы
                                        </NavLink>
                                    </td>
                                    <td>
                                        <NavLink to="/teachers/profile/1" className="student-card-link">
                                            4 группы
                                        </NavLink>
                                    </td>
                                    <td>
                                        <a className="student-card-link" id="student-actions">
                                            <svg className="index-card-svg">
                                                <use href={`${icons}#menu_2`}></use>
                                            </svg>
                                        </a>
                                    </td>
                                </tr>

                                <tr className="student-card">
                                    <td>
                                        <a className="student-card-link">
                                            4.
                                        </a>
                                    </td>
                                    <td>
                                        <a className="student-card-link">
                                            <input type='checkbox' />
                                        </a>
                                    </td>
                                    <td>
                                        <NavLink to="/teachers/profile/1" className="student-card-link">
                                            <span id="student-name">
                                            Nematullayev Nozimjon
                                            </span>
                                        </NavLink>
                                    </td>
                                    <td>
                                        <NavLink to="/teachers/profile/1" className="student-card-link">
                                            91 234 56 78
                                        </NavLink>
                                    </td>
                                    <td>
                                        <NavLink to="/teachers/profile/1" className="student-card-link">
                                            4 группы
                                        </NavLink>
                                    </td>
                                    <td>
                                        <NavLink to="/teachers/profile/1" className="student-card-link">
                                            4 группы
                                        </NavLink>
                                    </td>
                                    <td>
                                        <NavLink to="/teachers/profile/1" className="student-card-link">
                                            4 группы
                                        </NavLink>
                                    </td>
                                    <td>
                                        <NavLink to="/teachers/profile/1" className="student-card-link">
                                            4 группы
                                        </NavLink>
                                    </td>
                                    <td>
                                        <a className="student-card-link" id="student-actions">
                                            <svg className="index-card-svg">
                                                <use href={`${icons}#menu_2`}></use>
                                            </svg>
                                        </a>
                                    </td>
                                </tr>

                                <tr className="student-card">
                                    <td>
                                        <a className="student-card-link">
                                            5.
                                        </a>
                                    </td>
                                    <td>
                                        <a className="student-card-link">
                                            <input type='checkbox' />
                                        </a>
                                    </td>
                                    <td>
                                        <NavLink to="/teachers/profile/1" className="student-card-link">
                                            <span id="student-name">
                                            Norboyev Firdavs
                                            </span>
                                        </NavLink>
                                    </td>
                                    <td>
                                        <NavLink to="/teachers/profile/1" className="student-card-link">
                                            91 234 56 78
                                        </NavLink>
                                    </td>
                                    <td>
                                        <NavLink to="/teachers/profile/1" className="student-card-link">
                                            4 группы
                                        </NavLink>
                                    </td>
                                    <td>
                                        <NavLink to="/teachers/profile/1" className="student-card-link">
                                            4 группы
                                        </NavLink>
                                    </td>
                                    <td>
                                        <NavLink to="/teachers/profile/1" className="student-card-link">
                                            4 группы
                                        </NavLink>
                                    </td>
                                    <td>
                                        <NavLink to="/teachers/profile/1" className="student-card-link">
                                            4 группы
                                        </NavLink>
                                    </td>
                                    <td>
                                        <a className="student-card-link" id="student-actions">
                                            <svg className="index-card-svg">
                                                <use href={`${icons}#menu_2`}></use>
                                            </svg>
                                        </a>
                                    </td>
                                </tr>

                            </tbody>
                        </table>

                    </div>
                </div>
                
            </div>


            <StudentAddModalForm isOpen={isModalOpen} onClose={handleCloseModal} />

        </main>
    );
}

export default StudentsList;
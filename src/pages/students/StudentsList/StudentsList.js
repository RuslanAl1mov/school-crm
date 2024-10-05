import "./style.css";

import React, { useState, useEffect } from "react";

import StudentAddModalForm from "./studentAddModalForm/StudentAddModalForm";
import StudentCard from "./StudentCard/StudentCard";

import { fetchStudentsList } from "../../../utils/api";

const StudentsList = () => {
    // Стейт для управления модальным окном
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Стейты для данных и загрузки
    const [studentsData, setStudentsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);


    // Функция для открытия модального окна
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    // Функция для закрытия модального окна
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };


    // Загружаем данные при монтировании компонента
    useEffect(() => {
        const loadStudentsData = async () => {
            try {
                const studentsData = await fetchStudentsList();
                setStudentsData(studentsData);
            } catch (error) {
                setError(error.message);
                console.log(error)
            } finally {
                setIsLoading(false);
            }
        }

        loadStudentsData();
    }, []);


    if (isLoading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return <div>Ошибка: {error}</div>;
    }



    return (
        <main className="mainwn-min-size">
            <div className="stud-li-pg-content-bl">
                <div className="mn-title-add-btn-bl">
                    <div className="mn-title-bl">
                        <h1>Студенты</h1>
                        <span>Количество — {studentsData.total_active_students}</span>
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
                                    <th><div className="student-card-link-num"></div></th>
                                    <th><input type='checkbox' /></th>
                                    <th style={{paddingLeft: 30 + "px"}}>Имя</th>
                                    <th>Телефон</th>
                                    <th>Группа</th>
                                    <th>Преподаватель</th>
                                    <th>Дата обучения</th>
                                    <th>Баланс</th>
                                    <th></th>
                                </tr>

                                {isLoading ? (
                                    Array(5).fill(0).map((_, index) => (
                                        <div key={index} className="teacher-card">
                                            <div className="teacher-card-table-wrapper">
                                                <Skeleton height="50px" rx={10} ry={10} />
                                            </div>
                                        </div>
                                    ))
                                ) : (!error ? studentsData.students.results.map((studentData) => (
                                    <StudentCard studentData={studentData} key={studentData.id} />
                                )) : ''
                                )}
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
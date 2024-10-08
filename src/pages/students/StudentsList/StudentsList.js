import "./style.css";
import React, { useState } from "react";
import StudentAddModalForm from "./studentAddModalForm/StudentAddModalForm";
import StudentsTable from "./StudentsTable/StudentsTable";

// Основной компонент страницы студентов
const StudentsList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [totalStudents, setTotalStudents] = useState(0);

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
                        <span>Количество — {totalStudents}</span>
                    </div>

                    <div className="mn-title-btn-bl">
                        <a onClick={handleOpenModal}>Добавить</a>
                    </div>
                </div>

                {/* Таблица студентов с пагинацией */}
                <StudentsTable setTotalStudents={setTotalStudents}/>

            </div>

            {/* Модальное окно для добавления студента */}
            <StudentAddModalForm isOpen={isModalOpen} onClose={handleCloseModal} />
        </main>
    );
}

export default StudentsList;

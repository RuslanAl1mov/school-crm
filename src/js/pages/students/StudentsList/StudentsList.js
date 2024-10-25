import "./StudentsListStyle.css";

import React, { useState } from "react";
import StudentsTable from "./StudentsTable/StudentsTable";

const StudentsList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [totalStudents, setTotalStudents] = useState(0);
    const [limit] = useState(10); // Кол-во элементов в списке

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

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

                <StudentsTable setTotalStudents={setTotalStudents} limit={limit} isModalOpen={isModalOpen} handleCloseModal={handleCloseModal}/>

            </div>

        </main>
    );
}

export default StudentsList;

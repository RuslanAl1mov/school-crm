import { useState } from 'react';
import './CoursesListStyle.css';
import CoursesList from './CoursesList/CoursesList';


const CoursesListPage = () => {
    const [totalCourses, setTotalCourses] = useState(0);
    const [limit] = useState(70); // Кол-во элементов в списке
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <main className="mainwn-min-size">
            <div className="mn-title-add-btn-bl">
                <div className="mn-title-bl">
                    <h1>Курсы</h1>
                    <span>Количество — {totalCourses}</span>
                </div>

                <div className="mn-title-btn-bl">
                    <a onClick={handleOpenModal}>Добавить</a>
                </div>
            </div>


            <div className="courses-list-container">
                <div className="info-block-separator"></div>

                    <CoursesList setTotalCourses={setTotalCourses} isModalOpen={isModalOpen} handleCloseModal={handleCloseModal} />

            </div>

        </main>
    );
}

export default CoursesListPage;
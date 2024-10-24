import { useEffect, useState } from "react";
import { fetchCoursesList } from "../../../../../utils/api";
import CourseCard from "../CourseCard/CourseCard";
import CourseAddModalForm from "../courseAddModalForm/CourseAddModalForm";


const CoursesList = ({ setTotalCourses, isModalOpen, setIsModalOpen, handleCloseModal }) => {
    const [coursesData, setCoursesData] = useState(null); // Изначально null, так как данных нет
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState(null);

    

    // Функция загрузки списка курсов
    const loadCourses = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const data = await fetchCoursesList();
            setCoursesData(data);
            setTotalCourses(data.results?.total_courses_number || 0); // Отображение общего количества курсов
        } catch (error) {
            setIsError(true);
            setError("Ошибка при загрузке данных о курсах");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadCourses();
    }, []);

    return (
        <div className="courses-list-block">
            {isLoading && <p>Загрузка...</p>}
            {isError && <p>{error}</p>}
            {coursesData && coursesData.results?.courses?.length > 0 ? (
                coursesData.results.courses.map((courseData) => (
                    <CourseCard key={courseData.id} courseData={courseData} />
                ))
            ) : (
                !isLoading && <p>Курсы не найдены</p>
            )}

            <CourseAddModalForm isOpen={isModalOpen} onClose={handleCloseModal} setIsModalOpen={setIsModalOpen} updateCourseList={loadCourses}/>
        </div>
    );
}

export default CoursesList;

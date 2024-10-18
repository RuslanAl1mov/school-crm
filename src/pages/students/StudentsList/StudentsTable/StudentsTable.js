import React, { useState, useEffect } from "react";
import StudentCard from "./../StudentCard/StudentCard";
import icons from "./../../../../img/icons/icons.svg";
import { fetchStudentsList } from "../../../../utils/api";
import Pagination from "../../../../components/pagination/Pagination";
import StudentCardSkeleton from "../StudentCard/StudentCardSkeleton";


const StudentsTable = ({ setTotalStudents, limit }) => {
    const [studentsData, setStudentsData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);


    // Функция загрузки данных студентов
    const loadStudents = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const data = await fetchStudentsList(page, limit);
            setStudentsData(data);
            setTotalStudents(data.total_active_students); // Обновлено для отображения общего количества студентов
            setTotalPages(Math.ceil(data.students.count / limit));
        } catch (error) {
            setError("Ошибка при загрузке данных студентов");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadStudents();
    }, [page, limit]);

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    if (isLoading) {
        return (
            <div className="students-list">
                <table className="students-list-table">
                    <tbody>
                        <tr>
                            <th><div className="student-card-link-num"></div></th>
                            <th><input type='checkbox' /></th>
                            <th style={{ paddingLeft: 30 + "px" }}>Имя</th>
                            <th>Телефон</th>
                            <th>Группа</th>
                            <th>Преподаватель</th>
                            <th>Дата обучения</th>
                            <th>Баланс</th>
                            <th></th>
                        </tr>
                        {[...Array(5)].map((_, index) => (
                            <StudentCardSkeleton key={index} />
                        ))}
                    </tbody>
                </table>
            </div>
        )
            ;
    }

    if (error) {
        return <div>Ошибка: {error}</div>;
    }
    return (
        <>
            <div className="students-list">
                <table className="students-list-table">
                    <tbody>
                        <tr>
                            <th><div className="student-card-link-num"></div></th>
                            <th><input type='checkbox' /></th>
                            <th style={{ paddingLeft: 30 + "px" }}>Имя</th>
                            <th>Телефон</th>
                            <th>Группа</th>
                            <th>Преподаватель</th>
                            <th>Дата обучения</th>
                            <th>Баланс</th>
                            <th></th>
                        </tr>

                        {studentsData && studentsData.students.results.map((studentData, index) => (
                            <StudentCard
                                studentData={studentData}
                                key={studentData.id}
                                studentNumber={(page - 1) * limit + index + 1} // Передаем номер студента
                            />
                        ))}
                    </tbody>
                </table>
            </div>

            {(totalPages === 1) ? '' : ( // Используйте строгое равенство
                <Pagination
                    page={page}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            )}
        </>
    );
};

export default StudentsTable;
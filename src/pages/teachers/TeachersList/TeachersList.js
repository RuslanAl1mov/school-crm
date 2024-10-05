import "./style.css";

import React, { useState, useEffect } from "react";

import TeacherAddModalForm from "./teacherAddModalForm/TeacherAddModalForm";
import TeacherCard from "./TeacherCard/TeacherCard";
import Skeleton from "../../../components/loader/Skeleton";

import { fetchTeachersList } from "../../../utils/api";


const TeachersList = () => {
  // Стейт для управления модальным окном
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Стейты для данных и загрузки
  const [teachersData, setTeachersData] = useState([]);
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
    const loadTeachersData = async () => {
      try {
        const teachersData = await fetchTeachersList();
        setTeachersData(teachersData);
      } catch (error) {
        setError(error.message);
        console.log(error)
      } finally {
        setIsLoading(false);
      }
    }

    loadTeachersData();
  }, []);


  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  return (
    <main className="mainwn-min-size">
      <div className="teachers-page-content">
        <div className="mn-title-add-btn-bl">
          <div className="mn-title-bl">
            <h1>Преподаватели</h1>
            <span>Количество — {isLoading ? '...' : teachersData.total_teachers_number}</span> {/* Отображаем количество преподавателей */}
          </div>

          {/* Кнопка для открытия модального окна */}
          <div className="mn-title-btn-bl">
            <a onClick={handleOpenModal}>Добавить</a>
          </div>

        </div>

        <div className="teachers-main-content">
          <div className="teachers-list">
            {isLoading ? (
              Array(5).fill(0).map((_, index) => (
                <div key={index} className="teacher-card">
                  <div className="teacher-card-table-wrapper">
                    <Skeleton height="50px" rx={10} ry={10} />
                  </div>
                </div>
              ))
            ) : (!error ? teachersData.teachers.map((teacherData) => (
              <TeacherCard teacherData={teacherData} key={teacherData.id} />
            )) : ''
            )}
          </div>
        </div>

      </div>

      <TeacherAddModalForm isOpen={isModalOpen} onClose={handleCloseModal} />
    </main>
  );
};

export default TeachersList;

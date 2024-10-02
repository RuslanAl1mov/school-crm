import React, { useState, useEffect } from "react";
import "./style.css";
import icons from "./../../../img/icons/icons.svg";
import { NavLink } from 'react-router-dom';
import TeacherAddModalForm from "../../../components/teachers/teacherAddModalForm/TeacherAddModalForm";
import Skeleton from "../../../components/loader/Skeleton"; // Импортируем скелетон для состояния загрузки

const TeachersList = () => {
  // Стейт для управления модальным окном
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Стейты для данных и загрузки
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Функция для открытия модального окна
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Функция для закрытия модального окна
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Функция для загрузки данных из API
  const fetchTeachers = async () => {
    try {
      const response = await fetch('https://api.woow.uz/api/v1.0/teachers/');
      if (!response.ok) {
        throw new Error('Ошибка при загрузке данных');
      }
      const data = await response.json();
      setData(data); // Устанавливаем полученные данные
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
      alert('Ошибка при получении данных');
      setIsError(true);
    } finally {
      setIsLoading(false); // Завершаем загрузку
    }
  };


  // Загружаем данные при монтировании компонента
  useEffect(() => {
    fetchTeachers();
  }, []);

  return (
    <main className="mainwn-min-size">
      <div className="teachers-page-content">
        <div className="mn-title-add-btn-bl">
          <div className="mn-title-bl">
            <h1>Преподаватели</h1>
            <span>Количество — {isLoading ? '...' : data.total_teachers_number}</span> {/* Отображаем количество преподавателей */}
          </div>

          <div className="mn-title-btn-bl">
            {/* Кнопка для открытия модального окна */}
            <a onClick={handleOpenModal}>Добавить</a>
          </div>
        </div>

        <div className="teachers-main-content">
          <div className="teachers-list">
            {/* Если данные загружаются, показываем скелетон */}
            {isLoading ? (
              Array(5).fill(0).map((_, index) => (
                <div key={index} className="teacher-card">
                  <div className="teacher-card-table-wrapper">
                    <Skeleton width="100%" height="50px" rx={10} ry={10} />
                  </div>
                </div>
              ))
            ) : ( !isError ? data.teachers.map((teacher) => (
                <div key={teacher.id} className="teacher-card">
                  {console.log(teacher)}
                  <div className="teacher-card-table-wrapper">
                    <table className="teacher-card-table">
                      <tbody>
                        <tr>
                          <td>
                            <NavLink to={`/teachers/profile/${teacher.id}`} className="teacher-card-link" id="teacher-name"> 
                              <span id="teacher-name">
                                {teacher.fullname}
                              </span>
                            </NavLink>
                          </td>
                          <td>
                            <NavLink to={`/teachers/profile/${teacher.id}`} className="teacher-card-link">
                              <span id="teacher-phone">
                                {teacher.phone_number}
                              </span>
                            </NavLink>
                          </td>
                          <td>
                          <NavLink to={`/teachers/profile/${teacher.id}`} className="teacher-card-link">

                            <span id="teacher-groups">
                              {/* Пока данные по группам отсутствуют, но можно добавить сюда логику для отображения */}
                              {teacher.active_groups_number} групп
                            </span>
                            </NavLink>
                          </td>
                          <td id="teacher-actions">
                            <a>
                              <svg className="action-icon">
                                <use href={`${icons}#menu_2`}></use>
                              </svg>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
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

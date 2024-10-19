import "./TeachersListStyle.css";

import React, { useState, useEffect } from "react";

import TeacherAddModalForm from "./teacherAddModalForm/TeacherAddModalForm";
import TeacherCard from "./TeacherCard/TeacherCard";
import Skeleton from "./../../../components/loader/Skeleton";

import { fetchTeachersList } from "./../../../../utils/api";


const TeachersList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [teachersData, setTeachersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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

  useEffect(() => {
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
            <span>Количество — {isLoading ? '...' : teachersData.total_teachers_number}</span>
          </div>

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
            ) : (!error ? teachersData.teachers.results.map((teacherData) => (
              <TeacherCard teacherData={teacherData} key={teacherData.id} />
            )) : ''
            )}
          </div>
        </div>

      </div>

      <TeacherAddModalForm isOpen={isModalOpen} onClose={handleCloseModal} loadTeachersData={loadTeachersData} />
    </main>
  );
};

export default TeachersList;

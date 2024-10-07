import './style.css';
import icons from "./../../img/icons/icons.svg";

import React, { useEffect, useState } from 'react'; // Здесь импортированы useState и useEffect
import { NavLink } from 'react-router-dom';
import Skeleton from '../../components/loader/Skeleton';

const IndexPage = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({
    activeStudents: '-',
    activeGroups: '-',
    activeTeachers: '-',
    activeCourses: '-'
  });

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.woow.uz/api/v1.0/index');
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }


      const result = await response.json();

      setData({
        activeStudents: result.active_students_count,
        activeGroups: result.active_groups_count,
        activeTeachers: result.active_teacher_count,
        activeCourses: result.active_course_count
      });
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
      alert('Ошибка при получении данных');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="mainwn-min-size">
      <div className="index-pg-content">
        <div className="simple-flex-wrap-bl">

          <div className="index-card-bl">
            <NavLink className="index-card-bl-link" to="/students/list">
              <div className="index-card-content-bl">
                <svg className="index-card-svg">
                  <use href={`${icons}#student`}></use>
                </svg>
                <p className="index-card-bl-title">Активные студенты</p>
                <div className="index-card-numinf-text">{isLoading ? (
                  <div className="skeleton-list">
                    <div style={{ padding: '30%', padding: '0 20px' }}>  { }

                      <Skeleton />
                    </div>
                  </div>
                ) : (data.activeStudents)}</div>
              </div>
            </NavLink>
          </div>

          <div className="index-card-bl">
            <NavLink className="index-card-bl-link" to="/groups">
              <div className="index-card-content-bl">
                <svg className="index-card-svg">
                  <use href={`${icons}#group`}></use>
                </svg>
                <p className="index-card-bl-title">Группы</p>
                <div className="index-card-numinf-text">
                  {isLoading ? (
                    <div className="skeleton-list">
                      <div style={{ padding: '30%', padding: '0 20px' }}>  { }

                        <Skeleton />
                      </div>
                    </div>
                  ) : (data.activeGroups)}
                </div>
              </div>
            </NavLink>
          </div>

          <div className="index-card-bl">
            <NavLink className="index-card-bl-link" to="/teachers/list">
              <div className="index-card-content-bl">
                <svg className="index-card-svg">
                  <use href={`${icons}#teacher`}></use>
                </svg>
                <p className="index-card-bl-title">Преподаватели</p>
                <div className="index-card-numinf-text">{isLoading ? (
                  <div className="skeleton-list">
                    <div style={{ padding: '30%', padding: '0 20px' }}>  { }

                      <Skeleton />
                    </div>
                  </div>
                ) : (data.activeTeachers)}
                </div>
              </div>
            </NavLink>
          </div>

          <div className="index-card-bl">
            <NavLink className="index-card-bl-link" to="/courses">
              <div className="index-card-content-bl">
                <svg className="index-card-svg">
                  <use href={`${icons}#list_catalog`}></use>
                </svg>
                <p className="index-card-bl-title">Курсы</p>
                <div className="index-card-numinf-text">{isLoading ? (
                  <div className="skeleton-list">
                    <div style={{ padding: '30%', padding: '0 20px' }}>  { }

                      <Skeleton />
                    </div>
                  </div>
                ) : (data.activeCourses)}
                </div>
              </div>
            </NavLink>
          </div>

        </div>
      </div>
    </main>
  );
};

export default IndexPage;

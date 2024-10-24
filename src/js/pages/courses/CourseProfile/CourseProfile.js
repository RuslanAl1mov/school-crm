import './CourseProfileStyle.css'

import course_img from './../../../../img/image/courses-bg1.png';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCourse } from '../../../../utils/api';
import Skeleton from '../../../components/loader/Skeleton';
import CourseGroupCard from './CourseGroupCard/CourseGroupCard';


const CourseProfile = () => {
    const { id: courseId } = useParams();
    const [courseData, setCourseData] = useState(null); // Информация о курсе
    const [activeTab, setActiveTab] = useState('groups');
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadAboutCourseInfo = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const data = await fetchCourse(courseId);
                setCourseData(data);
            } catch (error) {
                setIsError(true);
                setError("Ошибка при загрузке данных курсов");
            } finally {
                setIsLoading(false);
            }
        }

        loadAboutCourseInfo();
    }, [])



    return (<main className="mainwn-min-size">
        <div className="group-prof-main-bl">
            <div className="mn-title-bl">
                <h1>{!courseData?.title ? <Skeleton height='35px' /> : courseData.title}</h1>
            </div>
        </div>

        <div className="horizontal-separated-windows-30to70 --margin-top40px">
            {/* Сторона с информацией о курсе */}
            <div className="left-window-part-30">

                <div className="course-info-block">
                    <div className={`course-profile-img-name-block course-card-${!courseData?.photo_color ? 'gray' : courseData.photo_color}`}>
                        <img className="course-profile-img-block" src={course_img} alt="Course background" />

                        <div className="course-img-name">
                            {courseData?.title}
                        </div>
                    </div>

                    <div className="course-text-info-block">
                        {courseData?.description == '' ? '' : (
                            <div className="crs-text-info-block">
                                <p className="course-info-text-title">
                                    Описание курса
                                </p>
                                <p className="course-info-text-description">
                                    {courseData?.description == ''}
                                </p>
                            </div>

                        )}

                        <div className="crs-text-info-block">
                            <p className="course-info-text-title">
                                Цена
                            </p>
                            <p className="course-info-text-description">
                                {!courseData?.price ? <Skeleton /> : courseData.price} UZS
                            </p>
                        </div>

                        <div className="crs-text-info-block">
                            <p className="course-info-text-title">
                                Студентов
                            </p>
                            <p className="course-info-text-description">
                                {courseData?.students_quantity && null ? <Skeleton /> : courseData?.students_quantity}
                            </p>
                        </div>

                        <div className="crs-text-info-block">
                            <p className="course-info-text-title">
                                Продолжительность урока


                            </p>
                            <p className="course-info-text-description">
                                {courseData?.lesson_duration} минут
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="right-window-part-70">

                {/* {Вкладки на выбор} */}
                <div className="tabs-wrapper">
                    <div className="tabs-container">
                        <a className={`tab-link ${activeTab === 'groups' ? 'tab-link--active' : ''}`} onClick={() => setActiveTab('groups')}>
                            Группы
                            <div className="tab-link-underline"></div>
                        </a>
                        <a className={`tab-link ${activeTab === 'subcourses' ? 'tab-link--active' : ''}`} onClick={() => setActiveTab('subcourses')}>
                            Подкурсы
                            <div className="tab-link-underline"></div>
                        </a>
                        <a className={`tab-link ${activeTab === 'online-classes' ? 'tab-link--active' : ''}`} onClick={() => setActiveTab('online-classes')}>
                            Онлайн-уроки и материалы
                            <div className="tab-link-underline"></div>
                        </a>
                        <a className={`tab-link ${activeTab === 'materials' ? 'tab-link--active' : ''}`} onClick={() => setActiveTab('materials')}>
                            Материалы
                            <div className="tab-link-underline"></div>
                        </a>
                    </div>
                    <div className="tabs-divider"></div>
                </div>

                {/* Вкладка "Группы" */}
                <div className={`main-big-tab-container ${activeTab === 'groups' ? 'main-big-tab-container--active' : ''}`}>

                    <div className="course-groups-list">



                        {courseData && courseData.groups?.length > 0 ? (
                            courseData.groups.map((groupData) => (
                                <CourseGroupCard groupData={groupData} key={groupData.id} />
                            ))
                        ) : (
                            <p>Группы не найдены</p>
                        )}


                    </div>

                </div>
                {/* Вкладка "Подкурсы" */}
                <div className={`main-big-tab-container ${activeTab === 'subcourses' ? 'main-big-tab-container--active' : ''}`}>
                    <div className="big-nothing-found-bl1--nomargin">Здесь пока ничего нет</div>
                </div>
                {/* Вкладка "Онлайн-уроки и материалы" */}
                <div className={`main-big-tab-container ${activeTab === 'online-classes' ? 'main-big-tab-container--active' : ''}`}>
                    <div className="big-nothing-found-bl1--nomargin">Здесь пока ничего нет</div>
                </div>
                {/* Вкладка "Материалы" */}
                <div className={`main-big-tab-container ${activeTab === 'materials' ? 'main-big-tab-container--active' : ''}`}>
                    <div className="big-nothing-found-bl1--nomargin">Здесь пока ничего нет</div>
                </div>
            </div>
        </div>
    </main>


    );
}

export default CourseProfile;
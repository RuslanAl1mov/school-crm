import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import icons from './../../../img/icons/icons.svg';
import Skeleton from "../../../components/loader/Skeleton";
import './style.css';
import GroupBlockInfo from '../../../components/teachers/groupInfoBlock/GroupInfoBlock';
import GroupBlockInfoSkeleton from '../../../components/teachers/groupInfoBlock/GroupInfoBlockSkeleton';

const TeacherProfile = () => {
    const { id: teacherId } = useParams(); // Получаем id из параметров URL
    const [activeTab, setActiveTab] = useState('profile');  // Для переключения вкладок
    const [teacherData, setTeacherData] = useState(null);   // Для хранения данных учителя
    const [isLoading, setIsLoading] = useState(true);       // Для состояния загрузки
    const [error, setError] = useState(null);               // Для состояния ошибки
    const [activeGroup, setActiveGroup] = useState(null);   // Для выбора группы для показа информации
    const [groupInfo, setGroupInfo] = useState(null);       // Информация о выбранной группе
    const [loadingGroupInfo, setLoadingGroupInfo] = useState(false); // Для состояния загрузки информации группы

    // Функция для загрузки данных учителя из API
    const fetchTeachers = async () => {
        try {
            const response = await fetch(`https://api.woow.uz/api/v1.0/teachers/${teacherId}`);
            if (!response.ok) {
                throw new Error('Ошибка при загрузке данных');
            }
            const data = await response.json();
            setTeacherData(data); // Устанавливаем полученные данные
            if (data?.groups?.length > 0) {
                // Устанавливаем первую группу как активную, если есть группы
                setActiveGroup(data.groups[0].id);
                fetchGroupInfo(data.groups[0].id);
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false); // Завершаем загрузку
        }
    };


    const fetchGroupInfo = async (groupId) => {
        try {
            const response = await fetch(`https://api.woow.uz/api/v1.0/teachers/${teacherId}/group/${groupId}`);
            if (!response.ok) {
                throw new Error('Ошибка при загрузке информации о группе');
            }
            const data = await response.json();
            console.log("Group data:", data); // Логируем данные группы
            setGroupInfo(data); // Устанавливаем данные о выбранной группе
        } catch (error) {
            console.error("Error loading group info:", error.message); // Логируем ошибку
            setError(error.message);
        } finally {
            setLoadingGroupInfo(false); // Выключаем состояние загрузки
        }
    };


    // Обработчик клика по группе
    const handleGroupClick = (groupId) => {
        // Устанавливаем состояние загрузки для отображения скелетона
        setLoadingGroupInfo(true);

        // Устанавливаем активную группу
        setActiveGroup(groupId);

        // Загружаем данные о выбранной группе
        fetchGroupInfo(groupId);
    };


    // Загружаем данные учителя при монтировании компонента
    useEffect(() => {
        fetchTeachers();
    }, [teacherId]);

    if (isLoading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return <div>Ошибка: {error}</div>;
    }

    // Возвращаем отображение в зависимости от состояния (загрузка, ошибка, успешные данные)
    return (
        <main className="mainwn-min-size">
            <div className="mn-title-add-btn-bl">
                <div className="mn-title-bl">
                    {isLoading ? (
                        <h1>
                            <Skeleton width="100%" height="50px" rx={10} ry={10} />
                        </h1>
                    ) : error ? ( // Отображаем ошибку, если она есть
                        <h1>{error}</h1>
                    ) : teacherData ? ( // Если данные успешно загружены
                        <h1>{teacherData.fullname}</h1>
                    ) : (
                        <h1>Преподаватель не найден</h1>
                    )}
                </div>
            </div>

            <div className="top-tabs-bl">
                <div className="top-tabs-container-bl">
                    <a className={`top-tab-link ${activeTab === 'profile' ? 'top-tab-link--active' : ''}`} onClick={() => setActiveTab('profile')}>
                        Профиль
                        <div className="top-tab-link-liner"></div>
                    </a>
                    <a className={`top-tab-link ${activeTab === 'history' ? 'top-tab-link--active' : ''}`} onClick={() => setActiveTab('history')}>
                        История
                        <div className="top-tab-link-liner"></div>
                    </a>
                    <a className={`top-tab-link ${activeTab === 'salary' ? 'top-tab-link--active' : ''}`} onClick={() => setActiveTab('salary')}>
                        Выплаты
                        <div className="top-tab-link-liner"></div>
                    </a>
                </div>
                <div className="top-tabs-liner-solid"></div>
            </div>

            <div className={`main-big-tab-container ${activeTab === 'profile' ? 'main-big-tab-container--active' : ''}`}>
                <div className="tchr-prof-tab-bl">
                    <div className="tchr-tab-fl-bl">
                        <div className="prof-profile-info-bl">
                            <div className="prof-profile-main-info-bl">
                                <div className="pr-prf-mn-bl1">
                                    <div className="pr-prf-mn-bl1-img-bl">
                                        {/* Отображаем фото, если оно есть */}
                                        {teacherData?.photo ? (
                                            <img src={teacherData.photo} alt="Фото преподавателя" className="prf-mn-bl1-img" />
                                        ) : (
                                            <div className="prf-mn-bl1-img">
                                                <svg>
                                                    <use href={`${icons}#user`}></use>
                                                </svg>
                                            </div>
                                        )}

                                        <p className="prf-mn-bl1-usr-id">id: ({teacherData?.id ? teacherData.id : 'Нет данных'})</p>
                                    </div>
                                    <div className="pr-prf-mn-bl1-nm-bl">
                                        {teacherData ? (
                                            <div className="pr-prf-mn-bl1-nm-bl">{teacherData.fullname}</div>
                                        ) : (
                                            <div className="pr-prf-mn-bl1-nm-bl">Преподаватель не найден</div>
                                        )}
                                    </div>
                                    <div className="pr-prf-mn-bl1-ed-fn-bl">
                                        <a>
                                            <div className="pr-prf-mn-bl1-ed-fn fn-green">
                                                <svg>
                                                    <use href={`${icons}#flag`}></use>
                                                </svg>
                                            </div>
                                        </a>
                                        <a>
                                            <div className="pr-prf-mn-bl1-ed-fn fn-orange">
                                                <svg>
                                                    <use href={`${icons}#pencil`}></use>
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="pr-prf-mn-bl2">
                                    <p className="prf-mn-bl2">
                                        Телефон: <span>{teacherData.phone_number}</span>
                                    </p>
                                </div>

                                <div className="pr-prf-mn-bl3">
                                    <p className="prf-mn-bl2">Роли:</p>
                                    <div className="pr-prf-mn-bl3-roles">
                                        <div className="prf-mn-rounded-bl">{teacherData.role}</div>
                                    </div>
                                </div>

                                <div className="pr-prf-mn-bl3">
                                    <p className="prf-mn-bl2">Филиалы:</p>
                                    <div className="pr-prf-mn-bl3-roles">
                                        <div className="prf-mn-rounded-bl">Leader Learning Center</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tchr-tab-fl-bl">
                        <div className="mn-title-add-btn-bl">
                            <div className="mn-title-bl">
                                <h1>Группы</h1>
                            </div>
                        </div>

                        {teacherData?.groups?.length > 0 ? (
                            teacherData.groups.map((group) => (
                                <div
                                    className={`tchr-prof-gr-bl ${group.id === activeGroup ? 'tchr-prof-gr-bl--active' : ''}`}
                                    key={group.group_id}
                                    onClick={() => handleGroupClick(group.id)}
                                >
                                    <div className="tchr-prof-gr-cnt-bl">
                                        <div className="tchr-prof-gr-nm-bl">
                                            <div className="tchr-prof-gr-nm">
                                                <div>{group.name}</div>
                                            </div>
                                            <div className="tchr-prof-crs-nm">{group.name_curs}</div>
                                        </div>
                                        <div className="tchr-prof-gr-nm-dt-lf">
                                            <div className="tchr-prof-gr-dt">{group.start_date} —</div>
                                            <div className="tchr-prof-gr-dt">{group.end_date ? group.end_date : 'Не окончена'}</div>
                                            <div className="tchr-prof-gr-dt">{group.days} • {group.lesson_start_time}</div>
                                        </div>
                                        <div className="tchr-prof-gr-nm-num-lf">
                                            <div className="tchr-prof-gr-am">
                                                <div>{group.active_students_count}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="big-nothing-found-bl1">Групп нет</div>
                        )}
                    </div>

                    <div className="tchr-tab-fl-bl" id="GroupInfoBlock">
                        {loadingGroupInfo ? (
                            <GroupBlockInfoSkeleton /> // Отображаем скелетон во время загрузки
                        ) : error ? (
                            <div className="big-nothing-found-bl1">{error}</div>// Отображаем сообщение об ошибке
                        ) : groupInfo ? (
                            <GroupBlockInfo group={groupInfo} /> // Отображаем информацию о группе
                        ) : (
                            <GroupBlockInfoSkeleton /> // Отображаем скелетон во время загрузки
                        )}
                    </div>
                </div>
            </div>

            <div className={`main-big-tab-container ${activeTab === 'history' ? 'main-big-tab-container--active' : ''}`}>
                <div className="big-nothing-found-bl1">Здесь пока ничего нет</div>
            </div>
            <div className={`main-big-tab-container ${activeTab === 'salary' ? 'main-big-tab-container--active' : ''}`}>
                <div className="big-nothing-found-bl1">Здесь пока ничего нет</div>
            </div>
        </main>
    );
};

export default TeacherProfile;

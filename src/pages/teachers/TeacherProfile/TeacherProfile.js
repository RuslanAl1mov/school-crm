import './style.css';
import icons from './../../../img/icons/icons.svg';

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import TeacherProfileHeader from './TeacherProfileHeader/TeacherProfileHeader';
import GroupBlockInfo from './GroupInfoBlock/GroupInfoBlock';
import GroupBlockInfoSkeleton from './GroupInfoBlock/GroupInfoBlockSkeleton';
import { fetchTeacher, fetchGroupInfo } from '../../../utils/api';


const TeacherProfile = () => {
    const { id: teacherId } = useParams(); 
    const [activeTab, setActiveTab] = useState('profile');
    const [teacherData, setTeacherData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);        
    const [activeGroup, setActiveGroup] = useState(null);
    const [groupInfo, setGroupInfo] = useState(null);
    const [loadingGroupInfo, setLoadingGroupInfo] = useState(false);

    useEffect(() => {
        const loadTeacherData = async () => {
            if (!teacherId) return;
            try {
                const teacherData = await fetchTeacher(teacherId);
                setTeacherData(teacherData);
                if (teacherData?.groups?.length > 0) {
                    setActiveGroup(teacherData.groups[0].id);
                    const groupData = await fetchGroupInfo(teacherId, teacherData.groups[0].id);
                    setGroupInfo(groupData);
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        loadTeacherData();
    }, [teacherId]);

    
    const handleGroupClick = async (groupId) => {
        setLoadingGroupInfo(true);
        setActiveGroup(groupId);
        try {
            const groupData = await fetchGroupInfo(teacherId, groupId);
            setGroupInfo(groupData);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoadingGroupInfo(false);
        }
    };

    
    if (isLoading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return <div>Ошибка: {error}</div>;
    }

    return (
        <main className="mainwn-min-size">
            <TeacherProfileHeader teacherData={teacherData} isLoading={isLoading} error={error} />

            {/* {Вкладки преподавателя на выбор} */}
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


            {/* Вкладка с оновной информацие о преподавателе */}
            <div className={`main-big-tab-container ${activeTab === 'profile' ? 'main-big-tab-container--active' : ''}`}>
                <div className="tchr-prof-tab-bl">
                    <div className="tchr-tab-fl-bl">
                        <div className="prof-profile-info-bl">
                            <div className="prof-profile-main-info-bl">
                                <div className="pr-prf-mn-bl1">
                                    <div className="pr-prf-mn-bl1-img-bl">
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
                                    key={group.id} // Use group.id for key instead of group.group_id
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
                            <GroupBlockInfoSkeleton /> 
                        ) : error ? (
                            <div className="big-nothing-found-bl1">{error}</div>
                        ) : groupInfo ? (
                            <GroupBlockInfo group={groupInfo} />
                        ) : (
                            <GroupBlockInfoSkeleton />
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

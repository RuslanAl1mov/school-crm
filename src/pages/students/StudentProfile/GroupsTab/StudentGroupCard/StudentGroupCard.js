import icons from './../../../../../img/icons/icons.svg';


const StudentGroupCard = ({ groupData }) => {
    return (
        <div className="student-group-card">
            <div className="student-group-card-content">
                <div className="student-group-info-flex">

                    <div className="student-group-info-left">
                        <div className="group-name">
                            <div className="group-name-block">
                                <p className="group-name-gray-bg">{groupData.name}</p>
                            </div>
                            <div className="group-course-name">{groupData.course_name}</div>
                            <div className="group-teacher-name">{groupData.teacher_name}</div>
                        </div>
                    </div>

                    <div className="student-group-info-right">
                        <div className="group-exist-date">{groupData.start_date} —</div>
                        <div className="group-exist-date">{groupData.end_date}</div>
                        <div className="group-exist-date">{groupData.days} • {groupData.lesson_start_time}</div>
                    </div>
                </div>

                <div className='student-info-block-separator'></div>

                <div className="student-group-info-flex">
                    <div className="student-group-flex-info">
                        <p className="student-group-info-text"><span>Статус:</span> Активен (Оплачивает обучение)</p>
                        <p className="student-group-info-text"><span>Дата добавления:</span> 23.09.2024</p>
                        <p className="student-group-info-text"><span>Дата активации:</span> 24.09.2024</p>
                        <p className="student-group-info-text"><span>Стоимость для студента:</span> 540 000 UZS</p>
                    </div>
                    <div className="student-info-header">
                        <div className="student-action-buttons">
                            <a>
                                <div className="action-button button-pause">
                                    <svg>
                                        <use href={`${icons}#pause`}></use>
                                    </svg>
                                </div>
                            </a>
                            <a>
                                <div className="action-button button-trashbin">
                                    <svg>
                                        <use href={`${icons}#trashbin`}></use>
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default StudentGroupCard;
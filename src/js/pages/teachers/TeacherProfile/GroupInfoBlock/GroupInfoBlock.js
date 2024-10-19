
const GroupBlockInfo = ({group}) => {
    return (
        <div className="tchr-tab-fl-bl" id="GroupBlockInfoSkeleton">
            <div className="prof-profile-info-bl">
                <div className="prof-profile-group-info-bl">
                    <div className="gr-info-cnt-bl">
                        <div className="gr-inf-cnt-gr-num">{group.name}</div>
                    </div>
                    <div className="gr-info-cnt-bl">
                        <div className="gr-inf-cnt-gr-name">{group.name_curs}</div>
                    </div>
                    <div className="gr-info-cnt-bl">
                        <div className="gr-inf-cnt-gr-title">Название комнаты: <strong>{group.classroom_name}</strong></div>
                    </div>
                    <div className="gr-info-cnt-bl">
                        <div className="gr-inf-cnt-gr-title">Начало: <strong>{group.lesson_start_time}</strong></div>
                    </div>
                    <div className="gr-info-line-split"></div>
                    <div className="gr-info-stud-list-bl">
                        {group?.active_students?.length > 0 ? (
                            group.active_students.map((student) => (
                                <div className="gr-info-stud-list-item" key={student.id}>
                                    <div className="info-stud-item-name-bl">
                                        <a href="#" className="info-stud-item-name">{student.fullname}</a>
                                    </div>
                                    <p href="#" className="info-stud-item-ph">{student.phone_number}</p>
                                </div>
                            ))
                        ) : (
                            <div className="gr-info-stud-list-item">
                                <div className="info-stud-item-name-bl">
                                    <a className="info-stud-item-name">В этой группе нет студентов</a>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="gr-info-cnt-bl">
                        <a href="#" className="go-to-link">Перейти к группе →</a>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default GroupBlockInfo;
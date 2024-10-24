import { NavLink } from "react-router-dom";

const CourseGroupCard = ({ groupData }) => {
    return (
        <div className="course-groups-list-card">
            <NavLink to={`/groups/profile/${groupData.id}`}>
                <div className="course-groups-list-card-flex-box">
                    <div style={{ display: 'flex' }}>
                        <div className="course-group-card-gr-name">
                            {groupData.name}

                        </div>
                    </div>
                    <p>{groupData.teacher}</p>
                </div>
                <div className="course-groups-list-card-flex-box">
                    <div className='course-groups-list-card-dates'>
                        <div>
                            <span>{groupData.start_date} —</span>
                            <br />
                            <span>{groupData.end_date}</span>
                        </div>
                    </div>
                </div>
                <div className="course-groups-list-card-flex-box">
                    <div>
                        <div className='course-groups-list-card-dates'>

                            <span>{groupData.days}</span>
                            <span>{groupData.lesson_start_time}</span>
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
    );
}

export default CourseGroupCard;
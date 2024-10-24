import icons from "./../../../../../img/icons/icons.svg";
import { NavLink } from 'react-router-dom';

const GroupCard = ({ groupData, groupNumber }) => {
    return (
        <tr className="group-card">
            <td>
                <NavLink to={`/groups/profile/${groupData.id}`} className="group-card-link" id="group-course-td">
                    <div className="group-card-link-num">
                        {groupNumber}
                    </div>
                </NavLink>
            </td>
            <td>
                <NavLink to={`/groups/profile/${groupData.id}`} className="group-card-link" id="group-course-td">
                    <span id="group-name">
                        {groupData.name}
                    </span>
                </NavLink>
            </td>
            <td>
                <NavLink to={`/groups/profile/${groupData.id}`} className="group-card-link">
                    {groupData.course_name ? groupData.course_name : ''}
                </NavLink>
            </td>
            <td>
                <NavLink to={`/groups/profile/${groupData.id}`} className="group-card-link">
                    {groupData.teacher_name ? groupData.teacher_name : 'Без преподавателя'}
                </NavLink>
            </td>
            <td>
                <NavLink to={`/groups/profile/${groupData.id}`} className="group-card-link">
                    {groupData.days_label ? groupData.days_label : ''}
                    <br/>
                    {groupData.lesson_start_time ? groupData.lesson_start_time : ''}
                </NavLink>
            </td>
            <td>
                <NavLink to={`/groups/profile/${groupData.id}`} className="group-card-link">
                    {groupData.start_date ? groupData.start_date : ''}
                    <br />
                    {groupData.end_date ? groupData.end_date : ''}
                </NavLink>
            </td>
            <td>
                <NavLink to={`/groups/profile/${groupData.id}`} className="group-card-link">
                    {groupData.classroom_name}
                </NavLink>
            </td>
            <td>
                <NavLink to={`/groups/profile/${groupData.id}`} className="group-card-link">
                    {groupData.student_count}
                </NavLink>
            </td>
            <td>
                <a className="group-card-link" id="group-actions">
                    <svg className="index-card-svg">
                        <use href={`${icons}#menu_2`}></use>
                    </svg>
                </a>
            </td>
        </tr>
    );
}

export default GroupCard;

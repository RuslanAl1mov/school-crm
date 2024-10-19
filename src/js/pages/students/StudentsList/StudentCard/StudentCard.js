import icons from "./../../../../../img/icons/icons.svg";
import { NavLink } from 'react-router-dom';


const StudentCard = ({ studentData, studentNumber }) => {
    return (
        <tr className="student-card">
            <td>
                <NavLink to={`/students/profile/${studentData.id}`} className="student-card-link">
                    <div className="student-card-link-num">
                        {studentNumber}
                    </div>
                </NavLink>
            </td>
            <td>
                <a className="student-card-link">
                    <input type='checkbox' />
                </a>
            </td>
            <td>
                <NavLink to={`/students/profile/${studentData.id}`} className="student-card-link">
                    <span id="student-name">
                        {studentData.fullname}
                    </span>
                </NavLink>
            </td>
            <td>
                <NavLink to={`/students/profile/${studentData.id}`} className="student-card-link">
                    {studentData.phone_number ? studentData.phone_number : ''}
                </NavLink>
            </td>
            <td>
                <NavLink to={`/students/profile/${studentData.id}`} className="student-card-link">
                    {studentData.group_name ? (
                    <div className="gr-inf-cnt-gr-num">{studentData.group_name}</div>
                    ) : ''}
                    &nbsp;{studentData.course_name ? studentData.course_name : 'Не учавствует в группе'}
                </NavLink>
            </td>
            <td>
                <NavLink to={`/students/profile/${studentData.id}`} className="student-card-link">
                    {studentData.teacher_name ? studentData.teacher_name : ''}
                </NavLink>
            </td>
            <td>
                <NavLink to={`/students/profile/${studentData.id}`} className="student-card-link">
                    {studentData.start_date ? studentData.start_date : ''}
                    <br></br>
                    {studentData.end_date ? studentData.end_date : ''}
                </NavLink>
            </td>
            <td>
                <NavLink to={`/students/profile/${studentData.id}`} className="student-card-link">
                    {studentData.balance}&nbsp;сум
                </NavLink>
            </td>
            <td>
                <a className="student-card-link" id="student-actions">
                    <svg className="index-card-svg">
                        <use href={`${icons}#menu_2`}></use>
                    </svg>
                </a>
            </td>
        </tr>

    );
}

export default StudentCard;
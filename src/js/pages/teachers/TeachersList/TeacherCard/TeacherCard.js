import icons from './../../../../../img/icons/icons.svg';

import { NavLink } from 'react-router-dom';


const TeacherCard = ({ teacherData }) => {
    return (
        <div className="teacher-card">
            <div className="teacher-card-table-wrapper">
                <table className="teacher-card-table">
                    <tbody>
                        <tr>
                            <td>
                                <NavLink to={`/teachers/profile/${teacherData.id}`} className="teacher-card-link" id="teacher-name">
                                    <span id="teacher-name">
                                        {teacherData.fullname}
                                    </span>
                                </NavLink>
                            </td>
                            <td>
                                <NavLink to={`/teachers/profile/${teacherData.id}`} className="teacher-card-link">
                                    <span id="teacher-phone">
                                        {teacherData.phone_number}
                                    </span>
                                </NavLink>
                            </td>
                            <td>
                                <NavLink to={`/teachers/profile/${teacherData.id}`} className="teacher-card-link">

                                    <span id="teacher-groups">
                                        {/* Пока данные по группам отсутствуют, но можно добавить сюда логику для отображения */}
                                        {teacherData.active_groups_number} групп
                                    </span>
                                </NavLink>
                            </td>
                            <td id="teacher-actions">
                                <a>
                                    <svg className="action-icon">
                                        <use href={`${icons}#menu_2`}></use>
                                    </svg>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>);
}

export default TeacherCard;
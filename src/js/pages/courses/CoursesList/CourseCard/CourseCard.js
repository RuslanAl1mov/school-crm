import course_img from './../../../../../img/image/courses-bg1.png';
import { NavLink } from 'react-router-dom';


const CourseCard = ({courseData}) => {
    return (
        <div className="course-list-card">
            <NavLink to={`/courses/profile/${courseData.id}`} className="course-list-card-link">
                <div className={`course-img-name-block course-card-${courseData.photo_color}`}>
                    <img className="course-img-block" src={course_img} alt="Course background" />

                    <div className="course-img-name">
                        {courseData.title}
                    </div>
                </div>
                <div className="course-card-down-info-block">
                    <div>
                        <p className="course-card-down-name">{courseData.title}</p>
                        <p className="course-card-down-price">{courseData.price} UZS</p>
                    </div>
                </div>
            </NavLink>
        </div>
    );
}

export default CourseCard;
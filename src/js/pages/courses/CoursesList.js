import './CoursesListStyle.css';
import course_img from './../../../img/image/courses-bg1.png';

const CoursesList = () => {
    // No need to access .url; course_img is already the URL string
    const courseImgUrl = course_img;

    return (
        <main className="mainwn-min-size">
            <div className="mn-title-add-btn-bl">
                <div className="mn-title-bl">
                    <h1>Курсы</h1>
                    <span>Количество — 5</span>
                </div>

                <div className="mn-title-btn-bl">
                    <a>Добавить</a>
                </div>
            </div>


            <div className="courses-list-container">
                <div className="info-block-separator"></div>

                <div className="courses-list-block">

                <div className="course-list-card">
                        <div className="course-img-name-block course-card-blue ">
                            <img className="course-img-block" src={courseImgUrl} alt="Course background" />

                            <div className="course-img-name">
                                B1(Pre-IELTS)
                            </div>
                        </div>
                        <div className="course-card-down-info-block">
                            <div>
                                <p className="course-card-down-name">B1(Pre-IELTS)</p>
                                <p className="course-card-down-price">240 000 UZS</p>
                            </div>
                        </div>
                    </div>

                    <div className="course-list-card">
                        <div className="course-img-name-block" >
                            <img className="course-img-block" src={courseImgUrl} alt="Course background" />

                            <div className="course-img-name">
                                IELTS
                            </div>
                        </div>
                        <div className="course-card-down-info-block">
                            <div>
                                <p className="course-card-down-name">IELTS</p>
                                <p className="course-card-down-price">540 000 UZS</p>
                            </div>
                        </div>
                    </div>

                    <div className="course-list-card">
                        <div className="course-img-name-block course-card-orange" >
                            <img className="course-img-block" src={courseImgUrl} alt="Course background" />

                            <div className="course-img-name">
                            CEFR TERMIZ
                            </div>
                        </div>
                        <div className="course-card-down-info-block">
                            <div>
                                <p className="course-card-down-name">CEFR TERMIZ</p>
                                <p className="course-card-down-price">420 000 UZS</p>
                            </div>
                        </div>
                    </div>


                    <div className="course-list-card">
                        <div className="course-img-name-block course-card-red ">
                            <img className="course-img-block" src={courseImgUrl} alt="Course background" />

                            <div className="course-img-name">
                                A1&A2
                            </div>
                        </div>
                        <div className="course-card-down-info-block">
                            <div>
                                <p className="course-card-down-name">A1&A2</p>
                                <p className="course-card-down-price">329 000 UZS</p>
                            </div>
                        </div>
                    </div>

                    <div className="course-list-card">
                        <div className="course-img-name-block course-card-gray ">
                            <img className="course-img-block" src={courseImgUrl} alt="Course background" />

                            <div className="course-img-name">
                                TKT
                            </div>
                        </div>
                        <div className="course-card-down-info-block">
                            <div>
                                <p className="course-card-down-name">TKT</p>
                                <p className="course-card-down-price">240 000 UZS</p>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </main>
    );
}

export default CoursesList;
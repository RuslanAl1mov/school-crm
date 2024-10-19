import React from 'react';
import Skeleton from '../../../../components/loader/Skeleton';

const TeacherProfileHeader = ({ teacherData, isLoading, error }) => {
    return (
        <div className="mn-title-add-btn-bl">
            <div className="mn-title-bl">
                {isLoading ? (
                    <h1><Skeleton height="50px" rx={10} ry={10} /></h1>
                ) : error ? (
                    <h1>{error}</h1>
                ) : teacherData ? (
                    <h1>{teacherData.fullname}</h1>
                ) : (
                    <h1>Преподаватель не найден</h1>
                )}
            </div>
        </div>
    );
};

export default TeacherProfileHeader;

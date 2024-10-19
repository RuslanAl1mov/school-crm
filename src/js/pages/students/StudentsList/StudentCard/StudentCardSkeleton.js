import Skeleton from "../../../../components/loader/Skeleton";


const StudentCardSkeleton = () => {
    return (
        <tr className="student-card">
            <td>
                <a className="student-card-link">
                    <div className="student-card-link-num">
                        <Skeleton width="25" />
                    </div>
                </a>
            </td>
            <td>
                <a className="student-card-link">
                    <Skeleton width="20" />
                </a>
            </td>
            <td>
                <a className="student-card-link">
                    <Skeleton width="250" />
                </a>
            </td>
            <td>
                <a className="student-card-link">
                    <Skeleton width="150" />
                </a>
            </td>
            <td>
                <a className="student-card-link">
                    <Skeleton width="250" />
                </a>
            </td>
            <td>
                <a className="student-card-link">
                    <Skeleton />
                </a>
            </td>
            <td>
                <a className="student-card-link">
                    <Skeleton />
                </a>
            </td>
            <td>
                <a className="student-card-link">
                    <Skeleton />
                </a>
            </td>
            <td>
                <a className="student-card-link" id="student-actions">
                    <Skeleton />
                </a>
            </td>
        </tr>

    );
}

export default StudentCardSkeleton;
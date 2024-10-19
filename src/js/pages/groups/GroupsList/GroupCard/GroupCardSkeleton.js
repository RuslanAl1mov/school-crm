import Skeleton from "../../../../components/loader/Skeleton";

const GroupCardSkeleton = () => {
    return (
        <tr className="group-card">
            <td>
                <a className="group-card-link">
                    <Skeleton width="20" />
                </a>
            </td>
            <td>
                <a className="group-card-link">
                    <Skeleton width="100" />
                </a>
            </td>
            <td>
                <a className="group-card-link">
                    <Skeleton width="150" />
                </a>
            </td>
            <td>
                <a className="group-card-link">
                    <Skeleton width="250" />
                </a>
            </td>
            <td>
                <a className="group-card-link">
                    <Skeleton />
                </a>
            </td>
            <td>
                <a className="group-card-link">
                    <Skeleton />
                </a>
            </td>
            <td>
                <a className="group-card-link">
                    <Skeleton />
                </a>
            </td>
            <td>
                <a className="group-card-link">
                    <Skeleton />
                </a>
            </td>
            <td>
                <a className="group-card-link" id="group-actions"> {/* Updated id */}
                    <Skeleton />
                </a>
            </td>
        </tr>
    );
}

export default GroupCardSkeleton; 

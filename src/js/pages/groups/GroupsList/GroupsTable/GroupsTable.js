import React, { useState, useEffect } from "react";
import GroupCard from "./../GroupCard/GroupCard";
import { fetchGroupsList } from "./../../../../../utils/api";
import Pagination from "../../../../components/pagination/Pagination";
import GroupCardSkeleton from "../GroupCard/GroupCardSkeleton";

const GroupsTable = ({ setTotalGroups, limit }) => {
    const [groupsData, setGroupsData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    // Function to load group data
    const loadGroups = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const data = await fetchGroupsList(page, limit);
            setGroupsData(data);
            setTotalGroups(data.results.group_count);
            setTotalPages(Math.ceil(data.results.groups.group_count / limit));
        } catch (err) {
            setError("Ошибка при загрузке данных групп. Пожалуйста, попробуйте еще раз.");
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadGroups();
    }, [page, limit]);

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    if (isLoading) {
        return (
            <div className="groups-list">
                <table className="groups-list-table">
                    <tbody>
                        <tr>
                            <th><div className="group-card-link-num"></div></th>
                            <th>Группа</th>
                            <th>Курсы</th>
                            <th>Преподаватель</th>
                            <th>Дни</th>
                            <th>Даты обучения</th>
                            <th>Кабинетов</th>
                            <th>Студентов</th>
                            <th></th>
                        </tr>
                        {[...Array(5)].map((_, index) => (
                            <GroupCardSkeleton key={index} />
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }

    if (error) {
        return <div>Ошибка: {error}</div>;
    }

    return (
        <>
            <div className="groups-list">
                <table className="groups-list-table">
                    <tbody>
                        <tr>
                            <th><div className="group-card-link-num"></div></th>
                            <th>Группа</th>
                            <th>Курсы</th>
                            <th>Преподаватель</th>
                            <th>Дни</th>
                            <th>Даты обучения</th>
                            <th>Кабинетов</th>
                            <th>Студентов</th>
                            <th></th>
                        </tr>
                        {groupsData && groupsData.results.groups.map((groupData, index) => (
                            <GroupCard
                                groupData={groupData}
                                key={groupData.id}
                                groupNumber={(page - 1) * limit + index + 1}
                            />
                        ))}
                    </tbody>
                </table>
            </div>

            {totalPages > 1 && (
                <Pagination
                    page={page}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            )}
        </>
    );
};

export default GroupsTable;

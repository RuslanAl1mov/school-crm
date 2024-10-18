import "./GroupsStyle.css";
import React, { useState } from "react";
import GroupAddModalForm from "./GroupAddModalForm/GroupAddModalForm"; 
import GroupsTable from "./GroupsTable/GroupsTable";

const GroupsList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [totalGroups, setTotalGroups] = useState(0);
    const [limit] = useState(10); // Кол-во элементов в списке

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <main className="mainwn-min-size">
            <div className="group-li-pg-content-bl"> 
                <div className="mn-title-add-btn-bl">
                    <div className="mn-title-bl">
                        <h1>Группы</h1>
                        <span>Количество — {totalGroups}</span> 
                    </div>

                    <div className="mn-title-btn-bl">
                        <a onClick={handleOpenModal}>Добавить</a>
                    </div>
                </div>

                <GroupsTable setTotalGroups={setTotalGroups} limit={limit} />

            </div>

            <GroupAddModalForm isOpen={isModalOpen} onClose={handleCloseModal} />
        </main>
    );
}

export default GroupsList;

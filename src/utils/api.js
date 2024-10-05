// API Преподавателей

export const fetchTeachersList = async () => {
    const response = await fetch(`https://api.woow.uz/api/v1.0/teachers/list/`);
    if (!response.ok) {
        throw new Error('Ошибка при загрузке списка преподавателей');
    }
    return await response.json();
};

export const fetchTeacher = async (teacherId) => {
    const response = await fetch(`https://api.woow.uz/api/v1.0/teachers/profile/${teacherId}`);
    if (!response.ok) {
        throw new Error('Ошибка при загрузке информации о преподавателе');
    }
    return await response.json();
};

export const fetchGroupInfo = async (teacherId, groupId) => {
    const response = await fetch(`https://api.woow.uz/api/v1.0/teachers/profile/${teacherId}/group/${groupId}`);
    if (!response.ok) {
        throw new Error('Ошибка при загрузке информации о группе');
    }
    return await response.json();
};


// Students API

export const fetchStudentsList = async () => {
    const response = await fetch(`https://api.woow.uz/api/v1.0/students/list`);
    if (!response.ok) {
        throw new Error('Ошибка при загрузке списка студентов');
    }
    return await response.json();
};
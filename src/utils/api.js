const HOST_NAME = 'https://api.woow.uz/api/v1.0';

// API Домашней страницы (Index page)

export const fetchIndexInfo = async () => {
    const response = await fetch(`${HOST_NAME}/index`);
    if (!response.ok) {
        throw new Error('Ошибка при загрузке информации для главной страници');
    }
    return await response.json();
}


// API Преподавателей

export const fetchTeachersList = async (page = 1, limit = 50) => {
    const response = await fetch(`${HOST_NAME}/teachers/list/?page=${page}&page_size=${limit}`);
    if (!response.ok) {
        throw new Error('Ошибка при загрузке списка преподавателей');
    }

    return await response.json();
};

export const createTeacher = async (formData) => {
    const response = await fetch(`${HOST_NAME}/employees/create/`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
        },
        body: formData,
    });
    if (!response.ok) {
        response.text().then(text => {
            console.log('Ошибка:', response.status);
            console.log('Тело ошибки:', text); // тело ошибки
        }
        )
        throw new Error(`Ошибка при добавлении преподавателя:\n ${response.text}}`);
    }
    return await response.json();
}

export const fetchTeacher = async (teacherId) => {
    const response = await fetch(`${HOST_NAME}/teachers/profile/${teacherId}`);
    if (!response.ok) {
        throw new Error('Ошибка при загрузке информации о преподавателе');
    }
    return await response.json();
};

export const fetchGroupInfo = async (teacherId, groupId) => {
    const response = await fetch(`${HOST_NAME}/teachers/profile/${teacherId}/group/${groupId}`);
    if (!response.ok) {
        throw new Error('Ошибка при загрузке информации о группе преподавателя');
    }
    return await response.json();
};


// API Студентов

export const fetchStudentsList = async (page = 1, limit = 10) => {
    const response = await fetch(`${HOST_NAME}/students/list/?page=${page}&page_size=${limit}`);
    if (!response.ok) {
        throw new Error('Ошибка при загрузке списка студентов');
    }
    return await response.json();
};

export const fetchStudent = async (studentId) => {
    const response = await fetch(`${HOST_NAME}/students/profile/${studentId}`);
    if (!response.ok) {
        throw new Error('Ошибка при загрузке информации о студенте');
    }
    return await response.json();
};


// API Групп

export const fetchGroupsList = async (page = 1, limit = 10) => {
    const response = await fetch(`${HOST_NAME}/groups/list/?page=${page}&page_size=${limit}`);
    if (!response.ok) {
        throw new Error('Ошибка при загрузке списка групп');
    }
    return await response.json();
};

export const fetchGroup = async (studentId) => {
    const response = await fetch(`${HOST_NAME}/groups/profile/${studentId}`);
    if (!response.ok) {
        throw new Error('Ошибка при загрузке информации о группе');
    }
    return await response.json();
};


// API Курсов

export const createCourse = async (courseForm) => {
    const response = await fetch(`${HOST_NAME}/courses/create/`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
        },
        body: courseForm,
    });
    if (!response.ok) {
        response.text().then(text => {
            console.log('Ошибка:', response.status);
            console.log('Тело ошибки:', text); // тело ошибки
        }
        )
        throw new Error(`Ошибка при создании курса:\n ${response.text}}`);
    }
    return await response.json();
}

export const fetchCoursesList = async () => {
    const response = await fetch(`${HOST_NAME}/courses/list/`);
    if (!response.ok) {
        throw new Error('Ошибка при загрузке списка курсов');
    }
    return await response.json();
};

export const fetchCourse = async (courseId) => {
    const response = await fetch(`${HOST_NAME}/courses/info/${courseId}`);
    if (!response.ok) {
        throw new Error('Ошибка при загрузке информации о курсе');
    }
    return await response.json();
};
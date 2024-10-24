import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SimpleFormDropbox from '../../../../components/dropbox/SimpleFormDropbox';
import ColorPickerDropbox from '../../../../components/dropbox/ColorPickerDropbox';
import { createCourse } from '../../../../../utils/api';

const CourseAddModalForm = ({ isOpen, onClose, updateCourseList }) => {
    const [courseName, setCourseName] = useState('');
    const [lessonDuration, setLessonDuration] = useState('');
    const [courseDuration, setCourseDuration] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [color, setColor] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({ courseName, lessonDuration, courseDuration, price, color, description });
        const courseForm = new FormData();
        courseForm.append('branch', 4);
        courseForm.append('title', courseName);
        courseForm.append('description', description);
        courseForm.append('price', price);
        courseForm.append('lesson_duration', lessonDuration);
        courseForm.append('course_duration', courseDuration);
        courseForm.append('photo_color', color);

        try {
            await createCourse(courseForm);
            updateCourseList();
            handleClose();
            toast.success('Новый курс успешно создан!');
        } catch (error) {
            console.log('Ошибка:', error);
            toast.error('Что-то пошло не так при создании курса...');
        } finally {
        }
    };


    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    // Функция для закрытия модального окна и сброса полей
    const handleClose = () => {
        // Сброс всех полей при закрытии
        setCourseName('');
        setCourseDuration('');
        setPrice('');
        setDescription('');

        // Вызов onClose для закрытия модального окна
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content">
                <div className="modal-header">
                    <h5>Добавить новый курс</h5>
                    <button type="button" className="close-btn" onClick={handleClose}>x</button>
                </div>
                <div className="modal-body">
                    <form onSubmit={handleSubmit}>

                        {/* Поле для ввода названия курса */}
                        <div className="form-group">
                            <label htmlFor="name">Название</label>
                            <input
                                type="text"
                                id="name"
                                className="form-control"
                                value={courseName}
                                onChange={(e) => setCourseName(e.target.value)}
                                placeholder="Введите название курса"
                                required
                            />
                        </div>

                        {/* Поле для выбора продолжительности урока */}
                        <SimpleFormDropbox
                            title={'Продолжительность урока (минуты)'}
                            value_name={'class_time'}
                            setValue={setLessonDuration}
                            data={{
                                10: '10 минут',
                                20: '20 минут',
                                30: '30 минут',
                                40: '40 минут',
                                50: '50 минут',
                                60: '60 минут',
                                70: '70 минут',
                            }
                            }
                            isRequired={true}
                        />

                        {/* Поле для выбора продолжительности курса */}
                        <SimpleFormDropbox
                            title={'Продолжительность курса (месяцы)'}
                            value_name={'class_time'}
                            setValue={setCourseDuration}
                            data={{
                                1: '1 месяц',
                                2: '2 месяца',
                                3: '3 месяца',
                                4: '4 месяца',
                                5: '5 месяцев',
                                6: '6 месяцев',
                                7: '7 месяцев',
                                8: '8 месяцев',
                                9: '9 месяцев',
                                10: '10 месяцев',
                                11: '11 месяцев',
                                12: '12 месяцев',
                                13: '13 месяцев',
                                14: '14 месяцев',
                                15: '15 месяцев',
                                16: '16 месяцев',
                                17: '17 месяцев',
                                18: '18 месяцев',
                                19: '19 месяцев',
                                20: '20 месяцев',
                                21: '21 месяц',
                                22: '22 месяца',
                                23: '23 месяца',
                                24: '24 месяца',
                            }}
                            isRequired={true}
                        />

                        {/* Поле для ввода цены за курс */}
                        <div className="form-group">
                            <label htmlFor="name">Цена</label>
                            <input
                                type="number"
                                id="name"
                                className="form-control"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder="Цена за курс"
                                step="500" min="5000"
                                required
                            />
                        </div>

                        {/* Выбор цвета курса */}
                        <ColorPickerDropbox
                            title={'Цвет'}
                            value_name={'green'}
                            setValue={setColor}
                            colors={{
                                "green": "Зеленый",
                                "orange": "Оранжевый",
                                "red": "Красный",
                                "gray": "Серый",
                                "blue": "Синий",
                            }}
                            isRequired={true}
                        />

                        {/* Поле для ввода описания */}
                        <div className="form-group">
                            <label htmlFor="name">Описание</label>
                            <textarea
                                type="text"
                                id="comments"
                                value={description}
                                className="form-control form-control-textarea"
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Описание курса"
                            />
                        </div>

                        {/* Кнопка отправки формы */}
                        <div className="form-group text-right">
                            <button type="submit" className="btn btn-primary">Сохранить</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CourseAddModalForm;

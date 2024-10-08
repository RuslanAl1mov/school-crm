import { createTeacher } from '../../../../utils/api';
import './style.css';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const TeachersRightModalForm = ({ isOpen, onClose }) => {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [photo, setPhoto] = useState(null);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordField, setShowPasswordField] = useState(false);

  const handleSubmit = async (e) => {

    e.preventDefault();

    
    const formData = new FormData();


    console.log(photo);
    formData.append('phone_number', phone);
    formData.append('fullname', name);
    formData.append('birth_date', dob);
    formData.append('gender', gender);
    formData.append('role', 'teacher');
    
    if (photo) {
      formData.append('photo', photo);
    }

    // Если пароль установлен, добавляем его
    if (password) {
      formData.append('password', password);
    }

    // Логирование данных для проверки
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    try {
      await createTeacher(formData);
      onClose(); // Закрываем модальное окно
      toast.success('Преподаватель успешно добавлен!');
    } catch (error) {
      console.log('Ошибка:', error);
      toast.error('Что-то пошло не так при сохранении преподавателя...');
    }
  };

  // Обработчик клика по overlay для закрытия модального окна
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Показать поле для ввода пароля при нажатии на ссылку
  const handleSetPasswordClick = () => {
    setShowPasswordField(true);
  };

  // Показать/скрыть пароль при нажатии/отпускании кнопки
  const handlePasswordVisibility = (isVisible) => {
    setShowPassword(isVisible);
  };

  if (!isOpen) return null;

  return (

    <div className="modal-overlay" onClick={handleOverlayClick}>
 
      <div className="modal-content">
        <div className="modal-header">
          <h5>Добавить нового учителя</h5>
          <button type="button" className="close-btn" onClick={onClose}>x</button>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            {/* Поле для ввода телефона */}
            <div className="form-group">
              <label htmlFor="phone">Телефон</label>
              <div className="input-group">
                <span className="input-group-text">+998</span>
                <input
                  type="text"
                  id="phone"
                  className="form-control form-control-phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Введите телефон"
                  required
                />
              </div>
            </div>

            {/* Поле для ввода имени */}
            <div className="form-group">
              <label htmlFor="name">Имя</label>
              <input
                type="text"
                id="name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Введите имя"
                required
              />
            </div>

            {/* Поле для выбора даты рождения */}
            <div className="form-group">
              <label htmlFor="dob">Дата рождения</label>
              <input
                type="date"
                id="dob"
                className="form-control"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
              />
            </div>

            {/* Поле для выбора пола */}
            <div className="form-group">
              <label>Пол</label>
              <div className='radio-block'>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="gender"
                    value="M"
                    checked={gender === 'M'}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  Мужчина
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="gender"
                    value="W"
                    checked={gender === 'W'}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  Женщина
                </label>
              </div>
            </div>

            {/* Поле для загрузки фото */}
            <div className="form-group">
              <label htmlFor="photo">Фото</label>
              <input
                type="file"
                id="photo"
                className="form-control-file"
                onChange={(e) => setPhoto(e.target.files[0])}
              />
            </div>

            {/* Ссылка для установки пароля */}
            <div className="">
              {!showPasswordField && (
                <a href="#" onClick={handleSetPasswordClick} className="set-password-link">
                  + Установить пароль
                </a>
              )}
            </div>

            {/* Поле для ввода пароля, отображается только при нажатии на ссылку */}
            {showPasswordField && (
              <div className="form-group">
                <label htmlFor="password">Новый пароль</label>
                <div className="input-group">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Введите пароль"
                    required
                  />
                  <button
                    type="button"
                    className="input-group-btn"
                    onMouseDown={() => handlePasswordVisibility(true)}
                    onMouseUp={() => handlePasswordVisibility(false)}
                    onMouseLeave={() => handlePasswordVisibility(false)}
                  >
                    {/* Место для иконки SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-eye"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zm-8 4a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      <path d="M8 5a3 3 0 0 0-2.847 4.104A3.5 3.5 0 0 0 8 5z" />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {/* Кнопка отправки формы */}
            <div className="form-group text-right">
              <button type="submit" className="btn btn-primary">Отправить</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TeachersRightModalForm;

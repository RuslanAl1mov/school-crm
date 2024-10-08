import './style.css';
import React, { useState } from 'react';

const TeacherAddModalForm = ({ isOpen, onClose }) => {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [comments, setComments] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordField, setShowPasswordField] = useState(false);
  const [showAddToGroupField, setShowAddToGroupField] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ phone, name, dob, gender, comments, password });
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSetPasswordClick = () => {
    setShowPasswordField(true);
  };

  const handleAddStudentoGroupClick = () => {
    setShowAddToGroupField(true);
  }

  const handlePasswordVisibility = (isVisible) => {
    setShowPassword(isVisible);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <div className="modal-header">
          <h5>Добавить нового студента</h5>
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
                    value="m"
                    checked={gender === 'm'}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  Мужчина
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="gender"
                    value="f"
                    checked={gender === 'f'}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  Женщина
                </label>
              </div>
            </div>

            {/* Поле для ввода комментария */}
            <div className="form-group">
              <label htmlFor="name">Комментарии</label>
              <textarea
                type="text"
                id="comments"
                value={comments}
                className="form-control form-control-textarea"
                onChange={(e) => setComments(e.target.value)}
                placeholder="Комментарии"
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

            {/* Ссылка для добавления студента в группу */}
            <div className="set-password-link-block">
              {!showAddToGroupField && (
                <a href="#" onClick={handleAddStudentoGroupClick} className="set-password-link">
                  + Добавить в группу
                </a>
              )}
            </div>

            {/* Поля добавлния студента в группу */}
            {showAddToGroupField && (
              <div className="form-group">
                <label htmlFor="password">Группа</label>
                <div className="form-control search-group-form">
                  <input type="text" placeholder="Выберите группу"/>
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

export default TeacherAddModalForm;

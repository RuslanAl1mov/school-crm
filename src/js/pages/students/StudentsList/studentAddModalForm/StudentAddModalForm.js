import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SimpleFormDropbox from '../../../../components/dropbox/SimpleFormDropbox';
import { createStudent, fetchGroupsList } from '../../../../../utils/api';

const StudentAddModalForm = ({ isOpen, onClose, loadStudentsData }) => {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [date_of_birth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [comments, setComments] = useState('');
  const [photo, setPhoto] = useState(null);
  const [password, setPassword] = useState('');
  const [group, setGroup] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showAddToGroupField, setShowAddToGroupField] = useState(false);

  const [groupsData, setGroupsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    // Function to load group data
    const loadGroups = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchGroupsList();
        const groupsObject = data.results.groups.reduce((acc, group) => {
          acc[group.id] = group.name; // добавляем группу в аккумулятор
          return acc; // возвращаем аккумулятор
        }, {});


        setGroupsData(groupsObject);
      } catch (err) {
        setError("Ошибка при загрузке данных групп. Пожалуйста, попробуйте еще раз.");
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadGroups();
  }, []);

  const cleanPhone = (phone) => phone.replace(/\s+/g, '');

  // Функция для форматирования номера телефона в формат "91 123 12 12"
  const handlePhoneChange = (e) => {
    let value = e.target.value
      .replace(/\D/g, '') // Удаляем все, кроме цифр
      .substring(0, 9); // Ограничиваем длину до 9 символов

    // Форматируем номер телефона
    if (value.length <= 2) {
      value = value.replace(/(\d{0,2})/, '$1');
    } else if (value.length <= 5) {
      value = value.replace(/(\d{2})(\d{0,3})/, '$1 $2');
    } else if (value.length <= 7) {
      value = value.replace(/(\d{2})(\d{3})(\d{0,2})/, '$1 $2 $3');
    } else {
      value = value.replace(/(\d{2})(\d{3})(\d{2})(\d{0,2})/, '$1 $2 $3 $4').trim();
    }

    setPhone(value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const studentForm = new FormData();
    studentForm.append("branch_id", 4);

    studentForm.append("phone_number", cleanPhone(phone));
    studentForm.append("fullname", name);
    studentForm.append("birth_date", date_of_birth);
    studentForm.append("gender", gender);
    studentForm.append("comment_info", comments);
    studentForm.append("password", password);
    studentForm.append("additional_info", {});
    if (photo) {
      studentForm.append('photo', photo);
    }
    if (group) {
      studentForm.append('group_id', group);
    }

    console.log({ phone, name, date_of_birth, gender, comments, photo, password, group });

    // studentForm.forEach((value, key) => {
    //   console.log(`${key}: ${value}`);
    // });

    try {
      await createStudent(studentForm);
      clearForm();
      onClose();
      toast.success('Студент успешно добавлен!');
    } catch (error) {
      console.log('Ошибка:', error);
      toast.error('Что-то пошло не так при сохранении студента...');
    } finally {
      loadStudentsData();
    }
  };

    // Функция для очистки формы
    const clearForm = () => {
      setPhone('');
      setName('');
      setDob('');
      setGender('');
      setComments('');
      setPassword('');
      setPhoto(null);
      setGroup(null);
    };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
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
                  onChange={handlePhoneChange}
                  type="text"
                  id="phone"
                  className="form-control form-control-phone"
                  value={phone}
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
                value={date_of_birth}
                onChange={(e) => setDateOfBirth(e.target.value)}
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

            {/* Поле для ввода пароля, отображается только при нажатии на ссылку */}
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
              <SimpleFormDropbox title={"Выберите группу"} setValue={setGroup} data={groupsData} />
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

export default StudentAddModalForm;

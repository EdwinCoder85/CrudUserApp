import { useState } from "react";
import WarningDelete from './WarningDelete';
import './styles/UserCard.css';

const   UserCard = ({ 
  user, 
  deleteUserById, 
  setUpdateInfo, 
  handleOpenForm
}) => {

  const [closeWarning, setCloseWarning] = useState(true)

  const handleOpenWarning = () => {
    setCloseWarning(false)
  }

  const handleDelete = (e) => {
      e.preventDefault()
      deleteUserById('/users', user.id)
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    setUpdateInfo(user)
    handleOpenForm()
  }

  const handleCloseWarning = () => {
    setCloseWarning(true)
  }

  return (
    <>
      <article className='user'>
        <h2 className='user__title'>{`${user.first_name} ${user.last_name}`}</h2>
        <hr className='user__line' />
        <ul className='user__list'>
          <li className='user__item'>
            <span className='user__label'>CORREO</span>
            <span className='user__item-value'>{user.email}</span>
          </li>
          <li className='user__item'>
            <span className='user__label'>CUMPLEAÑOS</span>
            <span className='user__item-value'><i className='bx bx-gift'></i> {user.birthday}</span>
          </li>
        </ul>
        <hr className='user__line' />
        <footer className='user__footer'>
          <button className='user__footer-btn btn_red' onClick={handleOpenWarning}>
            <i className="bx bx-trash"></i>
          </button>
          <button className='user__footer-btn btn_gray' onClick={handleUpdate}>
            <i className='bx bx-pencil'></i>
          </button>
        </footer>
      </article>
      <WarningDelete
        user={user}
        handleDelete={handleDelete}
        closeWarning={closeWarning}
        handleCloseWarning={handleCloseWarning}
      />
    </>
  );
};

export default UserCard;

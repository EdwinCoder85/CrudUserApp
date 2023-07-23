import "./styles/WarningUser.css";

const WarningDelete = ({
  user,
  handleDelete,
  closeWarning,
  handleCloseWarning
}) => {

  return (
    <div onClick={handleCloseWarning} className={`warninguser-container ${closeWarning && 'close-warning'}`}>
          <form onClick={e => e.stopPropagation()} className="warninguser">
            <h2 className="warninguser__title">Eliminar usuario</h2>
            <div onClick={handleCloseWarning} className="warninguser__close">x</div>
            <span className="warninguser__message">
              El usuario <strong>{`${user.first_name} ${user.last_name}`}</strong> se ha eliminado satisfactoriamente
            </span>
            <button onClick={handleDelete} className="warninguser__btn">
              Aceptar
            </button>
          </form>
    </div>
  )
}

export default WarningDelete;
import "./styles/WarningUser.css";

const WarningUser = ({
  user,
  handleCreateUpdate,
  handleDelete,
  closeWarning,
  handleCloseWarning,
  flag
}) => {

  return (
    <div onClick={handleCloseWarning} className={`warninguser-container ${closeWarning && 'close-warning'}`}>
          <form onClick={e => e.stopPropagation()} className="warninguser">
            <h2 className="warninguser__title">{flag === 'N' ? "Crear Usuario" : flag === 'U' ? "Editar Usuario" : "Eliminar Usuario" }</h2>
            <div onClick={handleCloseWarning} className="warninguser__close">x</div>
            <span className="warninguser__message">
              El usuario <strong>{`${user?.first_name} ${user?.last_name}`}</strong> se ha {flag === 'N' ? "creado" : flag === 'U' ? "actualizado" : "eliminado" } satisfactoriamente
            </span>
            <button onClick={flag === 'N' ? handleCreateUpdate : flag === 'U' ? handleCreateUpdate : handleDelete } className="warninguser__btn">
              Aceptar
            </button>
          </form>
    </div>
  )
}

export default WarningUser;
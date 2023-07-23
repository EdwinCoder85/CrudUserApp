import "./styles/WarningUser.css";

const WarningCreateUpdate = ({
  updateInfo,
  user,
  handleCreateUpdate,
  closeWarning,
  handleCloseWarning
}) => {

  return (
    <div onClick={handleCloseWarning} className={`warninguser-container ${closeWarning && 'close-warning'}`}>
          <form onClick={e => e.stopPropagation()} className="warninguser">
            <h2 className="warninguser__title">{updateInfo? "Editar Usuario" : "Crear Usuario" }</h2>
            <div onClick={handleCloseWarning} className="warninguser__close">x</div>
            <span className="warninguser__message">
              El usuario <strong>{`${user?.first_name} ${user?.last_name}`}</strong> se ha {updateInfo ? "actualizado" : "creado" } satisfactoriamente
            </span>
            <button onClick={handleCreateUpdate} className="warninguser__btn">
              Aceptar
            </button>
          </form>
    </div>
  )
}

export default WarningCreateUpdate;
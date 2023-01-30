import cerrarBtn from '../img/cerrar.svg'

export const Modal = ({ setModal, animarModal, setAnimarModal }) => {

    const ocultarModal = () => {
        setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
        }, 500);
    }

    return (
        <div className="modal">

            <div className="cerrar-modal">
                <img
                    src={cerrarBtn}
                    alt="cerrar-modal"
                    onClick={ocultarModal}
                />
            </div>

            <form className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>
                <legend>Nuevo Gasto</legend>
                <div className="campo">
                    <label htmlFor="nombre">Nombre Gasto</label>
                    <input
                        id='nombre'
                        type="text"
                        placeholder='Crar el nombre del gasto'
                    />
                </div>
                <div className="campo">
                    <label htmlFor="cantidad">Cantidad</label>
                    <input
                        id='cantidad'
                        type="text"
                        placeholder='Crar la cantidad del gasto: ej. 3000'
                    />
                </div>
                <div className="campo">
                    <label htmlFor="categoria">Categoria</label>
                    <select name="categoria" id="categoria">
                        <option value="">-- Seleccione --</option>
                        <option value="Ahorro">Ahorro</option>
                        <option value="Comida">Comida</option>
                        <option value="Gastos Varios">Gastos Varios</option>
                        <option value="Tiempo Libre">Tiempo Libre</option>
                        <option value="Salud">Salud</option>
                        <option value="Suscripciones">Suscripciones</option>
                    </select>
                </div>
                <input type="submit" value="Crear Gasto" />
            </form>

        </div>
    )
}

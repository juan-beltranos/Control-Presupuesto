import { useState } from 'react'
import { Mensaje } from './Mensaje'

import cerrarBtn from '../img/cerrar.svg'

export const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto }) => {

    const [mensaje, setMensaje] = useState('')

    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')

    const ocultarModal = () => {
        setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
        }, 500);
    }

    const handleSubmit = e => {
        e.preventDefault()

        if ([nombre, cantidad, categoria].includes('')) {
            setMensaje('Todos los campos son obligatorios')

            setTimeout(() => {
                setMensaje('')
            }, 3000)
            return
        }

        guardarGasto({ nombre, cantidad, categoria })
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

            <form
                className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}
                onSubmit={handleSubmit}
            >
                <legend>Nuevo Gasto</legend>

                {
                    mensaje && <Mensaje tipo="error"> {mensaje} </Mensaje>
                }

                <div className="campo">
                    <label htmlFor="nombre">Nombre Gasto</label>
                    <input
                        id='nombre'
                        type="text"
                        placeholder='Crar el nombre del gasto'
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>
                <div className="campo">
                    <label htmlFor="cantidad">Cantidad</label>
                    <input
                        id='cantidad'
                        type="text"
                        placeholder='Crar la cantidad del gasto: ej. 3000'
                        value={cantidad}
                        onChange={e => setCantidad(e.target.value)}
                    />
                </div>
                <div className="campo">
                    <label htmlFor="categoria">Categoria</label>
                    <select name="categoria" id="categoria" value={categoria} onChange={e => setCategoria(e.target.value)}>
                        <option value="">-- Seleccione --</option>
                        <option value="Ahorro">Ahorro</option>
                        <option value="Comida">Comida</option>
                        <option value="Gastos">Gastos Varios</option>
                        <option value="Tiempo">Tiempo Libre</option>
                        <option value="Salud">Salud</option>
                        <option value="Suscripciones">Suscripciones</option>
                    </select>
                </div>
                <input type="submit" value="Crear Gasto" />
            </form>

        </div>
    )
}

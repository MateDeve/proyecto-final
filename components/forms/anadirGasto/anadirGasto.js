import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { mainSection, formViaje, customCheckbox, containerCheckbox, rowInput } from "./AnadirGasto.module.css"
import { btn } from "../Forms.module.css"

const AnadirGasto = () => {
    const router = useRouter()

    const [newGasto, setNewGasto] = useState({
        name: "",
        price: "",
        paidFor: "",
        date: "",
        divBetween: [],
    })

    const [misViajes, setMisViajes] = useState([])
    const [selectedViaje, setSelectedViaje] = useState(null)
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")
    const { viaje } = router.query

    // Efecto para sincronizar el estado con localStorage
    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"))
        const allViajes = JSON.parse(localStorage.getItem("viajes")) || []

        if (currentUser) {
        const userViajes = allViajes.filter(
            (v) => v.owner === currentUser.userName || v.guests.includes(currentUser.userName)
        )
        setMisViajes(userViajes)
        // Filtrar el viaje seleccionado
        const viajeSeleccionado = userViajes.find((v) => v.code === viaje)

        setSelectedViaje(viajeSeleccionado || null)
        }
    }, [router.query.viaje])


    // Manejar cambios en los campos de entrada
    const handleChange = (e) => {
        const { name, value } = e.target
        setNewGasto((prev) => ({
        ...prev,
        [name]: value,
        }))
    }

    // Manejar cambios en los checkboxes
    const handleCheckboxChange = (e) => {
        const { id, checked } = e.target
        setNewGasto((prev) => ({
        ...prev,
        divBetween: checked
            ? [...prev.divBetween, {userName: id, paid: 0}]
            : prev.divBetween.filter((persona) => persona.userName !== id),
        }))
    }

    // Agregar un nuevo gasto
    const handleAddGasto = (e) => {
        e.preventDefault()

        const { name, price, paidFor, date, divBetween } = newGasto

        if (!name || !price || !paidFor || !date || divBetween.length === 0) {
            setError("Por favor completa todos los campos y selecciona al menos una persona.")
            return
        }

        divBetween.some((item) => item.userName === paidFor ? item.paid = price : 0)


        // Actualizar el gasto en el viaje correspondiente
        const updatedViajes = misViajes.map((v) => {
            if (v.code === viaje) {
                const updatedBills = [...(v.Bills || []), newGasto]
                return { ...v, Bills: updatedBills }
            }
            return v
        })

        

        // Guardar los cambios en el localStorage
        setMisViajes(updatedViajes)
        localStorage.setItem("viajes", JSON.stringify(updatedViajes))

        // Limpiar el formulario
        setNewGasto({
        name: "",
        price: "",
        paidFor: "",
        date: "",
        divBetween: [],
        })
        setError("")
        setSuccess("Gasto añadido correctamente. Redirigiendo...")
        setTimeout(() => {
            window.location.href = "mis-viajes?view=detalle&viaje=" + selectedViaje.name + "&codigo=" + viaje
        }, 1000)
    }

    // Mostrar los invitados del viaje
    const getPersonasDelViaje = () => {
        if (selectedViaje) {
            return [selectedViaje.owner, ...selectedViaje.guests]
        }
        return []
    }

    return (
        <>
        <h2>Nuevo gasto</h2>
        <section className={mainSection}>
            <form className={formViaje} onSubmit={handleAddGasto}>
                <input
                    type="text"
                    placeholder="Nombre del gasto"
                    name="name"
                    id="name"
                    value={newGasto.name}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    placeholder="Precio total gastado"
                    name="price"
                    id="price"
                    value={newGasto.price}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Pagado por"
                    name="paidFor"
                    id="paidFor"
                    value={newGasto.paidFor}
                    onChange={handleChange}
                />
                <input
                    type="date"
                    className={rowInput}
                    placeholder="Fecha"
                    name="date"
                    id="date"
                    value={newGasto.date}
                    onChange={handleChange}
                />
                <p>Dividido entre:</p>
                {getPersonasDelViaje().map((persona, index) => (
                    <div key={index} className={containerCheckbox}>
                    <input
                        className={customCheckbox}
                        type="checkbox"
                        id={persona}
                        checked={newGasto.divBetween.some((item) => item.userName === persona)}
                        onChange={handleCheckboxChange}
                    />
                    <label htmlFor={persona}>{persona}</label>
                    </div>
                ))}
                {error && <p style={{color: "red"}}>{error}</p>}
                {success && <p style={{color:"green"}}>{success}</p>}
                <input type="submit" value="Añadir gasto" className={btn} />
            </form>
        </section>
        </>
    )
}

export default AnadirGasto

import React, { useState } from "react"
import { mainSection, listaSeleccionados, seleccionado, btnEliminar } from "./AgregarViaje.module.css"
import { btn } from "../Forms.module.css"
import Usuarios from "@/components/usuarios/usuarios"

const AgregarViaje = () => {
    const [viajeData, setViajeData] = useState({
        name: "",
        badge: "",
        guests: "",
    })

    const [selectedGuests, setSelectedGuests] = useState([])
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [listaUsuarios, setListaUsuarios] = useState(false)
    const [filtro, setFiltro] = useState("")

    // Maneja cambios en los inputs
    const handleChange = (e) => {
        const { name, value } = e.target
        setViajeData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const handleFiltro = (e) => {
        setFiltro(e.target.value)
    }

    const handleSelectUser = (userName) => {
        if (!selectedGuests.includes(userName)) {
            setSelectedGuests((prev) => [...prev, userName])
        }
        setFiltro("")
        setListaUsuarios(false)
    }

    const handleRemoveGuest = (userName) => {
        setSelectedGuests((prev) => prev.filter((guest) => guest !== userName));
    };



    const generateUniqueCode = () => {
        const viajes = JSON.parse(localStorage.getItem("viajes")) || []
        let code
    
        do {
            const timestamp = Date.now()
            const randomNum = Math.floor(Math.random() * 10000)
            code = `V-${timestamp}-${randomNum}`
        } while (viajes.some((viaje) => viaje.code === code))
    
        return code
    }

    // Valida y guarda el nuevo viaje
    const handleSubmit = (e) => {
        e.preventDefault()
        const { name, badge } = viajeData

        // Validaciones
        if (!name || !badge) {
            setError("Todos los campos son obligatorios.")
            return
        }

        const currentUser = JSON.parse(localStorage.getItem("currentUser"))
        if (!currentUser) {
            setError("No hay un usuario autenticado. Inicia sesión primero.")
            return
        }

        const code = generateUniqueCode()

        const viajes = JSON.parse(localStorage.getItem("viajes")) || []
        const newViaje = { code, name, badge, guests: selectedGuests, Bills: [],owner: currentUser.userName }

        localStorage.setItem("viajes", JSON.stringify([...viajes, newViaje]))
        setError("")
        setSuccess("Viaje creado exitosamente. Redirigiendo...")
        setTimeout(() => {
            window.location.href = "/mis-viajes?view=viajes"
        }, 2000)
    }

    return (
        <>
            <h2>Nuevo viaje</h2>
            <section className={mainSection}>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Nombre del viaje"
                        name="name"
                        value={viajeData.name}
                        onChange={handleChange}
                        onClick={() => {setListaUsuarios(false)}}
                    />
                    <input
                        type="text"
                        placeholder="Tipo de divisa (COP o USD)"
                        name="badge"
                        value={viajeData.badge}
                        onChange={handleChange}
                        onClick={() => {setListaUsuarios(false)}}
                    />
                    <input
                        type="text"
                        placeholder="Agregar participante"
                        name="participant"
                        value={filtro}
                        onChange={handleFiltro}
                        onClick={() => {setListaUsuarios(true)}}
                        style={{marginBottom:0}}
                    />
                    {listaUsuarios && filtro && (
                        <Usuarios filtro={filtro} onSelectUser={handleSelectUser}/>
                    )}
                    <ul className={listaSeleccionados}>
                        {selectedGuests.map((guest, index) => (
                            <li key={index} className={seleccionado}>
                                {guest}{" "}
                                <button
                                    type="button"
                                    onClick={() => handleRemoveGuest(guest)}
                                    className={btnEliminar}
                                >
                                    ⨉
                                </button>
                            </li>
                        ))}
                    </ul>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    {success && <p style={{ color: "green" }}>{success}</p>}
                    <input
                        type="submit"
                        value="Crear un nuevo viaje"
                        className={btn}
                        style={{marginTop: "20px"}}
                    />
                </form>
            </section>
        </>
    )
}

export default AgregarViaje

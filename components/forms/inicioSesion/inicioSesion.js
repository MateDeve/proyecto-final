import { useState } from "react"
import { btn } from "../Forms.module.css"

const InicioSesion = () => {
    const [formData, setFormData] = useState({ userName: "", password: "" })
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const { userName, password } = formData

        const users = JSON.parse(localStorage.getItem("users")) || []
        const user = users.find((user) => user.userName === userName && user.password === password)

        if (!user) {
            setError("Nombre de usuario o contraseña incorrectos.")
            return
        }

        localStorage.setItem("currentUser", JSON.stringify(user))
        setError("")
        setSuccess("Inicio de sesión exitoso")
        setTimeout(() => {
            window.location.href = "/mis-viajes?view=viajes"
        }, 1000)
    }

    return (
        <>
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="userName"
                    placeholder="Nombre de Usuario"
                    value={formData.userName}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={formData.password}
                    onChange={handleChange}
                />
                {error && <p style={{ color: "red" }}>{error}</p>}
                {success && <p style={{ color: "green" }}>{success}</p>}
                <input
                    type="submit"
                    className={btn}
                    value="Iniciar Sesión"
                />
            </form>
        </>
    )
}

export default InicioSesion

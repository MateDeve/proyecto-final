import { useState } from "react";
import { btn } from "../Forms.module.css";

const Registro = () => {
    const [formData, setFormData] = useState({
        name: "",
        lastName1: "",
        lastName2: "",
        userName: "",
        mail: "",
        password: "",
        confPassword: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validateForm = (e) => {
        e.preventDefault();

        const { name, lastName1, lastName2, userName, mail, password, confPassword } = formData;

        // Validacione
        if (!name || !lastName1 || !mail || !password || !lastName2 || !userName) {
            setError("Todos los campos marcados con * son obligatorios.");
            return;
        }
        if (password !== confPassword) {
            setError("Las contraseñas no coinciden.");
            return;
        }

        // Guardar usuario en localStorage
        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
        if (existingUsers.some((user) => user.userName === userName)) {
            setError("Nombre de usuario existente.");
            return;
        }

        const newUser = {
            name,
            lastName1,
            lastName2,
            userName,
            mail,
            password,
        };

        localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]));
        setError("")
        setSuccess("Registro completado satisfactoriamente. Redirigiendo")
        setTimeout(() => {
            window.location.href = "/login";
        }, 2000)
    };

    return (
        <>
            <h2>Registro</h2>
            <form onSubmit={validateForm}>
                <input
                    type="text"
                    name="name"
                    placeholder="Nombre*"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="lastName1"
                    placeholder="Primer Apellido*"
                    value={formData.lastName1}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="lastName2"
                    placeholder="Segundo Apellido*"
                    value={formData.lastName2}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="userName"
                    placeholder="Nombre de Usuario*"
                    value={formData.userName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="mail"
                    placeholder="Correo Electrónico*"
                    value={formData.mail}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Contraseña*"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="confPassword"
                    placeholder="Confirmar Contraseña*"
                    value={formData.confPassword}
                    onChange={handleChange}
                    required
                />
                {error && <p style={{ color: "red" }}>{error}</p>}
                {success && <p style={{ color: "green" }}>{success}</p>}
                <input
                    type="submit"
                    className={btn}
                    value="Registrarse"
                />
            </form>
        </>
    );
};

export default Registro;

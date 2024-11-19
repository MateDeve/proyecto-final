import React, { useState, useEffect } from "react";
import { header, navLogo, logo, nav } from "./header.module.css";
import { container, linea } from "../../styles/Home.module.css";

const Header = () => {
    // Estado para manejar si hay un usuario conectado
    const [currentUser, setCurrentUser] = useState(null);

    // Efecto para sincronizar el estado con localStorage
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("currentUser"));
        setCurrentUser(user);
    }, []);

    // Función para cerrar sesión
    const Logout = () => {
        localStorage.removeItem("currentUser");
        setCurrentUser(null);
        window.location.href = "/";
    };

    return (
        <>
            <header className={header}>
                <div className={container}>
                    <div className={navLogo}>
                        <div className={logo}>
                            <a href="/">Bill2gether</a>
                        </div>
                        <nav className={nav}>
                            <ul>
                                {currentUser ? (
                                    <>
                                        <li style={{ color:"red" }}>
                                            {currentUser.userName}
                                        </li>
                                        <li>
                                            <a href="mis-viajes?view=viajes">Mis viajes</a>
                                        </li>
                                        <li onClick={Logout} style={{cursor: "pointer"}}>
                                            Cerrar Sesión
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li>
                                            <a href="login">Iniciar Sesión</a>
                                        </li>
                                        <li>
                                            <a href="register">Registrarse</a>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </nav>
                    </div>
                    <div className={linea}></div>
                </div>
            </header>
        </>
    );
};

export default Header;

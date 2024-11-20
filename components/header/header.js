import React, { useState, useEffect } from "react"
import { navLogo, logo, nav, menuButton, menuClosed, showMenu } from "./header.module.css"
import { container, linea } from "../../styles/Home.module.css"

const Header = () => {
    const [currentUser, setCurrentUser] = useState(null)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("currentUser"))
        setCurrentUser(user)
    }, [])

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const Logout = () => {
        localStorage.removeItem("currentUser")
        setCurrentUser(null)
        window.location.href = "/"
    }


    return (
        <header>
            <div className={container}>
                <div className={navLogo}>
                    <div className={logo}>
                        <a href="/">Bill2gether</a>
                    </div>
                    <button className={menuButton} onClick={toggleMenu}>
                        ☰
                    </button>
                    <nav className={`${nav} ${menuOpen ? showMenu : menuClosed}`}>
                        <ul>
                            {currentUser ? (
                                <>
                                    <li style={{ color: "red" }}>{currentUser.userName}</li>
                                    <li>
                                        <a href="mis-viajes?view=viajes">Mis viajes</a>
                                    </li>
                                    <li onClick={Logout} style={{ cursor: "pointer" }}>
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
    )
}

export default Header
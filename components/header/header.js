import React, { useState } from "react"
import { header, navLogo, logo, nav } from "./header.module.css"
import { container, linea } from "../../styles/Home.module.css"

const Header = () => {
    return(
        <>
            <header className={header}>
                <div className={container}>
                    <div className={navLogo}>
                        <div className={logo}><a href="/">Bill2gether</a></div>
                        <nav className={nav}>
                            <ul>
                                <li><a href="login">Ingresar</a></li>
                                <li><a href="register">Registrarse</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className={linea}></div>
                </div>
            </header>
        
        </>
    )
}

export default Header